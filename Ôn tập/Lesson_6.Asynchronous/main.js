/**
 * 3 cách giải quyết bất đồng bộ
 * 1, Callback
 * 2, Promise
 * 3, Async/Await
 * 
 */


function taskA(callback) {
  setTimeout(() => {
    console.log("Complete Task A");
    callback();
  }, 3000);
}

function taskB(callback) {
  setTimeout(() => {
    console.log("Complete Task B");
    callback();
  }, 2000);
}
function taskC(callback) {
  setTimeout(() => {
    console.log("Complete Task C");
    callback();
  }, 1000);
}

// Callback
taskA(() =>
  taskB(() =>
    taskC(() => {
      console.log("Complete all task");
    })
  )
);

function Task1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Công việc 1 hoàn thành");
      resolve();
    }, 1000);
  });
}

function task2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Công việc 2 hoàn thành");
      resolve();
    }, 2000);
  });
}

function task3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Công việc 3 hoàn thành");
      resolve();
    }, 1500);
  });
}


// Promise
Task1()
.then(()=> task2())
.then(()=> task3())
.then(()=>{
    console.log("All task done");
})
.catch((error)=>{
    console.error("Da xay ra loi" ,error);
})

console.time("Thời gian thực hiện tất cả các công việc");
Promise.all([Task1(), task2(), task3()])
  .then(() => {
    console.timeEnd("Thời gian thực hiện tất cả các công việc");
  })
  .catch((err) => {
    console.error("Đã xảy ra lỗi: ", err);
  });


// Async/await
async function taskCommon(){
    try {
        await Task1()
        await task3()
        await task2()
        console.log("Tất cả công việc đã hoàn thành");
    } catch (error) {
        console.error("Đã xảy ra lỗi: ",error)
    }
}

taskCommon();