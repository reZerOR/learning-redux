
import "./App.css";
import { decrement, increment } from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const state = useAppSelector((state)=> state.counter.counter)
  const dispatch = useAppDispatch()
  return (
    <>
      <div className="h-screen w-full flex justify-center items-center">
        <div className="flex border border-purple-300 p-10 rounded-md">
          <button onClick={()=>dispatch(increment())} className="px-3 py-2 rounded-md bg-green-400 text-xl font-semibold text-white">Increment</button>
          <p className="text-3xl mx-10">{state}</p>
          <button onClick={()=> dispatch(decrement())} className="px-3 py-2 rounded-md bg-red-400 text-xl font-semibold text-white">Decrement</button>
        </div>
      </div>
    </>
  );
}

export default App;
