import Header from "./components/Header";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import BestProduct from "./components/BestProduct";
import Products from "./components/Products";
import BrandStory from "./components/BrandStory";
import News from "./components/News";
import Video from "./components/Video";
import Footer from "./components/Footer";
import "./styles/style.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <main id="main">
        <Hero />
        <Introduction />
        <BestProduct />
        <Products />
        <BrandStory />
        <News />
        <Video />
      </main>
      <Footer />
    </div>
  );
}

export default App;
