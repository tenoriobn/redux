import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../lib/redux";
import { decrement, increment, reset } from "../../lib/redux/feature/counter/counterActions";

export default function Products() {
  const numberClicks = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <div>Products</div>
      <Link to="/">Inicio</Link>

      <div>
        <p>quantidade de cliques: {numberClicks || 0}</p>

        <button onClick={() => dispatch(increment())}>
          Incrementar
        </button>

        <button onClick={() => dispatch(decrement())}>
          Decrementar
        </button>

        <button onClick={() => dispatch(reset())}>
          Resetar
        </button>
      </div>
    </>
  )
}
