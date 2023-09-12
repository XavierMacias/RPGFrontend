import './Home.css'
import { Link } from "react-router-dom"

function Home() {

    return (
    <> 
      <Link to={`/elements`}>
          <p>ELEMENTS</p>
      </Link>
      <Link to={`/elements`}>
          <p>WEAPONS</p>
      </Link>
      <Link to={`/elements`}>
          <p>ITEMS</p>
      </Link>
      <Link to={`/elements`}>
          <p>CREATURES</p>
      </Link>
    </>
    )
}

export default Home;