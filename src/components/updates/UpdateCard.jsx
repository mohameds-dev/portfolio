"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";

export function UpdateCard({ title, content, date, tags = [], images = [] }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
      {/* Header */}
      <div className="p-5 pb-3">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white flex-1">
            {title}
          </h3>
          <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
            {formatDate(date)}
          </span>
        </div>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-2.5 py-1 text-xs font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="px-5 pb-4">
        <div
          className={`text-gray-700 dark:text-gray-300 prose prose-sm dark:prose-invert max-w-none transition-all duration-300 ${
            isExpanded ? "" : "line-clamp-3"
          }`}
        >
          <ReactMarkdown
            components={{
              p: ({ node, ...props }) => (
                <p className="mb-3 leading-relaxed" {...props} />
              ),
              strong: ({ node, ...props }) => (
                <strong className="font-semibold text-gray-900 dark:text-white" {...props} />
              ),
              em: ({ node, ...props }) => (
                <em className="italic" {...props} />
              ),
              ul: ({ node, ...props }) => (
                <ul className="list-disc list-inside mb-3 space-y-1 ml-2" {...props} />
              ),
              ol: ({ node, ...props }) => (
                <ol className="list-decimal list-inside mb-3 space-y-1 ml-2" {...props} />
              ),
              a: ({ node, ...props }) => (
                <a
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                  {...props}
                />
              ),
              h1: ({ node, ...props }) => (
                <h1 className="text-xl font-bold mb-2 mt-4 text-gray-900 dark:text-white" {...props} />
              ),
              h2: ({ node, ...props }) => (
                <h2 className="text-lg font-semibold mb-2 mt-3 text-gray-900 dark:text-white" {...props} />
              ),
              h3: ({ node, ...props }) => (
                <h3 className="text-base font-semibold mb-2 mt-2 text-gray-900 dark:text-white" {...props} />
              ),
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      </div>

      {/* Images */}
      {images && images.length > 0 && (
        <div className="px-5 pb-4">
          <div
            className={`flex gap-3 overflow-x-auto transition-all duration-300 ${
              isExpanded ? "pb-2" : "pb-1"
            }`}
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "rgba(156, 163, 175, 0.5) transparent",
            }}
          >
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${title} - Image ${index + 1}`}
                className={`rounded-lg object-cover flex-shrink-0 transition-all duration-300 ${
                  isExpanded
                    ? "h-80 w-80 md:h-96 md:w-96"
                    : "h-32 w-32 md:h-40 md:w-40"
                }`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Show More/Less Button */}
      <div className="px-5 pb-4 pt-2">
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsExpanded(!isExpanded);
          }}
          className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium transition-colors duration-200 hover:underline cursor-pointer"
          type="button"
        >
          {isExpanded ? "Show less" : "Show more"}
        </button>
      </div>
    </div>
  );
}

