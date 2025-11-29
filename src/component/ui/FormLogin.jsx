import FloatingInput from "./FloatingInput";
import Button from "./Button";
const FormLogin = () => {
  return (
    <div>
      <h2 className="font-bold text-2xl">Login</h2>
      <form action="">
        <FloatingInput label="Email" id="email" type="email" />
        <FloatingInput label="Password" id="password" type="password" />
        <Button typeBtn="submit">Login</Button>
      </form>
    </div>
  );
};
export default FormLogin;
