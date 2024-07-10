import TodoCard from "./TodoCard";

const TodoContainer = () => {
  return (
    <div>
      <div>
        <button>add Todo</button>
        <button>Filter</button>
      </div>
      <div className="bg-red-500 w-full h-full rounded-xl p-5 space-y-3">
        {/* <div className="bg-white p-5 text-center rounded-md font-semibold text-2xl">There is no task pending</div> */}
        <TodoCard/>
        <TodoCard/>
        <TodoCard/>
      </div>
    </div>
  );
};

export default TodoContainer;
