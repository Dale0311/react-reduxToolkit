import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../app/features/todos";
function AddTodo() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(title));
    setTitle("");
  };
  return (
    <form className="space-x-5" onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="title">Name: </label>
      <input
        type="text"
        name="title"
        id="title"
        className="py-2 px-4 border border-gray-500 rounded"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className="py-2 px-4 bg-blue-500 text-white rounded">
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo;
