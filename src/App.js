import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const country = "Philippines";

  return (
    <div>
      <Header />
      <Body />
      <Footer country={country} />
    </div>
  );
}

export default App;
