import van from "vanjs-core";
import { Link, navigate } from "vanjs-routing";
import { Input, Text } from "@/components";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "@/config/firebase.ts";
import { HOME_ROUTE } from "@/config/routes.ts";
import { doc, setDoc } from "firebase/firestore";
import { Form, yupValidator } from "vanjs-form";
import * as yup from "yup";

const { div, label, form: formEl, button, a } = van.tags;

export default function SignupPage() {
  const form = new Form({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    },
    validator: yupValidator(
      yup.object({
        name: yup.string().required("Required"),
        email: yup.string().required("Required").email("Must be a valid email"),
        password: yup.string().required("Required").min(6, "Must be at least 6 characters"),
        confirmPassword: yup
          .string()
          .required("Required")
          .oneOf([yup.ref("password")], "Passwords must match")
      })
    ),
    validationMode: "oninput"
  });

  const loading = van.state(false);

  const handleSubmitSignup = form.handleSubmit((values) => {
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then(async (creds) => {
        if (creds.user) {
          await setDoc(doc(db, "users", creds.user.uid), {
            id: creds.user.uid,
            name: values.name,
            email: creds.user.email
          });

          alert(`Account created`);
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
      formEl(
        { onsubmit: handleSubmitSignup },
        label({ className: "label" }, "Name"),
        Input(
          form.register("name", {
            autofocus: true,
            error: () => form.error("name")
          })
        ),

        label({ className: "label" }, "Email"),
        Input(
          form.register("email", {
            type: "email",
            error: () => form.error("email")
          })
        ),

        div(
          { className: "flex gap-4" },
          div(
            { className: "flex-1" },
            label({ className: "label" }, "Password"),
            Input(
              form.register("password", {
                type: "password",
                error: () => form.error("password")
              })
            )
          ),

          div(
            { className: "flex-1" },
            label({ className: "label" }, "Confirm Password"),
            Input(
              form.register("confirmPassword", {
                type: "password",
                error: () => form.error("confirmPassword")
              })
            )
          )
        ),
        button(
          {
            type: "submit",
            className: "btn-primary",
            disabled: () => loading.val
          },
          "Create Account"
        ),
        Link({ href: "/login", className: "block text-center mt-8 underline" }, "Login")
      )
    )
  );
}
