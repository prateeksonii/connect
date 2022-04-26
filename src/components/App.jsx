import { RiLink, RiAddCircleFill } from "react-icons/ri";
import { auth, store } from "../services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import Navbar from "./Navbar";
import { collection } from "firebase/firestore";

const App = () => {
  const [user, loading, error] = useAuthState(auth);

  const [value, loadingData] = useCollection(collection(store, "users"));

  return (
    <div className="py-8 mx-auto w-2/3 h-screen flex flex-col">
      <Navbar />

      <section className="my-8 bg-white rounded-xl p-8 flex-1">
        {loading ? (
          <h3>Loading...</h3>
        ) : user ? (
          <div className="grid grid-cols-[200px_1fr]">
            <div>
              <header className="flex items-center gap-3">
                <h2 className="text-2xl font-bold">contacts</h2>
                <button className="">
                  <RiAddCircleFill className="text-primary" size={32} />
                </button>
              </header>
            </div>
          </div>
        ) : (
          <h3>Login to continue</h3>
        )}
      </section>
    </div>
  );
};

export default App;
