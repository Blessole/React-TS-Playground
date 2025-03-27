/* 실무에서 많이 쓰이는 문법 */
/* 1. Object Shorthand Assignment */
const name = 'noona';
const age = 28;

let data = {
    name,  // name: name 와 같음
    age   // age: age 와 같음
}


/* 2. Destructuring */
// object 일 때
let data = {name: 'noona',  age: '28'}
// let name = data.name;
// let age = data['age'];
let {name, age} = data; // data 객체에서 name과 age를 가져옴

// 배열에서도 사용 가능
const array = [1,2,3,4];
let [a,b, ...rest] = array; // a = 1, b = 2, rest = [3, 4]



/* 3. spread */
let person = {name: 'noona', age: 28};
let person2 = {...person}; // 깊은 복사 --> 객체를 복사해서 새로운 객체를 만듦
let person3 = person; // 얕은 복사 --> 객체 주소를 참조하는거라 값이 바뀌면 함께 바뀜

// 복사를 해오되, 안에 데이터를 변경하고 싶을 때
let person4 = {...person, name: 'noona2'}; // name만 변경 {name: 'noona2', age: 28}

// 배열에서도 사용 가능
let a = [1,2,3];
let b = [...a, 4]; // 추가 [1,2,3,4]
let c = [...a, ...b]; // 합치기 [1,2,3,1,2,3,4]



/* 4. 삼항연산자 */
let person = {name: 'noona', age: 28};

if (person) {
    console.log(person.name);
} else {
    console.log('person이 없습니다.');
}

console.log(person? person.name : "person이 없습니다.")

