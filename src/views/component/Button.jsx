const Button = ({
  children,
  icon,
  className = "",
  type = "button",
  variant = "primary-lavender",
  handleClick,
  disible = false
}) => {
  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disible}
      className={`btn-${variant} flex flex-row justify-center items-center gap-1 ${className} disabled:opacity-70 disabled:cursor-not-allowed`}
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
