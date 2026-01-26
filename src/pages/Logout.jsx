import { useContext } from "react";
import { AppContext } from "../AppContext";
import { useNavigate } from "react-router";
import { useEffect } from "react";

function Logout() {
  const navigate = useNavigate();
  const { dispatch } = useContext(AppContext);

  useEffect(() => {
    dispatch({ type: "logout" });
    navigate("/");
    // navigate(-1);
  }, []);

  return (
    <div>
      <h5 className="bg-primary text-white text-center p-2">Logout</h5>
    </div>
  );
}

export default Logout;
