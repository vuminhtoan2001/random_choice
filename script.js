const { useState } = React;
function App() {
  const [gift, setGift] = useState();
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState();
  function handelGift() {
    const index = Math.floor(Math.random() * users.length);
    setGift(users[index]);
  }
  function handleAdd() {
    if (user) {
      setUsers([...users, user]);
    }
    setUser("");
  }
  return (
    <div id="wrapper">
      <input onChange={(e) => setUser(e.target.value)} value={user} className="form__field" />
      <button onClick={handleAdd} className="btn btn--primary btn--inside uppercase">
        Thêm
      </button>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
      <h1>{gift || "Là ai / Là gì / Là thế nào đây ?"}</h1>
      <button onClick={handelGift} className="btn btn--primary">
        Go
      </button>
    </div>
  );
}

const root = document.querySelector("#root");
ReactDOM.render(<App />, root);
