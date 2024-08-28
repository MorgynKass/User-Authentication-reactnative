import { useState, useContext } from "react";
import { Alert } from "react-native";

import AuthContent from "../components/Auth/AuthContent";
import { createUser } from "../utils/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { AuthContext } from "../store/auth-context";

function SignUpScreen() {
  const [isAuthing, setIsAuthing] = useState(false);

  const authContext = useContext(AuthContext);

  async function signUpHandler({ email, password }) {
    setIsAuthing(true);
    try {
      const token = await createUser(email, password);
      authContext.authenticate(token);
    } catch (error) {
      Alert.alert(
        "Unable to create account",
        "One or more of your inputs were incorrect"
      );
    }

    setIsAuthing(false);
  }

  if (isAuthing) {
    return <LoadingOverlay message="Creating user..." />;
  }

  return <AuthContent onAuthenticate={signUpHandler} />;
}

export default SignUpScreen;
