function Button({
  children,
  onClick = () => {},
  variant = "primary",
  size = "md",
  disabled = false,
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded focus:outline-none transition duration-200";

  const variantStyles = {
    primary: "bg-blue-500 text-white hover:bg-blue-600 disabled:bg-blue-300",
    secondary: "bg-gray-500 text-white hover:bg-gray-600 disabled:bg-gray-300",
    danger: "bg-red-500 text-white hover:bg-red-600 disabled:bg-red-300",
    outline:
      "border border-gray-500 text-gray-500 hover:bg-gray-100 disabled:bg-gray-200",
  };

  const sizeStyles = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-3 text-lg",
  };

  const styles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]}`;

  return (
    <button onClick={onClick} className={styles} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
