'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Sparkles, Clock, TrendingUp, FileText, MessageSquare } from 'lucide-react';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);

  // Sample suggestions that would come from real data
  const suggestions = [
    {
      type: 'popular',
      icon: TrendingUp,
      text: 'What are the key findings in the quarterly report?',
      category: 'Popular Query'
    },
    {
      type: 'popular',
      icon: TrendingUp,
      text: 'Summarize the main points from the research paper',
      category: 'Popular Query'
    },
    {
      type: 'recent',
      icon: Clock,
      text: 'Extract budget information from financial documents',
      category: 'Recent Search'
    },
    {
      type: 'document',
      icon: FileText,
      text: 'Find compliance requirements in policy documents',
      category: 'Document Query'
    },
    {
      type: 'ai',
      icon: Sparkles,
      text: 'Compare data across multiple uploaded files',
      category: 'AI Suggestion'
    }
  ];

  // Filter suggestions based on query
  const filteredSuggestions = query.length > 0 
    ? suggestions.filter(suggestion => 
        suggestion.text.toLowerCase().includes(query.toLowerCase())
      )
    : suggestions.slice(0, 5);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex(prev => 
            prev < filteredSuggestions.length - 1 ? prev + 1 : prev
          );
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
          break;
        case 'Enter':
          e.preventDefault();
          if (selectedIndex >= 0) {
            handleSuggestionClick(filteredSuggestions[selectedIndex].text);
          } else if (query.trim()) {
            handleSearch();
          }
          break;
        case 'Escape':
          setIsOpen(false);
          setSelectedIndex(-1);
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selectedIndex, filteredSuggestions, query]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    setIsOpen(true);
    setSelectedIndex(-1);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    setIsOpen(false);
    setSelectedIndex(-1);
    // Here you would typically trigger the search
    console.log('Searching for:', suggestion);
  };

  const handleSearch = () => {
    if (query.trim()) {
      setIsOpen(false);
      // Here you would typically trigger the search
      console.log('Searching for:', query);
    }
  };

  const handleFocus = () => {
    setIsOpen(true);
  };

  const handleBlur = () => {
    // Delay closing to allow for suggestion clicks
    setTimeout(() => setIsOpen(false), 200);
  };

  return (
    <div className="relative max-w-3xl mx-auto">
      {/* Search Input */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
          <Search className="h-6 w-6 text-blue-500" />
        </div>
        
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="Ask anything about your documents..."
          className="w-full pl-16 pr-20 py-5 text-lg bg-white/95 backdrop-blur-sm border-2 border-blue-200/50 rounded-3xl shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 placeholder-gray-500 hover:border-blue-300"
        />

        <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
          <button
            onClick={handleSearch}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-3 rounded-2xl hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <Sparkles className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Suggestions Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-md border border-gray-200 rounded-2xl shadow-xl z-50 overflow-hidden"
          >
            {filteredSuggestions.length > 0 ? (
              <div className="py-2">
                {filteredSuggestions.map((suggestion, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                    onClick={() => handleSuggestionClick(suggestion.text)}
                    className={`w-full px-4 py-3 text-left hover:bg-primary-50 transition-colors duration-150 flex items-center space-x-3 ${
                      selectedIndex === index ? 'bg-primary-50' : ''
                    }`}
                  >
                    <div className="flex-shrink-0">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        suggestion.type === 'popular' ? 'bg-orange-100 text-orange-600' :
                        suggestion.type === 'recent' ? 'bg-blue-100 text-blue-600' :
                        suggestion.type === 'document' ? 'bg-green-100 text-green-600' :
                        'bg-purple-100 text-purple-600'
                      }`}>
                        <suggestion.icon className="w-4 h-4" />
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="text-gray-900 font-medium truncate">
                        {suggestion.text}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {suggestion.category}
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            ) : (
              <div className="py-8 text-center text-gray-500">
                <MessageSquare className="w-8 h-8 mx-auto mb-2 text-gray-300" />
                <p>No suggestions found</p>
                <p className="text-sm">Try a different search term</p>
              </div>
            )}
            
            {/* Footer */}
            <div className="border-t border-gray-100 px-4 py-3 bg-gray-50/50">
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>Press Enter to search</span>
                <span>↑↓ to navigate</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Tips */}
      {!isOpen && query.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-center"
        >
          <p className="text-gray-500 text-sm">
            Try: &quot;Summarize the key points&quot; or &quot;Find budget information&quot;
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default SearchBar;
