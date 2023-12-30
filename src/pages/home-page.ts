import van from "vanjs-core";
import * as vanx from "vanjs-ext";
import { authenticatedUser, Input, Text } from "@/components";
import { signOut } from "firebase/auth";
import { auth, db } from "@/config/firebase.ts";
import bars from "@/assets/bars.svg";
import { collection, doc, getDocs, query, setDoc, where } from "firebase/firestore";
import { nanoid } from "nanoid";
import Todo from "@/models/todo.ts";
import { TodoItem } from "@/components/todo-item.ts";
import { Form, yupValidator } from "vanjs-form";
import * as yup from "yup";

const { div, button, img, a, form: formEl } = van.tags;

export default function HomePage() {
  const form = new Form({
    initialValues: { content: "" },
    validator: yupValidator(
      yup.object({
        content: yup.string().required("Required")
      })
    ),
    validationMode: "oninput"
  });

  const creatingTodo = van.state(false);
  const todos = vanx.reactive<Todo[]>([]);

  const handleCreateTodo = form.handleSubmit((values) => {
    const todo: Todo = {
      id: nanoid(),
      content: values.content,
      userId: authenticatedUser.val!.id,
      completed: false
    };

    setDoc(doc(db, "todos", todo.id), todo)
      .then(() => alert("Saved todo"))
      .catch((err) => {
        const idx = todos.indexOf(todo);
        if (idx !== -1) todos.splice(idx, 1);
        alert(err.message);
      })
      .finally(() => (creatingTodo.val = false));

    todos.unshift(todo);
    creatingTodo.val = true;
    form.reset("content");
  });

  const handleTodoUpdated = (todo: Todo, index: number) => {
    todos.splice(index, 1, todo);
  };

  const handleTodoDeleted = (index: number) => {
    todos.splice(index, 1);
  };

  van.derive(() => {
    const q = query(collection(db, "todos"), where("userId", "==", authenticatedUser.val!.id));

    getDocs(q).then(async (snapshot) => {
      const dbTodos = await Promise.all(snapshot.docs.map((doc) => doc.data() as Todo));
      todos.push(...dbTodos);
    });
  });

  return div(
    { className: "w-full mx-auto max-w-[640px] flex flex-col gap-6 py-8 px-8 md:px-0" },
    div(
      { className: "flex items-center gap-4" },
      img({ src: bars, className: "w-6 h-6" }),
      Text({ size: "lg", weight: "bold" }, "Awesome Todo"),
      div({ className: "flex-1" }),
      Text({ size: "sm" }, `Logged in as: ${authenticatedUser.val?.name}`),
      button({ className: "bg-rose-600 px-2 py-1 rounded text-white text-sm", onclick: () => signOut(auth) }, "Logout")
    ),
    formEl(
      {
        className: "flex items-start gap-4",
        onsubmit: handleCreateTodo
      },
      Input(
        form.register("content", {
          className: "flex-1",
          placeholder: "Create new todo",
          error: () => form.error("content")
        })
      ),
      button(
        {
          type: "submit",
          className: "rounded bg-green-400 px-4 py-2 text-sm text-white disabled:opacity-30",
          disabled: () => creatingTodo.val
        },
        "Add Todo"
      )
    ),
    vanx.list(
      (...children: HTMLElement[]) => div({ className: "flex flex-col gap-2" }, ...children),
      todos,
      (todo) => {
        return TodoItem({
          todo: todo.val,
          index: todos.indexOf(todo.val),
          onUpdated: handleTodoUpdated,
          onDeleted: handleTodoDeleted
        });
      }
    ),
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
      a({ href: "https://firebase.google.com", target: "_blank", className: "underline text-yellow-600" }, "Firebase"),
      " and ",
      a({ href: "https://tailwindcss.com", target: "_blank", className: "underline text-sky-400" }, "TailwindCSS")
    )
  );
}
