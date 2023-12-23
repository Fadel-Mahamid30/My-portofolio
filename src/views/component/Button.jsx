const Button = ({
  children,
  icon,
  className = "",
  type = "button",
  variant = "primary-lavender",
  handleClick
}) => {
  return (
    <button
      type={type}
      onClick={handleClick}
      className={`btn-${variant} flex flex-row justify-center items-center gap-1 ${className}`}
    >
      {icon && (
        <div className="text-xl flex items-center">
          <ion-icon className="block" name={icon}></ion-icon>
        </div>
      )}
      {children}
    </button>
  );
};

export default Button;
