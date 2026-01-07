// async function a() { await Promise.resolve("ok"); }
// async function b() { throw new Error("fail"); }

// (async () => {
//   try {
//     // await Promise.all([a(), b()]);
//     await Promise.allSettled([a(), b()]);
    
//     console.log("all ok");
//   } catch (e) {
//     console.log("caught:", e.message);
//   }
// })();



// async function f() {
//     await null;
//   console.log("a");
//   setTimeout(() => console.log("e") //thats why its run last
// );
//   console.log("b");
// }
// f();
// console.log("c");
// setTimeout(() => console.log("d"), 0); //alerady in call stack

// async function f() {
//   console.log("a");
//   await null;
//   setTimeout(() => console.log("e") //thats why its run last
// );
//   console.log("b");
// }
// f();
// console.log("c");
// setTimeout(() => console.log("d"), 0); //alerady in call stack


// async function f() {
//   console.log("a");
//   await null;
//   console.log("b");
// }
// f();
// console.log("c");
// setTimeout(() => console.log("d"), 0);

// sequential
// for (const x of [1,2,3]) await doWork(x);
// // concurrent
// await Promise.all([1,2,3].map(x => doWork(x)));


// async function demo() {
//   console.log("A");
//   await "Milind";  // no promise
//   console.log("B");
// }

// demo();
// console.log("C");

// async function test() {
//   console.log("1");
//   await 100; //javascript automatically attached promises.secretly does
//   console.log("2");
// }
// test();
// console.log("3");

// async function test() {
//   console.log("1");
//   await new Promise(res => setTimeout(res, 1000));
//   console.log("2");
// }
// test();
// console.log("3");

// Promise.resolve().then(() => {
//   console.log("P");
//   setTimeout(() => console.log("T"), 0);
// });

// console.log("X");


// console.log("1");
// setTimeout(() => {
//     console.log("2");    
// },0)
// Promise.resolve().then(() => console.log("3"));
// console.log("4");




// for (let i = 0; i <=4; i++) {
//     setTimeout(() => {
//         console.log(i);
//     },1000)
// }


// for (var i = 0; i <=4; i++) {
//     setTimeout(() => {
//         console.log(i);
//     },1000)
// }

// console.log("A");
// setTimeout(() => {
//     console.log("B")
// },0)
// console.log("C");

// console.log("hello")
// setTimeout(() => {
//     console.log("timer");
// },2000)
// console.log("end")


