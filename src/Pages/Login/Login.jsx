import { useState } from "react";
import "./login.scss";
import { Button, Input } from "antd";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  const [panvalue, setPanValue] = useState("");
  const [error, setError] = useState(false);
  return (
    <div className="login--container">
      <div className="login--title">MSME LENDING PORTAL</div>
      <div className="pan--container">
        <div className="panEntry--Container">
          <div className="panEntry--label">PAN</div>
          <Input
            status={error ? "error" : ""}
            placeholder="Enter PAN Numer"
            onChange={(e) => {
              setPanValue(e.target.value);
              e.target.value ? setError(false) : setError(true);
            }}
          />
        </div>
      </div>
      <div>
        <Button
          className="goButton"
          type="primary"
          onClick={() => {
            if (!panvalue) setError(true);
            else {
              setError(false);
              navigate("/details");
            }
          }}
        >
          GO
        </Button>
      </div>
    </div>
  );
};

export default Login;
