import Todo from "../utils/Todo";
import AddTodo from "../utils/AddTodo";
import { useSelector } from "react-redux";
function Home() {
  const todos = useSelector((state) => state.todos);
  return (
    <div className="flex justify-center my-10">
      <div className="space-y-5">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            isCompleted={todo.isCompleted}
            title={todo.title}
          />
        ))}
        <AddTodo />
      </div>
    </div>
  );
}

export default Home;
