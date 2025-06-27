import React from 'react';

interface DocumentUploadProps {
  className?: string;
  animated?: boolean;
}

const DocumentUpload: React.FC<DocumentUploadProps> = ({ 
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
        <linearGradient id="docGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#1D4ED8" />
        </linearGradient>
        <linearGradient id="cloudGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E0F2FE" />
          <stop offset="100%" stopColor="#BAE6FD" />
        </linearGradient>
        <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#000" floodOpacity="0.1"/>
        </filter>
      </defs>

      {/* Background Circle */}
      <circle
        cx="200"
        cy="200"
        r="180"
        fill="url(#cloudGradient)"
        opacity="0.3"
        className={animated ? "animate-pulse" : ""}
      />

      {/* Cloud Base */}
      <g filter="url(#shadow)">
        <ellipse cx="200" cy="280" rx="120" ry="40" fill="#F1F5F9" opacity="0.8" />
        <ellipse cx="180" cy="260" rx="60" ry="25" fill="#F8FAFC" />
        <ellipse cx="220" cy="260" rx="60" ry="25" fill="#F8FAFC" />
        <ellipse cx="200" cy="240" rx="80" ry="30" fill="#FFFFFF" />
      </g>

      {/* Documents */}
      <g className={animated ? "animate-float" : ""}>
        {/* Document 1 */}
        <rect
          x="120"
          y="120"
          width="60"
          height="80"
          rx="8"
          fill="url(#docGradient)"
          filter="url(#shadow)"
        />
        <rect x="130" y="135" width="40" height="3" rx="1.5" fill="#FFFFFF" opacity="0.8" />
        <rect x="130" y="145" width="35" height="3" rx="1.5" fill="#FFFFFF" opacity="0.6" />
        <rect x="130" y="155" width="30" height="3" rx="1.5" fill="#FFFFFF" opacity="0.6" />
        <rect x="130" y="165" width="25" height="3" rx="1.5" fill="#FFFFFF" opacity="0.4" />

        {/* Document 2 */}
        <rect
          x="160"
          y="100"
          width="60"
          height="80"
          rx="8"
          fill="#10B981"
          filter="url(#shadow)"
          className={animated ? "animate-bounce-subtle" : ""}
          style={{ animationDelay: '0.5s' }}
        />
        <rect x="170" y="115" width="40" height="3" rx="1.5" fill="#FFFFFF" opacity="0.8" />
        <rect x="170" y="125" width="35" height="3" rx="1.5" fill="#FFFFFF" opacity="0.6" />
        <rect x="170" y="135" width="30" height="3" rx="1.5" fill="#FFFFFF" opacity="0.6" />
        <rect x="170" y="145" width="25" height="3" rx="1.5" fill="#FFFFFF" opacity="0.4" />

        {/* Document 3 */}
        <rect
          x="200"
          y="110"
          width="60"
          height="80"
          rx="8"
          fill="#8B5CF6"
          filter="url(#shadow)"
          className={animated ? "animate-bounce-subtle" : ""}
          style={{ animationDelay: '1s' }}
        />
        <rect x="210" y="125" width="40" height="3" rx="1.5" fill="#FFFFFF" opacity="0.8" />
        <rect x="210" y="135" width="35" height="3" rx="1.5" fill="#FFFFFF" opacity="0.6" />
        <rect x="210" y="145" width="30" height="3" rx="1.5" fill="#FFFFFF" opacity="0.6" />
        <rect x="210" y="155" width="25" height="3" rx="1.5" fill="#FFFFFF" opacity="0.4" />
      </g>

      {/* Upload Arrow */}
      <g className={animated ? "animate-bounce" : ""}>
        <path
          d="M200 320 L200 280 M185 295 L200 280 L215 295"
          stroke="#3B82F6"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </g>

      {/* Floating Particles */}
      {animated && (
        <g>
          <circle cx="100" cy="150" r="3" fill="#3B82F6" opacity="0.6" className="animate-float" />
          <circle cx="320" cy="180" r="2" fill="#10B981" opacity="0.4" className="animate-float" style={{ animationDelay: '1s' }} />
          <circle cx="80" cy="250" r="2" fill="#8B5CF6" opacity="0.5" className="animate-float" style={{ animationDelay: '2s' }} />
          <circle cx="340" cy="120" r="3" fill="#F59E0B" opacity="0.6" className="animate-float" style={{ animationDelay: '0.5s' }} />
        </g>
      )}

      {/* Progress Indicator */}
      <g>
        <rect x="150" y="340" width="100" height="8" rx="4" fill="#E5E7EB" />
        <rect x="150" y="340" width="70" height="8" rx="4" fill="#3B82F6" className={animated ? "animate-pulse" : ""} />
      </g>

      {/* Upload Text */}
      <text x="200" y="370" textAnchor="middle" className="fill-gray-600 text-sm font-medium">
        Uploading Documents...
      </text>
    </svg>
  );
};

export default DocumentUpload;
