// let data = {
//     name: 'sol restaurant',
//     category: 'western',
//     address: {
//         city: 'seoul',
//         detail: 'somewhere',
//         zipCode: 234234,
//     },
//     menu: [{
//         name: 'rose pasta',
//         price: 10000,
//         category: 'PASTA'
//     }, {
//         name: 'hawaiian pizza',
//         price: 20000,
//         category: 'PIZZA',
//     }]
// }

// 타입을 만드는 방법 : interface, type
export type Restaurant = {
    name: string,
    category: string,
    address: Address,
    menu: Menu[]
}

export type Address = {
    city: string,
    detail: string,
    zipCode?: number,
}

export type Menu = {
    name: string,
    price: number,
    category: string,
}

// ex) 메뉴에다 추가로 함수 같은걸 덧붙이고 싶을때
// extends

// 메뉴에서 항목 하나를 빼고 싶을 때
// omit
export type AddressWithoutZipCode = Omit<Address, 'zipCode'>;

// 메뉴에서 항목 하나만 쓰고 싶을 때
// pick
export type MenuOnlyName = Pick<Menu, 'name'>;

// API를 통해 받아온 데이터를 저장할 때
export type ApiResponse<T> = {
    data: T[],
    totalPage: number,
    currentPage: number,
}

export type RestaurantResponse = ApiResponse<Restaurant>;