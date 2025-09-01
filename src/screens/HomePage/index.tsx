import { useSelector } from "react-redux";
import { Link } from "react-router";
import type { RootState } from "../../lib/redux";

export default function HomePage() {
  const numberClicks = useSelector((state: RootState) => state.counter.value);
  
  return (
    <>    
      <div>HomePage</div>
      <Link to="/products">Produtos</Link>

      <div>
        <p>Número de cliques: {numberClicks || 0}</p>
      </div>
    </>
  )
}
