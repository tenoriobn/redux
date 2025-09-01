import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import type { AppDispatch, RootState } from "../../lib/redux";
import { decrement, increment } from "../../lib/redux/feature/counter/counterSlice";

export default function Products() {
  const numberClicks = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <div>Products</div>
      <Link to="/">Inicio</Link>

      <div>
        <p>quantidade de cliques: {numberClicks || 0}</p>

        <button onClick={() => dispatch(increment())}>
          Acrescente
        </button>

        <button onClick={() => dispatch(decrement())}>
          Decrescente
        </button>
      </div>
    </>
  )
}
