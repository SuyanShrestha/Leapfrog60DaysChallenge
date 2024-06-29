//  Write a program to demonstrate how a asynchronous task can be executed using Promise.

let promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    const x = "suyan heroheeralal";
    const y = "suyan heroheeralal";
    const randomNumber = Math.random();

    if (x === y && randomNumber > 0.5) {
      resolve("Hello heroheeralal sir");
    } else {
      reject("Oh no, imposter alert");
    }
  }, 2000);
});

promise.then((res) => console.log(res)).catch((err) => console.log(err));
