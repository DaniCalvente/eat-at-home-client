import { NavLink, useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

function Navbar(props) {
  
  const navigate = useNavigate()

  const handleLogout = () => {

    localStorage.removeItem("authToken")
    navigate("/")
    // remueven el token de la
    // redirigen al usuario
  }

  return (
    <Nav fill variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link>
        <NavLink to="/">
        <div className="mb-2">
    <Button variant="primary" size="lg">
      Home
    </Button>
    </div>
        </NavLink>
        </Nav.Link>
      </Nav.Item>


      <Nav.Item><Nav.Link>
        <NavLink to="/signup">
        <div className="mb-2">
    <Button variant="primary" size="lg">
      Login
    </Button>
    </div>
    

        </NavLink>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <NavLink to="/login">Login</NavLink>
      </Nav.Item>

      <button to="/" onClick={handleLogout}>Logout</button> 
    <Nav.Link></Nav.Link>
    <Nav.Link></Nav.Link>
    </Nav>
  );
}

export default Navbar;
