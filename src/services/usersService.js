import { collection, doc, setDoc } from "firebase/firestore";
import { store } from "./firebase";

export const createUserIfNotExists = async (user) => {
  await setDoc(doc(store, "users", user.email), {
    name: user.displayName,
    email: user.email,
    contacts: [],
  });
};
