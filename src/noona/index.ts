// number, string, boolean, null, undefined, any

let a:number = 10;
let b:string = 'hello';

// any는 타입이 정해지지 않은 변수를 선언할 때 사용한다.
// 하지만 any를 사용하는 것은 지양해야 한다.
let c:any = 10;
c = 'hello';

// 숫자나 문자가 가능한 경우
let d:number | string = 10;
d = 'hello';
d = null; // 에러 발생

// 배열
let e:number[] = [1, 2, 3];
let f:string[] = ['a', 'b', 'c'];

function addNumber(a:number, b:number):number {
    return a + b;
}

addNumber(10, 20);