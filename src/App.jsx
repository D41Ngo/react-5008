import Card from "./modules/cach-tao-component/card";
import RccComponent from "./modules/cach-tao-component/rcc-component";
import RfcComponent from "./modules/cach-tao-component/rfc-component";
import HomeLayout from "./modules/home-layout/home-layout";
import BindingData from "./modules/binding-data/binding-data";
import HandLeEvent from "./modules/handle-event/handle-event";
import StyleInReact from "./modules/style-in-react";

import State from "./modules/state/state";
import TangGiamFontSize from "./modules/state/tang-giam-font-size";
import ChangeColorHouse from "./modules/state/change-color-house";
import ChangeCar from "./modules/state/change-car";
import RenderWithArray from "./modules/render-with-array";
import ListCard from "./modules/props/list-card/list-card";
import PhoneShop from "./modules/props/phone-shop/phone-shop";
// đây là file, tạo component App để đưa lên giao diện.
// js + css + html => .jsx
function App() {
  return (
    <>
      <PhoneShop />
      {/* <ListCard /> */}
      {/* <RenderWithArray /> */}
      {/* <ChangeCar /> */}
      {/* <ChangeColorHouse /> */}
      {/* <TangGiamFontSize /> */}
      {/* <State /> */}
      {/* <StyleInReact />
      <hr />
      <h1 className="heading">hahaha</h1> */}

      {/* <HandLeEvent /> */}
      {/* <BindingData /> */}
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
