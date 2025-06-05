
import { Heart } from 'lucide-react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

const Logo = ({ size = 'md', showTagline = true }: LogoProps) => {
  const sizeClasses = {
    sm: {
      container: 'flex items-center',
      heart: 'h-6 w-6',
      title: 'text-lg',
      tagline: 'text-xs'
    },
    md: {
      container: 'flex items-center',
      heart: 'h-8 w-8',
      title: 'text-2xl',
      tagline: 'text-xs'
    },
    lg: {
      container: 'flex items-center',
      heart: 'h-12 w-12',
      title: 'text-4xl',
      tagline: 'text-sm'
    }
  };

  const classes = sizeClasses[size];

  return (
    <div className={classes.container}>
      <div className="bg-gradient-to-br from-red-500 to-blue-500 rounded-full p-2 mr-3">
        <Heart className={`${classes.heart} text-white fill-white`} />
      </div>
      <div>
        <div className={`${classes.title} font-bold`}>
          <span className="text-red-500">Care</span>
          <span className="text-blue-500">Saathi</span>
        </div>
        {showTagline && (
          <div className={`${classes.tagline} text-gray-600`}>
            apno ke liye apno jaisa saathi
          </div>
        )}
      </div>
    </div>
  );
};

export default Logo;
