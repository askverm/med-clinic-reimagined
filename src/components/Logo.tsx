
interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

const Logo = ({ size = 'md', showTagline = true }: LogoProps) => {
  const sizeClasses = {
    sm: {
      container: 'flex items-center',
      logo: 'h-10 w-auto',
      title: 'text-lg',
      tagline: 'text-xs'
    },
    md: {
      container: 'flex items-center',
      logo: 'h-12 w-auto',
      title: 'text-2xl',
      tagline: 'text-sm'
    },
    lg: {
      container: 'flex items-center',
      logo: 'h-16 w-auto',
      title: 'text-4xl',
      tagline: 'text-base'
    }
  };

  const classes = sizeClasses[size];

  return (
    <div className={classes.container}>
      <img 
        src="/lovable-uploads/a40d16cc-2d57-43e3-9b97-33df4f281d24.png" 
        alt="CareSaathi Logo" 
        className={classes.logo}
      />
      {showTagline && size === 'lg' && (
        <div className="ml-4">
          <div className={`${classes.title} font-bold`}>
            <span className="text-red-500">Care</span>
            <span className="text-blue-500">Saathi</span>
          </div>
          <div className={`${classes.tagline} text-gray-600`}>
            apno ke liye apno jaisa saathi
          </div>
        </div>
      )}
    </div>
  );
};

export default Logo;
