import { useState } from "react";

import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { loginUser } from "../utils/auth";

function LoginScreen() {
  const [isAuthing, setIsAuthing] = useState(false);

  async function loginHandler({ email, password }) {
    setIsAuthing(true);
    await loginUser(email, password);
    setIsAuthing(false);
  }

  if (isAuthing) {
    return <LoadingOverlay message="Logging in..." />;
  }

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
