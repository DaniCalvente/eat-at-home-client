import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { loginService } from "../../services/auth.services";
import Form from "react-bootstrap/Form";

// import { ThemeContext } from "../../context/theme.context";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // const { switchBtnTheme } = useContext(ThemeContext)

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = { email, password };

    try {
      // contactar con el server para login
      const response = await loginService(user);
      const { authToken } = response.data;
      console.log("authToken", authToken);

      // recibir el token y guardarlo en localstorage
      localStorage.setItem("authToken", authToken);

      // redireccionar a "/"
      props.getUserInfo()
      navigate("/");
    } catch (err) {
      if (err.response && (err.response.status === 400 || err.response.status === 401)) {
        setErrorMessage(err.response.data.errorMessage);
      } else {
        navigate("/error");
      }
    }
  };

  // ejemplo de estilos propios y estilos del context
  // const btnStyles = {
  //   color: "blue"
  // }

  return (
    <div>
      <h3>Login</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <br />

        {errorMessage && <p style={{background: "red"}}>{errorMessage}</p>}

        {/* <button style={{...btnStyles, ...switchBtnTheme()}}>Submit</button> */}
        <button>Submit</button>
      </Form>
    </div>
  );
}

export default Login;
