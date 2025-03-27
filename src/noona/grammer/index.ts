// number, string, boolean, null, undefined, any

const a:number = 10;
const b:string = 'hello';
console.log(a,b);

// any는 타입이 정해지지 않은 변수를 선언할 때 사용한다.
// 하지만 any를 사용하는 것은 지양해야 한다.
let c:any = 10;
c = 'hello';
console.log(c);

// 숫자나 문자가 가능한 경우
let d:number | string = 10;
d = 'hello';
// d = null; // 에러 발생
console.log(d);

// 배열
const e:number[] = [1, 2, 3];
const f:string[] = ['a', 'b', 'c'];
console.log(e, f);

function addNumber(a:number, b:number):number {
    return a + b;
}

addNumber(10, 20);