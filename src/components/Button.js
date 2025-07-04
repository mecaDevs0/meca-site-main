export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const baseClasses = 'py-2 px-4 rounded-md font-medium transition-all duration-300 ease-in-out';
  
  const variants = {
    primary: 'bg-meca-verde text-white hover:bg-opacity-90',
    secondary: 'bg-transparent border-2 border-meca-verde text-meca-verde hover:bg-meca-verde hover:text-white',
    outlined: 'bg-transparent border-2 border-meca-marinho text-meca-marinho hover:bg-meca-marinho hover:text-white',
  };
  
  const variantClasses = variants[variant] || variants.primary;
  
  return (
    <button 
      className={`${baseClasses} ${variantClasses} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
}
