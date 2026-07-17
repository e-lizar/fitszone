const Button = ({
  children,
  type = "button",
  variant = "primary",
  onClick,
}) => {
  const baseStyles =
    "px-6 py-3 rounded-lg font-semibold transition duration-300";

  const variants = {
    primary: "bg-emerald-500 text-white hover:bg-emerald-600",
    secondary: "bg-gray-800 text-white hover:bg-gray-900",
    outline:
      "border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]}`}
    >
      {children}
    </button>
  );
};

export default Button;