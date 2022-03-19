function Home() {
  return (
    <div>
      <h1>Eat at Home</h1>

      <div>
        <form className="searchForm">
          <label htmlFor="search">Select your city </label>
          <input type="text" name="search" className="inputStyle" />
          <button>Enter</button>
        </form>
      </div>
    </div>
  );
}

export default Home;
