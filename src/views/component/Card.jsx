const Card = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`flex flex-col ipad:flex-row ipad:items-center ipad:justify-between w-full bg-tr-black ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
