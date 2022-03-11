import Home from "components/pages/home/Home";
import SideMenu from "components/sideMenu/SideMenu";

function App() {
  return (
    <div className="App">
      <SideMenu />
      <div className="container">
        <Home/>
      </div>
    </div>
  );
}

export default App;
