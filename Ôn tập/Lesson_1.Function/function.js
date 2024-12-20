function sum(){
    return 2+3;
}

console.log(sum()); 

function sum(a,b){
    a = 3;
    b = 5;
    return a +b; 
}

console.log(sum());

function sum1(a,b){
    return a + b;
}

console.log(sum1(3,5));

/**  
 *1. Regular function(named function)
 *2. Anonymous function (Expression function, Arrow function)
 *3. Callback functionf
 *4. IIFE thuc hien ngay lap tuc khi khai bao
*/
//Expression function
const sum2 = function(a,b){
    return a+b;
}

console.log(sum2(3,6));


// Arrow function
const sum3 = (a,b) => {
    return a + b;
}

const sum4 = (a,b) => a + b
const returnObject = () => ({
    name: "Hùng",
    age: 20
});

const returnArray = () => [1,2,3,4];


console.log(sum3(2,1));
console.log(sum4(2,5))
console.log(returnObject());
console.log(returnArray())


const muaDoTet = (viec1) => {
    viec1();
    console.log("congviecA");
}

const coLuong = () => {
    setTimeout(()=>{
        console.log("Cho co luong");
    }, 2000);
}

const xinTien = () =>{
    setTimeout(()=>{
        console.log("Xin tien me")
    }, 2000);
}

muaDoTet(xinTien);
// muaDoTet(coLuong);


(function (a, b){
   console.log(a + b);
})(12,14);