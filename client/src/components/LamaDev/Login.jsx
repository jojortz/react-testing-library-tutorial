import { useState, useEffect } from "react";
import axios from "axios";

const host_url = "https://jsonplaceholder.typicode.com/users/1"

const Login = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});

  useEffect(() => {
    setUsername(user.name);
  }, [user])

  const handleClick = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.get(host_url).then((res) => {
      setUser(res.data);
      setLoading(false);
    })
      .catch((err) => {
        setError(true);
      })
  };
  return (
    <div>
      <h2>{user.name}</h2>
      <form>
        <input type="text" placeholder="username" value={username}
          onChange={(e) => {
            e.preventDefault();
            setUsername(e.target.value);
          }}
        />
        <input type="password" placeholder="password" value={password}
          onChange={(e) => {
            e.preventDefault();
            setPassword(e.target.value);
          }} Í />
        <button disabled={!username || !password} onClick={handleClick}>
          {loading ? "Loading..." : "Login"}
        </button>
        <span data-testid="error" style={{ visibility: error ? "visible" : "hidden" }}>Something went wrong!</span>
      </form>
    </div>
  )
}

export default Login;