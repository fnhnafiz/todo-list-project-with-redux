import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment } from "./Redux/features/counter/counterSlice";
import type { RootState } from "./Redux/store";

function App() {
  const dispatch = useDispatch();
  const { counter } = useSelector((state: RootState) => state.counter);
  const handleIncrement = (count: number) => {
    dispatch(increment(count));
  };
  const handleDecrement = (count: number) => {
    dispatch(decrement(count));
  };
  return (
    <>
      <div className="max-w-4xl  flex flex-col justify-center">
        <h1 className="text-3xl font-bold">Counter with React</h1>
        <div className="flex items-center gap-8">
          <button
            onClick={() => handleIncrement(1)}
            className=" px-2 py-3 rounded-xl block mx-auto cursor-pointer bg-green-500 text-white font-medium"
          >
            Increament+
          </button>
          <button
            onClick={() => handleIncrement(5)}
            className=" px-2 py-3 rounded-xl block mx-auto cursor-pointer bg-green-500 text-white font-medium"
          >
            5 Increament+
          </button>

          <button
            onClick={() => handleDecrement(1)}
            className=" px-2 py-3 rounded-xl block mx-auto cursor-pointer bg-yellow-500 text-white font-medium"
          >
            Decreament-
          </button>
          <button
            onClick={() => handleDecrement(3)}
            className=" px-2 py-3 rounded-xl block mx-auto cursor-pointer bg-yellow-500 text-white font-medium"
          >
            3 Decreament-
          </button>
        </div>
        <p>
          Count:{" "}
          <span className="text-xl font-bold text-green-500">{counter}</span>
        </p>
      </div>
    </>
  );
}

export default App;
