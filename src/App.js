import "./App.css";
import app from "./firebase.init";
import { getAuth } from "firebase/auth";

const auth = getAuth(app);
function App() {
  const handleEmailBlur = (event) => {
    console.log(event.target.value);
  };
  const handlePasswordBlur = (e) => {
    console.log(e.target.value);
  };
  const handleFormSubmit = (event) => {
    console.log("form submited");
    event.preventDefault();
  };

  return (
    <div className="App">
      <form onSubmit={handleFormSubmit}>
        <input onBlur={handleEmailBlur} type="email" placeholder="email" />{" "}
        <br />
        <input
          onBlur={handlePasswordBlur}
          type="password"
          placeholder="password"
        />{" "}
        <br />
        <input type="button" value="Login" />
      </form>
    </div>
  );
}

export default App;
