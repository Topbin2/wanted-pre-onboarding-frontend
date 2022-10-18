import { useState } from "react";

import { Input } from "../../components";

const Login = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(true);

  return (
    <div>
      <Input
        type="text"
        label="EMAIL"
        id="EMAIL"
        value={email}
        isError={emailError}
        errorMsg="이메일 형식을 확인해주세요."
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
  );
};

export default Login;
