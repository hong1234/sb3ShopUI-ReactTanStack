import { useContext } from "react";
import { useNavigate } from "react-router";
import { AppContext } from "../AppContext";

function Login() {
  const navigate = useNavigate();
  const { dispatch } = useContext(AppContext);

  const loginSubmitHandler = () => {
    // Perform Login...
    dispatch({ type: "login" });
    // navigate('/cart');
    // After Successful Login, we go to the previous page.
    navigate(-1);
  };

  return (
    <>
      <h5 className="bg-primary text-white text-center p-2">Login</h5>
      <button className="btn btn-secondary" onClick={loginSubmitHandler}>
        Click Me to Login
      </button>
    </>
  );
}

export default Login;
