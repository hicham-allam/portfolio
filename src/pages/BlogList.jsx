// src/pages/BlogList.jsx
import { useState } from 'react';
import { Link } from "react-router-dom";
import { posts } from "../data/posts";

export default function BlogList() {
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  return (
    <div className="min-h-screen bg-gray-950 text-gray-200 font-sans">
      <div className="max-w-7xl mx-auto py-8 px-4">
        {/* Header */}
        <header className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-white mb-1">Engineering Blog</h1>
            <p className="text-gray-400 text-sm">Projects, tutorials & technical insights</p>
          </div>
          
          {/* View Mode Toggle */}
          <div className="flex items-center gap-1 bg-gray-900 rounded-lg p-1 border border-gray-800">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded-md transition-colors duration-200 ${
                viewMode === 'grid' 
                  ? 'bg-indigo-600 text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
              aria-label="Grid view"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-1.5 rounded-md transition-colors duration-200 ${
                viewMode === 'list' 
                  ? 'bg-indigo-600 text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
              aria-label="List view"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </header>

        {/* Posts Grid/List */}
        <div className={
          viewMode === 'grid' 
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            : "space-y-3"
        }>
          {posts.map((post) => (
            <BlogCard 
              key={post.id} 
              post={post} 
              viewMode={viewMode}
            />
          ))}
        </div>

        {/* Footer Stats */}
        <footer className="mt-8 pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-xs">
            {posts.length} engineering articles • Updated regularly
          </p>
        </footer>
      </div>
    </div>
  );
}

// Blog Card Component with image handling
function BlogCard({ post, viewMode }) {
  const [imageError, setImageError] = useState(false);

  if (viewMode === 'grid') {
    return (
      <article className="group bg-gradient-to-br from-gray-900/80 to-gray-900 rounded-xl shadow-lg border border-gray-800 hover:border-indigo-500/50 transition-all duration-300 overflow-hidden hover:transform hover:scale-[1.02]">
        {/* Image */}
        <div className="relative h-32 bg-gradient-to-r from-purple-900/30 to-indigo-900/30 overflow-hidden">
          {post.coverImage && !imageError ? (
            <img
              src={post.coverImage}
              alt={`${post.title} cover`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <div className="w-8 h-8 mx-auto mb-1 text-indigo-400 opacity-60">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-500 text-xs">Project Image</p>
              </div>
            </div>
          )}
          <div className="absolute top-2 left-2">
            {post.category && (
              <span className="px-2 py-0.5 bg-indigo-600 text-white text-xs rounded-full font-medium">
                {post.category}
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
            <span>{post.date}</span>
            {post.readTime && (
              <>
                <span>•</span>
                <span>{post.readTime}</span>
              </>
            )}
          </div>

          <h2 className="text-lg font-semibold text-white mb-2 line-clamp-2 group-hover:text-indigo-300 transition-colors leading-tight">
            {post.title}
          </h2>
          
          <p className="text-gray-400 text-xs mb-3 line-clamp-2 leading-relaxed">
            {post.description}
          </p>

          {/* Tags */}
          {post.tags && (
            <div className="flex flex-wrap gap-1 mb-3">
              {post.tags.slice(0, 2).map((tag, index) => (
                <span 
                  key={index}
                  className="px-1.5 py-0.5 bg-gray-800 text-gray-300 text-xs rounded"
                >
                  {tag}
                </span>
              ))}
              {post.tags.length > 2 && (
                <span className="px-1.5 py-0.5 bg-gray-800 text-gray-500 text-xs rounded">
                  +{post.tags.length - 2}
                </span>
              )}
            </div>
          )}

          <Link
            to={`/blog/${post.id}`}
            className="inline-flex items-center gap-1 text-indigo-400 hover:text-indigo-300 transition-colors group/link text-xs font-medium"
          >
            Read article
            <svg className="w-3 h-3 transform transition-transform group-hover/link:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </article>
    );
  }

  // List View - No images, more compact
  return (
    <article className="group bg-gradient-to-br from-gray-900/80 to-gray-900 rounded-lg shadow border border-gray-800 hover:border-indigo-500/50 transition-all duration-300 hover:transform hover:scale-[1.01]">
      <div className="p-3">
        <div className="flex flex-col">
          {/* Header with category and date */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              {post.category && (
                <span className="px-2 py-0.5 bg-indigo-600 text-white text-xs rounded-full font-medium">
                  {post.category}
                </span>
              )}
              <span className="text-xs text-gray-500">{post.date}</span>
            </div>
            {post.readTime && (
              <span className="text-xs text-gray-500">{post.readTime}</span>
            )}
          </div>

          {/* Title and Description */}
          <h2 className="text-base font-semibold text-white mb-1 group-hover:text-indigo-300 transition-colors leading-tight">
            {post.title}
          </h2>
          
          <p className="text-gray-400 text-xs mb-2 line-clamp-2 leading-relaxed">
            {post.description}
          </p>

          {/* Tags and Read Link */}
          <div className="flex items-center justify-between">
            {post.tags && (
              <div className="flex flex-wrap gap-1">
                {post.tags.slice(0, 3).map((tag, index) => (
                  <span 
                    key={index}
                    className="px-1.5 py-0.5 bg-gray-800 text-gray-300 text-xs rounded"
                  >
                    {tag}
                  </span>
                ))}
                {post.tags.length > 3 && (
                  <span className="px-1.5 py-0.5 bg-gray-800 text-gray-500 text-xs rounded">
                    +{post.tags.length - 3}
                  </span>
                )}
              </div>
            )}
            
            <Link
              to={`/blog/${post.id}`}
              className="inline-flex items-center gap-1 text-indigo-400 hover:text-indigo-300 transition-colors group/link text-xs font-medium whitespace-nowrap ml-2"
            >
              Read
              <svg className="w-3 h-3 transform transition-transform group-hover/link:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}