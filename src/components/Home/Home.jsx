import './Home.css'
import { Link } from "react-router-dom"

function Home() {

    return (
    <> 
      <Link to={`/elements`}>
          <p>ELEMENTS</p>
      </Link>
      <Link to={`/weapons`}>
          <p>WEAPONS</p>
      </Link>
      <Link to={`/items`}>
          <p>ITEMS</p>
      </Link>
      <Link to={`/magics`}>
          <p>MAGICS</p>
      </Link>
      <Link to={`/creatures`}>
          <p>CREATURES</p>
      </Link>
    </>
    )
}

export default Home;