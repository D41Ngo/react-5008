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
import CountRedux from "./modules/demo-redux/count";
import ChangeCarRedux from "./modules/demo-redux/change-car";
import PhoneShopRedux from "./modules/demo-redux/phone-shop-redux/phone-shop-redux";
import GameXucXac from "./modules/game-xuc-xac";
import GameBuaKeoBao from "./modules/game-bua-keo-bao/game-bua-keo-bao";

import { ReactForm } from "./modules/react-form";
import LifeCycle from "./modules/life-cycle/life-cycle";
import { useState } from "react";
import DemoProps from "./react-hooks/props";
import DemoUseEffect from "./react-hooks/use-effect";
import TodoList from "./react-hooks/use-effect/todo-list";
import Select from "./react-hooks/use-effect/select";
import SelectV2 from "./react-hooks/use-effect/select-2";

import Performance from "./react-hooks/performance";
import UseRef from "./react-hooks/performance/use-ref";
// đây là file, tạo component App để đưa lên giao diện.
// js + css + html => .jsx
function App() {
  return (
    <>
      <UseRef />
      {/* <Performance /> */}
      {/* <SelectV2 /> */}
      {/* <TodoList /> */}
      {/* <DemoUseEffect /> */}
      {/* <DemoProps /> */}
      {/* <LifeCycle /> */}
      {/* <ReactForm /> */}

      {/* <GameBuaKeoBao /> */}
      {/* <GameXucXac /> */}

      {/* <PhoneShopRedux /> */}
      {/* <ChangeCarRedux /> */}
      {/* <CountRedux /> */}
      {/* <PhoneShop /> */}
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
