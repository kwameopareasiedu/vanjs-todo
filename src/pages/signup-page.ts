import van from "vanjs-core";
import { Link, navigate } from "vanjs-routing";
import { Text } from "@/components";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "@/config/firebase.ts";
import { HOME_ROUTE } from "@/config/routes.ts";
import { doc, setDoc } from "firebase/firestore";

const { div, input, label, form, button, a } = van.tags;

export default function SignupPage() {
  const name = van.state("");
  const email = van.state("");
  const password = van.state("");
  const confirmPassword = van.state("");
  const loading = van.state(false);

  const handleChangeName = (e: KeyboardEvent) => {
    name.val = (e.target as HTMLInputElement).value;
  };

  const handleChangeEmail = (e: KeyboardEvent) => {
    email.val = (e.target as HTMLInputElement).value;
  };

  const handleChangePassword = (e: KeyboardEvent) => {
    password.val = (e.target as HTMLInputElement).value;
  };

  const handleChangeConfirmPassword = (e: KeyboardEvent) => {
    confirmPassword.val = (e.target as HTMLInputElement).value;
  };

  const handleSubmitSignup = (e: SubmitEvent) => {
    e.preventDefault();

    if (!name.val) return alert("Name is required");
    if (!email.val) return alert("Email is required");
    if (password.val.length < 6) return alert("Password should be at least six (6) characters");
    if (password.val !== confirmPassword.val) return alert("Passwords must match");

    createUserWithEmailAndPassword(auth, email.val, password.val)
      .then(async (creds) => {
        if (creds.user) {
          await setDoc(doc(db, "users", creds.user.uid), {
            id: creds.user.uid,
            name: name.val,
            email: creds.user.email
          });

          alert(`Account created`);
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
      Text({ size: "xl", align: "center", weight: "bold" }, "Awesome Todo Signup"),
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
        { onsubmit: handleSubmitSignup },
        label({ className: "label" }, "Name"),
        input({
          className: "form-field",
          autofocus: true,
          value: name,
          oninput: handleChangeName
        }),
        label({ className: "label" }, "Email"),
        input({
          type: "email",
          className: "form-field",
          value: email,
          oninput: handleChangeEmail
        }),
        div(
          { className: "flex gap-4" },
          div(
            { className: "flex-1" },
            label({ className: "label" }, "Password"),
            input({
              type: "password",
              className: "form-field",
              value: password,
              oninput: handleChangePassword
            })
          ),
          div(
            { className: "flex-1" },
            label({ className: "label" }, "Confirm Password"),
            input({
              type: "password",
              className: "form-field",
              value: confirmPassword,
              oninput: handleChangeConfirmPassword
            })
          )
        ),
        button(
          {
            type: "submit",
            className: "btn-primary",
            disabled: () => loading.val || !name.val || !email.val || !password.val || !confirmPassword.val
          },
          "Create Account"
        ),
        Link({ href: "/login", className: "block text-center mt-8 underline" }, "Login")
      )
    )
  );
}
