const app = document.getElementById("app");

function Header({ title }) {
  console.log(title);
  return <h1>{title ? title : "Default Title"}</h1>;
}

function Homepage() {
  const names = ["Google", "Developer", "Student", "Clubs"];

  return (
    <div>
      <Header title="React 💙" />
      <Header title="Google Developer Student Clubs 💙" />
      <Header />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

ReactDOM.render(<Homepage />, app);
