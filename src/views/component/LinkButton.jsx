const LinkButton = ({
    children,
    icon,
    className = "",
    url = "#",
    variant = "primary-lavender",
  }) => {
    return (
      <a href={url}
        className={`btn-${variant} flex flex-row justify-center items-center gap-1 ${className}`}
      >
        {icon && (
          <div className="text-xl flex items-center">
            <ion-icon className="block" name={icon}></ion-icon>
          </div>
        )}
        {children}
      </a>
    );
  };
  
  export default LinkButton;
  