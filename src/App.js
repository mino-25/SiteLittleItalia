import Header from "./components/header";
import NewMenu from "./components/Menu/menu";
import Texte from "./components/Texte";
import Presentation from "./components/presentation";
import Footer from "./components/footer";
import Event from "./components/event";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Presentation></Presentation>
      <NewMenu></NewMenu>
      <Event></Event>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
