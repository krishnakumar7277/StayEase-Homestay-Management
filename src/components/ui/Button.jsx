/**
 * Button Component
 * Props:
 * - children
 * - variant: primary | secondary | outline
 * - size: sm | md | lg
 * - disabled
 * - onClick
 */

const Button = ({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
}) => {
  const variants = {
    primary: "bg-green-600 text-white hover:bg-green-700",
    secondary: "bg-gray-800 text-white hover:bg-gray-900",
    outline: "border border-green-600 text-green-600 hover:bg-green-50",
  };

  const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-5 py-2",
    lg: "px-8 py-3 text-lg",
  };

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`rounded-lg transition ${variants[variant]} ${sizes[size]}`}
    >
      {children}
    </button>
  );
};

export default Button;