import './App.css';
import LoginPage from "./components/LoginPage/LoginPage";
import Home from "./components/HomePage/Home";

function App() {
  return (
      <div className="App">
        {
          (localStorage.getItem("users")===undefined ||  localStorage.getItem("users")== null)?
              <LoginPage/> : <Home />
        }
      </div>
  );
}

export default App;
