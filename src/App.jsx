import Card from "./modules/cach-tao-component/card";
import RccComponent from "./modules/cach-tao-component/rcc-component";
import RfcComponent from "./modules/cach-tao-component/rfc-component";

import HomeLayout from "./modules/home-layout/home-layout";
import BindingData from "./modules/binding-data/binding-data";
// đây là file, tạo component App để đưa lên giao diện.
// js + css + html => .jsx
function App() {
  return (
    <>
      <BindingData />
      {/* <HomeLayout /> */}
      {/* <h1>Hello World</h1> */}
      {/* 1. */}
      {/* <RccComponent /> */}
      {/* <input /> */}

      {/* 2. */}
      {/* <RccComponent></RccComponent> */}
      {/* <p></p> */}

      {/* <RfcComponent /> */}

      {/* <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card /> */}
    </>
  );
}

export default App;
