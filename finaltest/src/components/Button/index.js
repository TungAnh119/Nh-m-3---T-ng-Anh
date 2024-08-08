const Button = ({ children, onClick, color = "default", size = "medium" }) => {
  return (
    <div onClick={onClick} className={`btn-container ${color} ${size}`}>
      {children}
    </div>
  );
};

export default Button;
