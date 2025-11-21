import { useState } from 'react';
import { useParams, Link } from "react-router-dom";
import { posts } from "../data/posts";

export default function BlogPost() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);
  const [imageError, setImageError] = useState(false);

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center px-4">
        <div className="text-center">
          <div className="w-24 h-24 mx-auto mb-6 text-red-400">
            <svg fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">Post Not Found</h1>
          <p className="text-gray-400 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link 
            to="/blog" 
            className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-200 font-sans">
      {/* Navigation */}
      <nav className="border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors duration-200 group"
          >
            <svg className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Blog
          </Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="flex justify-center space-x-2 mb-4">
            {post.tags?.map((tag, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-indigo-500/20 text-indigo-300 text-sm rounded-full border border-indigo-500/30"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>
          <p className="text-xl text-gray-400 mb-6 max-w-2xl mx-auto leading-relaxed">
            {post.description}
          </p>
          <div className="flex items-center justify-center space-x-6 text-gray-500 text-sm">
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {new Date(post.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </span>
            {post.readTime && (
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {post.readTime}
              </span>
            )}
            {post.category && (
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                {post.category}
              </span>
            )}
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative mb-12 rounded-2xl overflow-hidden group">
          <div className="aspect-w-16 aspect-h-7 bg-gradient-to-r from-purple-900/50 to-indigo-900/50">
            {post.coverImage && !imageError ? (
              <img
                src={post.coverImage}
                alt={`${post.title} cover image`}
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-80 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 to-indigo-900/30"></div>
                <div className="relative text-center z-10">
                  <div className="w-16 h-16 mx-auto mb-4 text-indigo-400 opacity-60">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-400 text-lg">Engineering Project</p>
                </div>
              </div>
            )}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Content */}
        <article className="prose prose-invert prose-lg max-w-none 
          prose-headings:text-white 
          prose-h1:text-3xl prose-h1:font-bold prose-h1:mb-4
          prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-indigo-300
          prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-4
          prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
          prose-strong:text-white prose-strong:font-semibold
          prose-a:text-indigo-400 prose-a:no-underline hover:prose-a:underline
          prose-blockquote:border-l-indigo-500 prose-blockquote:bg-gray-800/50 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r-lg
          prose-ul:list-none prose-ul:space-y-2
          prose-li:flex prose-li:items-start
          prose-li:before:content-[''] prose-li:before:w-2 prose-li:before:h-2 prose-li:before:bg-indigo-500 prose-li:before:rounded-full prose-li:before:mt-2 prose-li:before:mr-3 prose-li:before:flex-shrink-0
          prose-code:text-indigo-300 prose-code:bg-gray-800 prose-code:px-2 prose-code:py-1 prose-code:rounded-lg prose-code:text-sm
          prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-700 prose-pre:rounded-xl prose-pre:overflow-x-auto
          prose-table:border-gray-700 prose-table:rounded-lg prose-table:overflow-hidden
          prose-th:bg-gray-800 prose-th:text-white prose-th:font-semibold
          prose-td:border-t prose-td:border-gray-700
          prose-img:rounded-xl prose-img:border prose-img:border-gray-700
          mb-20">
          <div dangerouslySetInnerHTML={{ __html: markdownToHtml(post.content) }} />
        </article>

        {/* Footer */}
        <footer className="border-t border-gray-800 pt-12 mt-16">
          <div className="text-center">
            <p className="text-gray-400 mb-6">
              Found this useful? Share it with fellow engineers!
            </p>
            <div className="flex justify-center space-x-4">
              <button className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200 group">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </button>
              <button className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200 group">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.016 10.016 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </button>
              <button className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200 group">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

/* --- Enhanced Markdown Converter --- */
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function markdownToHtml(text) {
  if (!text) return "";

  let out = escapeHtml(text);

  // Tables
  out = out.replace(/^\|(.+)\|$/gm, (match, row) => {
    const cells = row.split('|').map(cell => cell.trim());
    return `<tr>${cells.map(cell => `<td>${cell}</td>`).join('')}</tr>`;
  });

  // Code blocks with language
  out = out.replace(/```(\w+)?\s*\n?([\s\S]*?)```/g, function (_, lang, code) {
    const language = lang || 'text';
    return `<pre class="language-${language}"><code class="language-${language}">${escapeHtml(code.trim())}</code></pre>`;
  });

  // Inline code
  out = out.replace(/`([^`]+)`/g, '<code>$1</code>');

  // Headings
  out = out.replace(/^### (.*$)/gim, "<h3>$1</h3>");
  out = out.replace(/^## (.*$)/gim, "<h2>$1</h2>");
  out = out.replace(/^# (.*$)/gim, "<h1>$1</h1>");

  // Bold / italic
  out = out.replace(/\*\*(.*?)\*\*/gim, "<strong>$1</strong>");
  out = out.replace(/\*(.*?)\*/gim, "<em>$1</em>");

  // Blockquotes
  out = out.replace(/^>\s+(.*$)/gim, "<blockquote>$1</blockquote>");

  // Lists
  out = out.replace(/^\s*-\s+(.*)$/gim, "<li>$1</li>");
  out = out.replace(/(<li>.*<\/li>)/gs, "<ul>$1</ul>");

  // Ordered lists
  out = out.replace(/^\s*\d\.\s+(.*)$/gim, "<li>$1</li>");
  out = out.replace(/(<li>.*<\/li>)/gs, "<ol>$1</ol>");

  // Horizontal rule
  out = out.replace(/^-{3,}$/gim, "<hr>");

  // Paragraphs (more robust handling)
  out = out.split('\n\n').map(paragraph => {
    paragraph = paragraph.trim();
    if (!paragraph) return '';
    if (paragraph.startsWith('<') && (paragraph.endsWith('>') || paragraph.includes('</'))) {
      return paragraph; // Already HTML
    }
    return `<p>${paragraph}</p>`;
  }).join('');

  // Line breaks
  out = out.replace(/\n/g, "<br>");

  return out;
}