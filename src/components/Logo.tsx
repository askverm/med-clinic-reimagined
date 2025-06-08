
interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

const Logo = ({ size = 'md', showTagline = true }: LogoProps) => {
  const sizeClasses = {
    sm: {
      container: 'flex items-center',
      logoContainer: 'w-16 h-10',
      title: 'text-lg ml-3',
      tagline: 'text-xs ml-3'
    },
    md: {
      container: 'flex items-center',
      logoContainer: 'w-20 h-12',
      title: 'text-2xl ml-4',
      tagline: 'text-sm ml-4'
    },
    lg: {
      container: 'flex flex-col items-center',
      logoContainer: 'w-32 h-20',
      title: 'text-4xl mt-4',
      tagline: 'text-base mt-2'
    }
  };

  const classes = sizeClasses[size];

  return (
    <div className={classes.container}>
      {/* Logo SVG */}
      <div className={`${classes.logoContainer} relative`}>
        <svg viewBox="0 0 400 150" className="w-full h-full">
          {/* Left Hand */}
          <path
            d="M20 80 Q15 60 25 45 Q35 35 45 40 Q55 45 60 55 Q65 70 60 85 Q55 95 45 100 L35 105 Q25 100 20 85 Z"
            fill="#4A90E2"
            className="opacity-90"
          />
          
          {/* Right Hand */}
          <path
            d="M340 85 Q345 100 335 105 L325 100 Q315 95 310 85 Q305 70 310 55 Q315 45 325 40 Q335 35 345 45 Q355 60 350 80 Z"
            fill="#4A90E2"
            className="opacity-90"
          />
          
          {/* Heart Shape */}
          <g transform="translate(180, 50)">
            {/* Main Heart */}
            <path
              d="M0 25 Q-15 10 -30 15 Q-40 20 -35 35 Q-30 45 -15 55 L0 70 L15 55 Q30 45 35 35 Q40 20 30 15 Q15 10 0 25 Z"
              fill="#E74C3C"
              stroke="#C0392B"
              strokeWidth="2"
            />
            
            {/* Heart Details */}
            <circle cx="-20" cy="25" r="3" fill="#C0392B" />
            <circle cx="20" cy="25" r="3" fill="#C0392B" />
          </g>
          
          {/* Infinity Symbol */}
          <g transform="translate(180, 35)">
            <path
              d="M-20 0 Q-10 -8 0 0 Q10 8 20 0 Q10 -8 0 0 Q-10 8 -20 0"
              fill="none"
              stroke="#E74C3C"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </g>
          
          {/* Small Circles/Dots */}
          <circle cx="130" cy="30" r="4" fill="#E74C3C" />
          <circle cx="140" cy="25" r="6" fill="none" stroke="#E74C3C" strokeWidth="2" />
          <circle cx="230" cy="25" r="6" fill="none" stroke="#E74C3C" strokeWidth="2" />
          <circle cx="240" cy="30" r="4" fill="#E74C3C" />
        </svg>
      </div>

      {/* Text */}
      {(size !== 'lg' || showTagline) && (
        <div className={size === 'lg' ? 'text-center' : ''}>
          <div className={`${classes.title} font-bold`}>
            <span className="text-red-500">Care</span>
            <span className="text-blue-500">Saathi</span>
          </div>
          {showTagline && (
            <div className={`${classes.tagline} text-gray-600 font-medium`}>
              apno ke liye apno jaisa saathi
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Logo;
