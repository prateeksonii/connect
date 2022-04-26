import { useEffect } from "react";
import { RiLink } from "react-icons/ri";
import { auth } from "../services/firebase";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { createUserIfNotExists } from "../services/usersService";

const Navbar = () => {
  const [authUser, loading] = useAuthState(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);

  const handleSignIn = () => {
    signInWithGoogle();
  };

  useEffect(() => {
    if (!authUser) return;
    createUserIfNotExists(authUser);
  }, [authUser]);

  return (
    <nav className="flex items-center justify-between">
      <h1 className="font-head font-bold text-4xl flex items-center">
        <RiLink />
        connect
      </h1>

      {loading ? null : authUser ? (
        <button
          onClick={() => signOut(auth)}
          className="text-lg py-2 px-4 bg-primary rounded-lg text-white font-bold"
        >
          sign out
        </button>
      ) : (
        <button
          onClick={handleSignIn}
          className="text-lg py-2 px-4 bg-primary rounded-lg text-white font-bold"
        >
          sign in
        </button>
      )}
    </nav>
  );
};

export default Navbar;
