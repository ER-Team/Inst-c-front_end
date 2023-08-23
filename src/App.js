import './App.css';
import LoginPage from "./components/LoginPage/LoginPage";

function App() {
  return (
      <div className="App">
        {
          (localStorage.getItem("users")===undefined ||  localStorage.getItem("users")== null)?
              <LoginPage/> :  <LoginPage/>
        }
      </div>
  );
}

export default App;
