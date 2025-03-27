import React from "react";
import {Menu} from "../model/restaurant.ts";

// extends 는 Menu를 상속받는다는 의미
// interface 로 사용하는 방법
interface OwnProps extends Menu {
    showBestMenuName(name:string):string
}

// type 으로 사용하는 방법
// type OwnProps = Menu & {
//     showBestMenuName(name:string):string
// }

// omit 은 Menu에서 price를 제외한 나머지를 사용한다는 의미
// interface OwnProps extends Omit<Menu,'price'> {
//     showBestMenuName(name:string):string
// }

// pick 은 Menu에서 name만 사용한다는 의미
// interface OwnProps extends Pick<Menu,'name'> {
//     showBestMenuName(name:string):string
// }

const BestMenu:React.FC<OwnProps> = ({name}) => {
    return <div>{name}</div>
}

export default BestMenu