import Images from "./Components/Images.js";
import Header from "./Components/Header.js";
import Footer from "./Components/Footer.js";

function App() {
  return (
    <>
      <Header />
      <div className="gallery--container">
        <Images />
      </div>
      <Footer />
    </>
  );
}

export default App;
