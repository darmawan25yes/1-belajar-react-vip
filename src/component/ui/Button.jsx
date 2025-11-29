const Button = ({ children, typeBtn }) => (
  <button className="mt-2 bg-green-500 px-5 py-1 rounded-md" type={typeBtn}>
    {children}
  </button>
);

export default Button;
