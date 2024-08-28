import { useState, useContext } from "react";
import { Alert } from "react-native";

import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { loginUser } from "../utils/auth";
import { AuthContext } from "../store/auth-context";

function LoginScreen() {
  const [isAuthing, setIsAuthing] = useState(false);

  const authContext = useContext(AuthContext);

  async function loginHandler({ email, password }) {
    try {
      setIsAuthing(true);

      try {
        const token = await loginUser(email, password);
        authContext.authenticate(token);
      } catch (error) {
        Alert.alert("Unable to login", "Incorrect email or password.");
      }
    } catch (error) {
      console.log(error);
      Alert.alert("Unable to login", "Try again later.");
    } finally {
      setIsAuthing(false);
    }
  }

  if (isAuthing) {
    return <LoadingOverlay message="Logging in..." />;
  }

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
