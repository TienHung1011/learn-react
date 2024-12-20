const myInfor = {
    name: "Hùng",
    age: 20,
    address: "13 Bế Văn Đàn",
};

const frontend = ["html", "css", "js"];
const backend = ["nodejs", "php", "python"];

const fullstack = [...frontend, ...backend,"java"];


const full = frontend.concat(backend).push("java");

/**
 * Spread có nghĩa là trải ra, rải ra.
 * Spread dùng khi đưa dữ liệu từ object, array cũ vào object, array mới
 * Spread có thể xuất hiện ở bất cứ vị trí nào trong khai báo giá trị object hoặc array.
 */

// Nếu khai báo myInfor ở sau sẽ bị ghi đè dữ liệu cũ
const myNewInfor = {
    ...myInfor,
    age: 21,
    linkFB: "https://www.facebook.com/hung",
}

myNewInfor
console.log(full);
console.log(fullstack);