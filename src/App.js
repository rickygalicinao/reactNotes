import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const country = "Philippines";

  const [greeting, setGreeting] = useState("Good morning");

  setTimeout(() => {
    setGreeting("Good Afternoon");
  }, 3000);

  return (
    <div>
      <Header greeting={greeting} age="20" />
      <Body country={country} />
      <Footer country={country} />
    </div>
  );
}

export default App;
