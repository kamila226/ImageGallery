import Images from "./Components/Images.js";
import Header from "./Components/Header.js";

function App() {
  return (
    <>
      <Header />
      <div className="gallery--container">
        <Images />
      </div>
    </>
  );
}

export default App;
