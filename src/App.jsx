import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import WhereToBuy from "./components/WhereToBuy/WhereToBuy";

function App() {
  return (
    <div className="">
      <Hero />
      <Services />
      <WhereToBuy />
      {/* <AppBanner/> */}
      <Footer />
    </div>
  );
}

export default App;
