import { NavLink, useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

function Navbar(props) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    props.getUserInfo()
    navigate("/");
    // remueven el token de la
    // redirigen al usuario
  };

  if(props.isLoggedIn) {
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
        
  
        <Nav.Item>
          <Nav.Link>
          <NavLink to="/login">
              <div className="mb-2">
                <Button to="/" onClick={handleLogout}variant="danger" size="lg">
                Logout
                </Button>
              </div>
            </NavLink>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    );
  } else {
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
        
  
        <Nav.Item>
          <Nav.Link>
            <NavLink to="/signup">
              <div className="mb-2">
                <Button variant="primary" size="lg">
                  Signup
                </Button>
              </div>
            </NavLink>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
          <NavLink to="/login">
              <div className="mb-2">
                <Button variant="primary" size="lg">
                Login
                </Button>
              </div>
            </NavLink>
          </Nav.Link>
        </Nav.Item>
  
      </Nav>
    );
  }

  
}

export default Navbar;
