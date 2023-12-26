import van from "vanjs-core";
import { Text } from "@/components";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/config/firebase.ts";
import { Link, navigate } from "vanjs-routing";
import { HOME_ROUTE } from "@/config/routes.ts";

const { div, input, label, form, button, a } = van.tags;

export default function LoginPage() {
  const email = van.state("");
  const password = van.state("");
  const loading = van.state(false);

  const handleChangeEmail = (e: KeyboardEvent) => {
    email.val = (e.target as HTMLInputElement).value;
  };

  const handleChangePassword = (e: KeyboardEvent) => {
    password.val = (e.target as HTMLInputElement).value;
  };

  const handleSubmitLogin = (e: SubmitEvent) => {
    e.preventDefault();

    if (!email.val) return alert("Email is required");
    if (!password.val) return alert("Password is required");

    signInWithEmailAndPassword(auth, email.val, password.val)
      .then((creds) => {
        if (creds.user) {
          alert(`Welcome!`);
          navigate(HOME_ROUTE);
        }
      })
      .catch((err) => alert(err.message))
      .finally(() => (loading.val = false));

    loading.val = true;
  };

  return div(
    { className: "w-full h-full grid place-items-center" },
    div(
      { className: "w-96 rounded-xl shadow-xl p-8" },
      Text({ size: "xl", align: "center", weight: "bold" }, "Awesome Todo Login"),
      Text(
        { size: "sm", align: "center", className: "mt-2" },
        "Built by ",
        a(
          { href: "https://github.com/kwameopareasiedu", target: "_blank", className: "underline text-cyan-500" },
          "Kwame Opare Asiedu"
        ),
        " with ♥ with ",
        a({ href: "https://vanjs.org", target: "_blank", className: "underline text-rose-500" }, "VanJS"),
        ", ",
        a(
          { href: "https://firebase.google.com", target: "_blank", className: "underline text-yellow-600" },
          "Firebase"
        ),
        " and ",
        a({ href: "https://tailwindcss.com", target: "_blank", className: "underline text-sky-400" }, "TailwindCSS")
      ),
      form(
        { onsubmit: handleSubmitLogin },
        label({ className: "label" }, "Email"),
        input({
          type: "email",
          className: "form-field",
          autofocus: true,
          value: email,
          oninput: handleChangeEmail
        }),
        label({ className: "label" }, "Password"),
        input({
          type: "password",
          className: "form-field",
          value: password,
          oninput: handleChangePassword
        }),
        button(
          {
            type: "submit",
            className: "btn-primary",
            disabled: () => loading.val || !email.val || !password.val
          },
          "Login"
        ),
        Link({ href: "/signup", className: "block text-center mt-8 underline" }, "Create New Account")
      )
    )
  );
}
