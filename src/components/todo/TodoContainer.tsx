import { useAppSelector } from "@/redux/hook";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  const {todos} = useAppSelector((state) => state.todos)
  return (
    <div>
      <div className="flex justify-between mb-10">
        <AddTodoModal />
        <TodoFilter />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-[5px] ">
        {/* <div className="bg-white p-5 text-center rounded-md font-semibold text-2xl">There is no task pending</div> */}
        <div className="bg-white bg-opacity-30 p-5 w-full h-full rounded-lg space-y-3">
            {
              todos.map(item => (
                <TodoCard {...item}/>
              ))
            }
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
