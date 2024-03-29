import "./Login.css";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import googleButton from "../images/btn_google_signin_light_normal_web.png";
import { auth } from "../firebase-config";
import { useHistory } from "react-router-dom";

const Login = (props) => {
  const provider = new GoogleAuthProvider();
  const history = useHistory();


  const signInWithGoogle = async () => {
    signInWithPopup(auth, provider);
  };

  const logOut = () => {
    signOut(auth);
    history.push("/");
  };

  const signInButton = (
    <img
      className="img-button"
      src={googleButton}
      alt="Signin with Google."
      onClick={signInWithGoogle}
    />
  );

  const logOutButton = <button onClick={logOut}>Sign out</button>;

  return (
    <div className="loginPage">
      {props.loggedIn ? logOutButton : signInButton}
    </div>
  );
};

export default Login;
