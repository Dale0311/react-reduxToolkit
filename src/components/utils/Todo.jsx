function Todo({ title, isCompleted }) {
  return (
    <article
      className={`p-4 rounded-xl border ${
        isCompleted ? "border-green-500" : "border-gray-500"
      }`}
    >
      <a href="#">
        <h3 className="mt-0.5 text-lg font-medium text-gray-900">
          {title ?? "sample"}
        </h3>
      </a>

      <div className="mt-4 flex flex-wrap gap-1">
        <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
          Snippet
        </span>

        <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
          JavaScript
        </span>
      </div>
    </article>
  );
}

export default Todo;
