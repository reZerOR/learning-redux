import { Pencil, Trash2Icon } from "lucide-react";
import { Button } from "../ui/button";
import { removeTodo, toggleComplete, TTodo } from "@/redux/features/todoSlice";
import { useAppDispatch } from "@/redux/hook";

const TodoCard = ({title, description, id, isCompleted}: TTodo) => {
  const dispatch = useAppDispatch()
  const deleteTodo = () => {
    dispatch(removeTodo(id))
  }

  const toggle = () => {
    dispatch(toggleComplete(id))
  }
  return (
    <div className="bg-white rounded-md flex justify-between items-center p-3">
      <input onChange={toggle} type="checkbox" name="complete" id="complete" />
      <p>{title}</p>
      <p>{description}</p>
      <div>{isCompleted ? <p className="text-white bg-green-500 px-2 rounded-full font-medium">Complete</p>:<p className="text-white bg-red-500 font-medium px-2 rounded-full">Pending</p>}</div>
      <div className=" space-x-2 text-sm">
        <Button onClick={deleteTodo} className="bg-red-500 hover:bg-red-600"><Trash2Icon width={20}/></Button>
        <Button className="bg-[#5c53fe] hover:bg-[#453ce7]"><Pencil width={20}/></Button>
      </div>
    </div>
  );
};

export default TodoCard;
