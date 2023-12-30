import van from "vanjs-core";
import { Text } from "@/components";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/config/firebase.ts";
import { Link, navigate } from "vanjs-routing";
import { Form, yupValidator } from "vanjs-form";
import { HOME_ROUTE } from "@/config/routes.ts";
import * as yup from "yup";

const { div, input, label, form: formEl, button, a } = van.tags;

export default function LoginPage() {
  const form = new Form({
    initialValues: {
      email: "",
      password: ""
    },
    validator: yupValidator(
      yup.object({
        email: yup.string().required("Required").email("Must be a valid email"),
        password: yup.string().required("Required")
      })
    )
  });

  const loading = van.state(false);

  const handleSubmitLogin = form.handleSubmit((values) => {
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((creds) => {
        if (creds.user) {
          alert(`Welcome!`);
          navigate(HOME_ROUTE);
        }
      })
      .catch((err) => alert(err.message))
      .finally(() => (loading.val = false));

    loading.val = true;
  });

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
      formEl(
        { onsubmit: handleSubmitLogin },
        label({ className: "label" }, "Email"),
        input(
          form.register("email", {
            type: "email",
            className: "form-field",
            autofocus: true
          })
        ),
        label({ className: "label" }, "Password"),
        input(
          form.register("password", {
            type: "password",
            className: "form-field"
          })
        ),
        button(
          {
            type: "submit",
            className: "btn-primary",
            disabled: () => loading.val
          },
          "Login"
        ),
        Link({ href: "/signup", className: "block text-center mt-8 underline" }, "Create New Account")
      )
    )
  );
}
