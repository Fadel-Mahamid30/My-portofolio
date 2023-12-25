const LinkButton = ({
    children,
    icon,
    className = "",
    url = "#",
    handleClick,
    variant = "primary-lavender",
  }) => {
    return (
      <a href={url}
        onClick={handleClick}
        className={`btn-${variant} flex flex-row justify-center items-center gap-2 ${className}`}
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
  