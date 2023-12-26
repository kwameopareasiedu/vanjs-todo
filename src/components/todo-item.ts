import van from "vanjs-core";
import Todo from "@/models/todo.ts";
import ellipsisH from "@/assets/ellipsis-h.svg";
import checkCircle from "@/assets/check-circle.svg";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "@/config/firebase.ts";

const { div, p, img, button } = van.tags;

interface TodoItemProps {
  todo: Todo;
  index: number;
  onUpdated: (todo: Todo, index: number) => void;
  onDeleted: (index: number) => void;
}

export function TodoItem({ todo, index, onUpdated, onDeleted }: TodoItemProps) {
  const completing = van.state(false);
  const deleting = van.state(false);

  const handleComplete = () => {
    const todoUpdate: Partial<Todo> = { completed: true };

    updateDoc(doc(db, "todos", todo.id), todoUpdate)
      .then(() => onUpdated({ ...todo, ...todoUpdate }, index))
      .catch((err) => alert(err.message))
      .finally(() => (completing.val = false));
    completing.val = true;
  };

  const handleDelete = () => {
    deleteDoc(doc(db, "todos", todo.id))
      .then(() => onDeleted(index))
      .catch((err) => alert(err.message))
      .finally(() => (deleting.val = false));
    deleting.val = true;
  };

  return div(
    { className: `flex items-center rounded-lg border border-1 border-grey-200 px-4 py-2 gap-2` },
    img({ src: !todo.completed ? ellipsisH : checkCircle, className: "w-4 h-4" }),
    p({ className: todo.completed ? "italic line-through text-gray-400" : "" }, todo.content),
    div({ className: "flex-1" }),
    !todo.completed
      ? button(
          {
            className: "bg-green-600 px-2 py-1 rounded text-white text-sm disabled:opacity-30",
            disabled: () => completing.val,
            onclick: handleComplete
          },
          "Complete"
        )
      : null,
    button(
      {
        className: "bg-rose-600 px-2 py-1 rounded text-white text-sm disabled:opacity-30",
        disabled: () => deleting.val,
        onclick: handleDelete
      },
      "Delete"
    )
  );
}
