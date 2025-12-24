// Resource Card Component for displaying individual resources with unique images

export interface ResourceCardProps {
  title: string;
  description: string;
  type: 'PDF' | 'Video';
  duration: string;
  image: string;
  color: 'teal' | 'orange';
}

export const ResourceCard = ({ title, description, type, duration, image, color }: ResourceCardProps) => {
  const colorClasses = {
    teal: {
      badge: 'bg-lli-teal',
      icon: 'text-lli-teal',
      text: 'group-hover:text-lli-teal',
      button: 'text-lli-teal hover:text-lli-teal-dark'
    },
    orange: {
      badge: 'bg-lli-orange',
      icon: 'text-lli-orange',
      text: 'group-hover:text-lli-orange',
      button: 'text-lli-orange hover:text-lli-orange-dark'
    }
  };

  const classes = colorClasses[color];
  
  // Generate resource URL based on title
  const generateResourceUrl = () => {
    const slug = title.toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
    
    if (type === 'PDF') {
      return `/static/resources/${slug}.html`;
    } else {
      return `/static/resources/${slug}-video.html`;
    }
  };

  const resourceUrl = generateResourceUrl();

  return (
    <a 
      href={resourceUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 block"
    >
      <div className="relative h-32 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-2 left-2">
          <span className={`text-xs font-semibold px-2 py-1 rounded ${classes.badge} text-white`}>
            {type}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h4 className={`font-bold text-gray-900 mb-2 ${classes.text} transition-colors line-clamp-2`}>{title}</h4>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500 flex items-center">
            <i className={`fas ${type === 'PDF' ? 'fa-file-pdf' : 'fa-video'} mr-1 ${classes.icon}`}></i>
            {duration}
          </span>
          <span className={`${classes.button} font-semibold text-sm`}>
            View <i className="fas fa-arrow-right ml-1"></i>
          </span>
        </div>
      </div>
    </a>
  );
};
