import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getTokenFromLocalStorage } from "../../utils";

const Todo = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = getTokenFromLocalStorage();

    if (!token) {
      navigate("/");
    }
  }, [navigate]);

  return <div>todo</div>;
};

export default Todo;
