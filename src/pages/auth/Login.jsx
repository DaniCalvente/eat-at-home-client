function Login() {
  return (
    <div>
      <h3>Login</h3>

      <form>
        <label htmlFor="email">Email: </label>
        <input type="text" name="email" />
        <br />
        <label htmlFor="password">Password: </label>
        <input type="text" name="password" />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Login;
