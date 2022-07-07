const app = document.getElementById("app");

function Header() {
  return <h1>Develop. Preview. Ship. 🚀</h1>;
}

function Homepage() {
  return (
    <div>
      <Header />
      Body
    </div>
  );
}

ReactDOM.render(<Homepage />, app);
