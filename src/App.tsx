import React, {useState} from "react";
import './App.css'
import Store from "./Store.tsx";
import {Address, Restaurant} from "./model/restaurant";
import BestMenu from "./BestMenu.tsx";

import Box from "./Box.tsx";

let data:Restaurant = {
    name: 'sol restaurant',
    category: 'western',
    address: {
        city: 'seoul',
        detail: 'somewhere',
        zipCode: 234234,
    },
    menu: [{
        name: 'rose pasta',
        price: 10000,
        category: 'PASTA'
    }, {
        name: 'hawaiian pizza',
        price: 20000,
        category: 'PIZZA',
    }]
}

const App:React.FC = () => {
    const [myRestaurant, setMyRestaurant] = useState<Restaurant>(data);
    const changeAddress = (address:Address) => {
        setMyRestaurant({...myRestaurant, address: address})
    }

    const showBestMenuName = (name:string) => {
        return name;
    }

    let count:number = 0;
    const [count2, setCount2] = useState<number>(0);
    const increase = () => {
        count = count + 1;
        setCount2(count2 + 1);
        console.log('state count : ', count2);
        // state count 가 한박자 늦음 -> 함수 끝날 때 까지 기다렸다가 UI 업데이트를 진행
    }

  return (
      <div className="App">
          <Store info={myRestaurant} changeAddress={changeAddress}/>
          <BestMenu name="불고기피자" category="피자" showBestMenuName={showBestMenuName} />

          <Box name="Sol" num={1} />
          <Box name="Jimin" num={2} />
          <Box name="JHope" num={3} />
          <Box name="V" num={4} />

          <div>{count}</div>
          <div>state: {count2}</div>
          <button onClick={increase}>증가</button>
      </div>

  )
}

export default App
