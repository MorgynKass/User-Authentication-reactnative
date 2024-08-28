import { useState } from "react";

import AuthContent from "../components/Auth/AuthContent";
import { createUser } from "../utils/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";

function SignUpScreen() {
  const [isAuthing, setIsAuthing] = useState(false);

  async function signUpHandler({ email, password }) {
    setIsAuthing(true);
    await createUser(email, password);
    setIsAuthing(false);
  }

  if (isAuthing) {
    return <LoadingOverlay message="Creating user..." />;
  }

  return <AuthContent onAuthenticate={signUpHandler} />;
}

export default SignUpScreen;
