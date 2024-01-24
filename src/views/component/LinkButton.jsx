const LinkButton = ({
    children,
    icon,
    className = "",
    url = "#",
    handleClick,
    variant = "primary-lavender",
    disible = false
  }) => {
    return (
      <a href={url}
        onClick={handleClick}
        disabled={disible}
        className={`btn-${variant} flex flex-row justify-center items-center gap-2 ${className} disabled:opacity-70 disabled:cursor-not-allowed`}
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
  