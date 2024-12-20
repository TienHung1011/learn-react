// !Destructuring
const myInfor = {
    name: "Hùng",
    age: 20,
    address: "13 Bế Văn Đàn",
};

// const name = myInfor.name;
// const age = myInfor.age;
// const address = myInfor.address;


const{ name, age, address } = myInfor;

console.log( name ,age);

const myInfor2 = ["Tiến Hùng","Tik", "Tiến Tik"];

// const ten1 = myInfor2[0];
// const ten2 = myInfor2[1];
// const ten3 = myInfor2[2];


const [ten1, ten2, ten3] = myInfor2;
console.log(ten1, ten2, ten3);