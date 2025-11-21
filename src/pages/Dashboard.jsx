import React, { useEffect, useState } from 'react';

async function post(path, data) {

  const BASE_API = `https://web_api.hichamallam.com${path}`;
  try {
    const res = await fetch(BASE_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return await res.json();
  } catch (error) {
    console.error('Post error:', error);
    return {};
  }
}

function formatDate(timestamp) {
  if (!timestamp) return 'N/A';
  return new Date(timestamp).toLocaleString();
}

function Dashboard() {
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [view, setView] = useState('dashboard');
  const [error, setError] = useState('');
  const [messages, setMessages] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);

  useEffect(() => {
    const session = sessionStorage.getItem("admin_session");
    if (session) {
      post("/login", { password: session }).then(res => {
        if (res.success) {
          setPassword(session);
          setLoggedIn(true);
        }
      });
    }
  }, []);

  useEffect(() => {
    if (loggedIn) loadData();
  }, [loggedIn]);

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await post("/login", { password });
    if (res.success) {
      sessionStorage.setItem("admin_session", password);
      setLoggedIn(true);
      setError('');
    } else {
      setError("Invalid password");
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("admin_session");
    setLoggedIn(false);
    setPassword('');
    setMessages([]);
  };

  const loadData = async () => {
    const res = await post("/read-data", { password });
    if (res.success && Array.isArray(res.data)) {
      const sorted = [...res.data].sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
      setMessages(sorted);
    }
  };

  const cheekNewMsg = (id) => {
    if (!localStorage.msg_id) {
      sessionStorage.setItem('msg_id',id)
      localStorage.setItem('msg_id',1);
      return 'bg-green-200'
    }
    
    return ''     
    
  };

return (
  <div className="text-black/70 bg-gray-100 min-h-screen flex items-center justify-center p-4">
    <div className="w-full max-w-4xl bg-white p-4 sm:p-6 rounded-xl shadow-lg">
      {!loggedIn ? (
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-blue-600">Admin Login</h2>
          <form onSubmit={handleLogin} className="space-y-4 sm:space-y-5">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition text-sm"
            >
              Login
            </button>
            {error && <p className="text-red-600 mt-3 text-center text-sm">{error}</p>}
          </form>
        </div>
      ) : (
        <div>
          <div className="flex flex-wrap justify-center space-x-0 sm:space-x-6 mb-6 border-b border-gray-200">
            <button onClick={() => setView('dashboard')} className={`py-2 px-4 border-b-2 font-semibold text-sm ${view === 'dashboard' ? 'text-blue-600 border-blue-600' : 'text-gray-600 border-transparent hover:border-blue-600 hover:text-blue-600'}`}>
              Dashboard
            </button>
            <button onClick={() => setView('password')} className={`py-2 px-4 border-b-2 font-semibold text-sm ${view === 'password' ? 'text-blue-600 border-blue-600' : 'text-gray-600 border-transparent hover:border-blue-600 hover:text-blue-600'}`}>
              Change Password
            </button>
          </div>

          {view === 'dashboard' && (
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-4">
                <h2 className="text-xl sm:text-2xl font-semibold">Contact Messages</h2>
                <button onClick={loadData} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm">Update</button>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300 rounded-lg text-left text-xs sm:text-sm">
                  <thead className="bg-blue-50 text-blue-700">
                    <tr>
                      <th className="p-3 border-b border-gray-300">Full Name</th>
                      <th className="p-3 border-b border-gray-300">Email</th>
                      <th className="p-3 border-b border-gray-300">Message Preview</th>
                      <th className="p-3 border-b border-gray-300">Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {messages.map((msg) => ( 
                      <tr key={msg.id}
                        onClick={() => setSelectedMessage(msg)}
                        className={`hover:bg-gray-100 cursor-pointer`}
                        >
                        <td className="p-3 border-b border-gray-300">{msg.full_name}</td>
                        <td className="p-3 border-b border-gray-300">
                          <a href={`mailto:${msg.email}`} className="text-blue-600 hover:underline">{msg.email}</a>
                        </td>
                        <td className="p-3 border-b border-gray-300">{msg.message?.slice(0, 30) + (msg.message?.length > 30 ? '...' : '')}</td>
                        <td className="p-3 border-b border-gray-300">{formatDate(msg.timestamp)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {selectedMessage && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                  <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-200 text-sm">
                    <div className="flex justify-between items-center border-b pb-4 mb-4">
                      <h3 className="text-xl sm:text-2xl font-bold text-blue-600">Message Details</h3>
                      <button
                        onClick={() => setSelectedMessage(null)}
                        className="text-gray-400 hover:text-gray-600 transition-colors duration-200 text-xl font-semibold"
                        aria-label="Close"
                      >
                        &times;
                      </button>
                    </div>
                    <div className="space-y-4 ">
                      <div className="flex flex-col sm:flex-row sm:gap-4">
                        <div>
                          <span className="font-semibold text-gray-600">ID:</span> {selectedMessage.id}
                        </div>
                        <div>
                          <span className="font-semibold text-gray-600">Date:</span> {formatDate(selectedMessage.timestamp)}
                        </div>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-600">Email:</span> &nbsp;
                        <span
                          className='cursor-pointer'
                          onDoubleClick={(e)=>{navigator.clipboard.writeText(e.target.textContent)}}>
                          {selectedMessage.email}
                        </span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-600">Name:</span> {selectedMessage.full_name}
                      </div>
                      <div>
                        <p className="whitespace-pre-wrap mt-2 border p-3 rounded-md bg-gray-50 text-gray-800 break-words">
                          {selectedMessage.message}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {view === 'password' && (
            <div className="max-w-md mx-auto">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-center">Change Password</h2>
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  const newPass = e.target.newPassword.value;
                  const res = await post("/set-password", { 
                    old_password: sessionStorage.getItem("admin_session"),
                    password: newPass
                  });
                  if (res.success) {
                    sessionStorage.setItem("admin_session", newPass);
                    setPassword(newPass);
                    alert("Password updated successfully");
                  } else {
                    alert("Failed to update password");
                  }
                }}
                className="space-y-4 sm:space-y-5"
              >
                <input
                  name="newPassword"
                  type="password"
                  placeholder="New password"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition text-sm"
                >Update Password</button>
              </form>
              <button
                onClick={handleLogout}
                className="mt-6 w-full bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition text-sm"
              >Logout</button>
            </div>
          )}
        </div>
      )}
    </div>
  </div>
);

}

export default Dashboard;