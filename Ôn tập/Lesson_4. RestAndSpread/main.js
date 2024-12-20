const myInfor = {
  name: "Hùng",
  age: 20,
  address: "13 Bế Văn Đàn",
};

const { name, ...rest } = myInfor;
console.log(rest);

const myInfor2 = ["Tiến Hùng", "Tik", "Tiến Tik"];

const [tenthat, ...nickname] = myInfor2;
console.log(nickname);

/**
 * 1. Rest là phần còn lại khi destructuring 1 object hoặc array
 * 2. Rest thường xuất hiện khi khai báo
 * 3. Rest thường là biến được khai báo cuối để gom những phần còn lại
 */

// Args = arguments
function sum(a, ...args) {
  console.log(a);
  console.log(args);
  let tong = 0;
  for(let i = 0; i < args.length; i++){
    tong += args[i];
}
    return tong;
}
sum(1, 2, 3);

console.log(sum(1,2,7));

function sum1(...args){
    let tong = 0;
    for(values of args){
        tong += values;
    }
    return tong;
}

console.log(sum1(1,2,6));