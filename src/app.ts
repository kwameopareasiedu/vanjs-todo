import { Router } from "vanjs-routing";
import LoginPage from "@/pages/login-page.ts";
import SignupPage from "@/pages/signup-page.ts";
import { HOME_ROUTE, LOGIN_ROUTE, SIGNUP_ROUTE } from "@/config/routes.ts";
import { AuthGuard } from "@/components";
import HomePage from "@/pages/home-page.ts";

export default function App() {
  return Router({
    className: "w-screen h-screen",
    routes: [
      { path: HOME_ROUTE, component: () => AuthGuard(HomePage) },
      { path: LOGIN_ROUTE, component: LoginPage },
      { path: SIGNUP_ROUTE, component: SignupPage }
    ]
  });
}
