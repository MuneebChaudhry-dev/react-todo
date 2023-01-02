import React from "react";
import { Route, Routes } from "react-router-dom";

import Footer from "./Components/Footer";
import Home from "./Components/Home";
import About from "./Components/About";
function App() {
  return (
    <div className="container">
      {/* <Header title="Hello" /> */}

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

// class App extends React.Component {
//   render() {
//     return (
//       <div className="container">
//         <Header />
//       </div>
//     );
//   }
// }

export default App;
