import React from 'react';

interface SearchAnalyticsProps {
  className?: string;
  animated?: boolean;
}

const SearchAnalytics: React.FC<SearchAnalyticsProps> = ({ 
  className = "w-64 h-64", 
  animated = true 
}) => {
  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="chartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
        <linearGradient id="barGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#1D4ED8" />
        </linearGradient>
        <linearGradient id="barGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
        <linearGradient id="barGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
        <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#000" floodOpacity="0.1"/>
        </filter>
      </defs>

      {/* Background */}
      <rect x="50" y="50" width="300" height="250" rx="20" fill="#FFFFFF" filter="url(#shadow)" />
      
      {/* Chart Title */}
      <text x="200" y="80" textAnchor="middle" className="fill-gray-800 text-lg font-bold">
        Search Analytics
      </text>

      {/* Y-Axis */}
      <line x1="80" y1="100" x2="80" y2="280" stroke="#E5E7EB" strokeWidth="2" />
      
      {/* X-Axis */}
      <line x1="80" y1="280" x2="320" y2="280" stroke="#E5E7EB" strokeWidth="2" />

      {/* Y-Axis Labels */}
      <text x="75" y="110" textAnchor="end" className="fill-gray-500 text-xs">100</text>
      <text x="75" y="150" textAnchor="end" className="fill-gray-500 text-xs">75</text>
      <text x="75" y="190" textAnchor="end" className="fill-gray-500 text-xs">50</text>
      <text x="75" y="230" textAnchor="end" className="fill-gray-500 text-xs">25</text>
      <text x="75" y="280" textAnchor="end" className="fill-gray-500 text-xs">0</text>

      {/* Grid Lines */}
      <g stroke="#F3F4F6" strokeWidth="1" opacity="0.5">
        <line x1="80" y1="110" x2="320" y2="110" />
        <line x1="80" y1="150" x2="320" y2="150" />
        <line x1="80" y1="190" x2="320" y2="190" />
        <line x1="80" y1="230" x2="320" y2="230" />
      </g>

      {/* Animated Bars */}
      <g className={animated ? "animate-scale-in" : ""}>
        {/* Bar 1 - Documents */}
        <rect
          x="100"
          y="160"
          width="30"
          height="120"
          rx="4"
          fill="url(#barGradient1)"
          className={animated ? "animate-grow-up" : ""}
        />
        <text x="115" y="295" textAnchor="middle" className="fill-gray-600 text-xs">Docs</text>
        
        {/* Bar 2 - Queries */}
        <rect
          x="150"
          y="130"
          width="30"
          height="150"
          rx="4"
          fill="url(#barGradient2)"
          className={animated ? "animate-grow-up" : ""}
          style={{ animationDelay: '0.2s' }}
        />
        <text x="165" y="295" textAnchor="middle" className="fill-gray-600 text-xs">Queries</text>
        
        {/* Bar 3 - Accuracy */}
        <rect
          x="200"
          y="120"
          width="30"
          height="160"
          rx="4"
          fill="url(#chartGradient)"
          className={animated ? "animate-grow-up" : ""}
          style={{ animationDelay: '0.4s' }}
        />
        <text x="215" y="295" textAnchor="middle" className="fill-gray-600 text-xs">Accuracy</text>
        
        {/* Bar 4 - Speed */}
        <rect
          x="250"
          y="140"
          width="30"
          height="140"
          rx="4"
          fill="url(#barGradient3)"
          className={animated ? "animate-grow-up" : ""}
          style={{ animationDelay: '0.6s' }}
        />
        <text x="265" y="295" textAnchor="middle" className="fill-gray-600 text-xs">Speed</text>
      </g>

      {/* Value Labels on Bars */}
      <g className={animated ? "animate-fade-in" : ""} style={{ animationDelay: '1s' }}>
        <text x="115" y="155" textAnchor="middle" className="fill-white text-xs font-bold">68%</text>
        <text x="165" y="125" textAnchor="middle" className="fill-white text-xs font-bold">85%</text>
        <text x="215" y="115" textAnchor="middle" className="fill-white text-xs font-bold">94%</text>
        <text x="265" y="135" textAnchor="middle" className="fill-white text-xs font-bold">82%</text>
      </g>

      {/* Search Icon */}
      <g transform="translate(320, 60)">
        <circle cx="0" cy="0" r="15" fill="none" stroke="#3B82F6" strokeWidth="3" />
        <path d="M10.5 10.5 L20 20" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" />
        {animated && (
          <circle cx="0" cy="0" r="15" fill="none" stroke="#3B82F6" strokeWidth="1" opacity="0.3" className="animate-ping" />
        )}
      </g>

      {/* Trend Line */}
      <g className={animated ? "animate-draw-line" : ""}>
        <path
          d="M115 240 Q140 220 165 210 Q190 200 215 195 Q240 200 265 210"
          stroke="#10B981"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={animated ? "200" : "none"}
          strokeDashoffset={animated ? "200" : "0"}
        />
        
        {/* Trend Points */}
        <circle cx="115" cy="240" r="4" fill="#10B981" className={animated ? "animate-scale-in" : ""} style={{ animationDelay: '0.8s' }} />
        <circle cx="165" cy="210" r="4" fill="#10B981" className={animated ? "animate-scale-in" : ""} style={{ animationDelay: '1s' }} />
        <circle cx="215" cy="195" r="4" fill="#10B981" className={animated ? "animate-scale-in" : ""} style={{ animationDelay: '1.2s' }} />
        <circle cx="265" cy="210" r="4" fill="#10B981" className={animated ? "animate-scale-in" : ""} style={{ animationDelay: '1.4s' }} />
      </g>

      {/* Legend */}
      <g transform="translate(60, 320)">
        <rect x="0" y="0" width="12" height="12" rx="2" fill="url(#barGradient1)" />
        <text x="20" y="10" className="fill-gray-600 text-xs">Documents Processed</text>
        
        <rect x="150" y="0" width="12" height="12" rx="2" fill="url(#barGradient2)" />
        <text x="170" y="10" className="fill-gray-600 text-xs">Search Queries</text>
      </g>

      <g transform="translate(60, 340)">
        <rect x="0" y="0" width="12" height="12" rx="2" fill="url(#chartGradient)" />
        <text x="20" y="10" className="fill-gray-600 text-xs">Accuracy Rate</text>
        
        <rect x="150" y="0" width="12" height="12" rx="2" fill="url(#barGradient3)" />
        <text x="170" y="10" className="fill-gray-600 text-xs">Response Speed</text>
      </g>

      {/* Performance Indicators */}
      {animated && (
        <g>
          <circle cx="350" cy="120" r="3" fill="#10B981" className="animate-pulse" />
          <circle cx="360" cy="140" r="2" fill="#3B82F6" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
          <circle cx="340" cy="160" r="2" fill="#8B5CF6" className="animate-pulse" style={{ animationDelay: '1s' }} />
        </g>
      )}

      {/* Real-time Indicator */}
      <g transform="translate(300, 320)">
        <circle cx="0" cy="0" r="4" fill="#10B981" className={animated ? "animate-pulse" : ""} />
        <text x="10" y="4" className="fill-gray-600 text-xs">Live Data</text>
      </g>
    </svg>
  );
};

export default SearchAnalytics;
