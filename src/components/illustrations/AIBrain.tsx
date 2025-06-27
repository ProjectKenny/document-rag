import React from 'react';

interface AIBrainProps {
  className?: string;
  animated?: boolean;
}

const AIBrain: React.FC<AIBrainProps> = ({ 
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
        <linearGradient id="brainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="50%" stopColor="#A855F7" />
          <stop offset="100%" stopColor="#C084FC" />
        </linearGradient>
        <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <radialGradient id="pulseGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8" />
          <stop offset="70%" stopColor="#A855F7" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#C084FC" stopOpacity="0.1" />
        </radialGradient>
      </defs>

      {/* Background Pulse */}
      <circle
        cx="200"
        cy="200"
        r="180"
        fill="url(#pulseGradient)"
        className={animated ? "animate-pulse-subtle" : ""}
      />

      {/* Brain Outline */}
      <g filter="url(#glow)">
        <path
          d="M120 180 Q120 120 160 120 Q180 100 200 120 Q220 100 240 120 Q280 120 280 180 Q290 200 280 220 Q280 260 240 280 Q220 300 200 280 Q180 300 160 280 Q120 260 120 220 Q110 200 120 180 Z"
          fill="url(#brainGradient)"
          stroke="#FFFFFF"
          strokeWidth="2"
          opacity="0.9"
        />
        
        {/* Brain Folds */}
        <path
          d="M140 160 Q160 140 180 160 Q200 140 220 160 Q240 140 260 160"
          stroke="#FFFFFF"
          strokeWidth="2"
          fill="none"
          opacity="0.6"
        />
        <path
          d="M140 200 Q160 180 180 200 Q200 180 220 200 Q240 180 260 200"
          stroke="#FFFFFF"
          strokeWidth="2"
          fill="none"
          opacity="0.6"
        />
        <path
          d="M140 240 Q160 220 180 240 Q200 220 220 240 Q240 220 260 240"
          stroke="#FFFFFF"
          strokeWidth="2"
          fill="none"
          opacity="0.6"
        />
      </g>

      {/* Neural Network Nodes */}
      <g className={animated ? "animate-pulse" : ""}>
        {/* Left Side Nodes */}
        <circle cx="80" cy="150" r="6" fill="url(#neuralGradient)" />
        <circle cx="90" cy="200" r="6" fill="url(#neuralGradient)" />
        <circle cx="85" cy="250" r="6" fill="url(#neuralGradient)" />
        
        {/* Right Side Nodes */}
        <circle cx="320" cy="150" r="6" fill="url(#neuralGradient)" />
        <circle cx="310" cy="200" r="6" fill="url(#neuralGradient)" />
        <circle cx="315" cy="250" r="6" fill="url(#neuralGradient)" />
        
        {/* Top Nodes */}
        <circle cx="150" cy="80" r="6" fill="url(#neuralGradient)" />
        <circle cx="200" cy="70" r="6" fill="url(#neuralGradient)" />
        <circle cx="250" cy="80" r="6" fill="url(#neuralGradient)" />
        
        {/* Bottom Nodes */}
        <circle cx="150" cy="320" r="6" fill="url(#neuralGradient)" />
        <circle cx="200" cy="330" r="6" fill="url(#neuralGradient)" />
        <circle cx="250" cy="320" r="6" fill="url(#neuralGradient)" />
      </g>

      {/* Neural Connections */}
      <g stroke="url(#neuralGradient)" strokeWidth="2" fill="none" opacity="0.6">
        {/* Connections to Brain */}
        <path d="M80 150 Q100 140 120 160" className={animated ? "animate-pulse" : ""} />
        <path d="M90 200 Q105 195 120 200" className={animated ? "animate-pulse" : ""} style={{ animationDelay: '0.5s' }} />
        <path d="M85 250 Q102 245 120 240" className={animated ? "animate-pulse" : ""} style={{ animationDelay: '1s' }} />
        
        <path d="M320 150 Q300 140 280 160" className={animated ? "animate-pulse" : ""} style={{ animationDelay: '0.3s' }} />
        <path d="M310 200 Q295 195 280 200" className={animated ? "animate-pulse" : ""} style={{ animationDelay: '0.8s' }} />
        <path d="M315 250 Q298 245 280 240" className={animated ? "animate-pulse" : ""} style={{ animationDelay: '1.3s' }} />
        
        <path d="M150 80 Q140 100 140 120" className={animated ? "animate-pulse" : ""} style={{ animationDelay: '0.2s' }} />
        <path d="M200 70 Q200 90 200 120" className={animated ? "animate-pulse" : ""} style={{ animationDelay: '0.7s' }} />
        <path d="M250 80 Q260 100 260 120" className={animated ? "animate-pulse" : ""} style={{ animationDelay: '1.2s' }} />
        
        <path d="M150 320 Q140 300 140 280" className={animated ? "animate-pulse" : ""} style={{ animationDelay: '0.4s' }} />
        <path d="M200 330 Q200 310 200 280" className={animated ? "animate-pulse" : ""} style={{ animationDelay: '0.9s' }} />
        <path d="M250 320 Q260 300 260 280" className={animated ? "animate-pulse" : ""} style={{ animationDelay: '1.4s' }} />
      </g>

      {/* Data Streams */}
      {animated && (
        <g>
          <g className="animate-float">
            <circle cx="60" cy="120" r="2" fill="#3B82F6" opacity="0.8" />
            <circle cx="65" cy="125" r="1.5" fill="#06B6D4" opacity="0.6" />
            <circle cx="70" cy="130" r="1" fill="#8B5CF6" opacity="0.4" />
          </g>
          
          <g className="animate-float" style={{ animationDelay: '1s' }}>
            <circle cx="340" cy="180" r="2" fill="#3B82F6" opacity="0.8" />
            <circle cx="335" cy="185" r="1.5" fill="#06B6D4" opacity="0.6" />
            <circle cx="330" cy="190" r="1" fill="#8B5CF6" opacity="0.4" />
          </g>
          
          <g className="animate-float" style={{ animationDelay: '2s' }}>
            <circle cx="180" cy="50" r="2" fill="#3B82F6" opacity="0.8" />
            <circle cx="185" cy="55" r="1.5" fill="#06B6D4" opacity="0.6" />
            <circle cx="190" cy="60" r="1" fill="#8B5CF6" opacity="0.4" />
          </g>
        </g>
      )}

      {/* Central Processing Indicator */}
      <g>
        <circle cx="200" cy="200" r="20" fill="none" stroke="#FFFFFF" strokeWidth="2" opacity="0.8" />
        <circle cx="200" cy="200" r="8" fill="#FFFFFF" className={animated ? "animate-pulse" : ""} />
      </g>

      {/* AI Label */}
      <text x="200" y="380" textAnchor="middle" className="fill-gray-600 text-sm font-bold">
        AI Processing Engine
      </text>
    </svg>
  );
};

export default AIBrain;
