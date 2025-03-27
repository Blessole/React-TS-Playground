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
  return (
      <div className="App">
          <Store info={myRestaurant} changeAddress={changeAddress}/>
          <BestMenu name="불고기피자" category="피자" showBestMenuName={showBestMenuName} />

          <Box name="Sol" num={1} />
          <Box name="Jimin" num={2} />
          <Box name="JHope" num={3} />
          <Box name="V" num={4} />
      </div>

  )
}

export default App
xssssss