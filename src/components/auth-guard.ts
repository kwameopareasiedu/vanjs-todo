import van from "vanjs-core";
import { auth, db } from "@/config/firebase.ts";
import { navigate } from "vanjs-routing";
import { LOGIN_ROUTE } from "@/config/routes.ts";
import { Text } from "@/components/text.ts";
import User from "@/models/user";
import { doc, getDoc } from "firebase/firestore";

const { div } = van.tags;

export const authenticating = van.state(true);
export const authenticatedUser = van.state<User | null>(null);

auth.onAuthStateChanged(async (authUser) => {
  if (authUser) {
    const userDoc = doc(db, "users", authUser.uid);
    authenticatedUser.val = await getDoc(userDoc).then((data) => {
      return data.data() as User;
    });
  } else navigate(LOGIN_ROUTE);

  authenticating.val = false;
});

export function AuthGuard(child: () => HTMLElement) {
  if (authenticating.val || !authenticatedUser.val) {
    return div(
      { className: "w-full h-full grid place-items-center" },
      Text({ align: "center" }, "Authenticating. Please wait...")
    );
  } else return child();
}
