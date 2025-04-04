import React from "react";
import {Address, Restaurant} from "../model/restaurant.ts";

interface OwnProps {
    info: Restaurant
    changeAddress(address: Address): void
}

const Store:React.FC<OwnProps> = ({info}) => {
    return (
        <div>{info.name}</div>
    )
}

export default Store