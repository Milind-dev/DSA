
/* var y = 20;
window.y = 10;
console.log(y); 
These two ARE NOT the same variable.

Unlike var, let does not connect to window.
var x = 5;
console.log(window.x); // 5

let y = 5;
console.log(window.y); // undefined

var a = 20;
a and window.a refer to SAME memory.
let a = 20;
a and window.a are DIFFERENT and independent.

global.window = {};
window.y = 10;
console.log(window.y); // 10

var topFunction = function () {
    var a = 0,
        b = false,
        c = function () {};
};

window.greeting = 'Hey there';
console.log(window.greeting);
console.log(this.greeting);

*/



// ----------------------------------------------

/* setInterval(()=> console.log('I'), 0);
(function spin(n=0){
  Promise.resolve().then(()=> { console.log('micro', n); spin(n+1); });
})();
 */

/* let id = setInterval(() => {
  console.log('start');
  const end = Date.now() + 300; while(Date.now() < end){} // blocks 300ms
  console.log('end');
}, 200);
setTimeout(()=> clearInterval(id), 1000); */

/* const timer = {};
function start() {
  timer.id = setInterval(() => console.log("hi"), 500);
}
start();
clearInterval(timer.id);
 */

/* var id;
function start(){
     id = setInterval(() => console.log("hi"), 500);
}
const myId = start();
clearInterval(myId); */

/* // fix
function start(){
  var id = setInterval(() => console.log("hi"), 500);
  return id;
}
const myId = start();
clearInterval(myId);
 */

/* 
function start(){
  var id = setInterval(() => console.log("hi"), 500);
}
start();
// later...
clearInterval(id); //not working because id is here outside scope */

/* 
let id = setInterval(() => {
  console.log("Run");
  clearInterval(id);
}, 0);
console.log(id); */


/* setInterval(async () => {
  await Promise.resolve();
  console.log("Tick");
}, 1000);
 */

/* let id = setInterval(() => console.log("A"), 1000);
let id2 = id;
 */

/* let id = setInterval(() => console.log("A"), 1000);
let id2 = id;
clearInterval(id2); */

// setTimeout(function tick() {
//   console.log("X");
//   setTimeout(tick, 1300);
// }, 1000);


/* setInterval(() => console.log("Interval"), 1000);
setTimeout(() => {
  console.log("Stop interval");
  clearInterval(id);
}, 3000); */


// interval every ~50ms
/* setInterval(() => {
  console.log("interval macrotask @", performance.now().toFixed(0));
}, 50);

// microtasks that yield occasionally
function spinMicrotasks(n = 0) {
  if (n % 50 === 0 && n !== 0) {
    // yield to macrotasks (allow interval to run)
    return setTimeout(() => spinMicrotasks(n + 1), 0);
  }

  Promise.resolve().then(() => {
    console.log("micro", n, "@", performance.now().toFixed(0));
    spinMicrotasks(n + 1);
  });
}

spinMicrotasks(); */


/* let i = 0;
function tick() {
  console.log("tick", i++);
  setTimeout(tick, 100); // schedule next after current finishes
}
tick();
 */


// Kya hota hai: 20 microtasks chalne ke baad ek macrotask (setTimeout) aata hai → event loop microtasks flush karne ke baad macrotask ko run karega (yaha interval). Result: microtasks bhi chalenge aur interval bhi.
/* setInterval(() => {
  console.log("interval macrotask");
}, 0);

function spinMicrotasks(n = 0) {
  // har 20 microtasks ke baad yield karo
  if (n % 20 === 0 && n !== 0) {
    // schedule next chunk as macrotask — gives interval a chance
    setTimeout(() => spinMicrotasks(n + 1), 0);
    return;
  }

  Promise.resolve().then(() => {
    console.log("micro", n);
    spinMicrotasks(n + 1);
  });
}

spinMicrotasks();
 */

// micro-starvation se bachne k liye
/* setInterval(() => {
  console.log("interval macrotask 2222222222222222222");
}, 0);

// limited microtasks
function spinMicrotasks(n = 0, max = 100) {
  if (n >= max) return;           // STOP after max
  Promise.resolve().then(() => {
    console.log("micro", n);
    spinMicrotasks(n + 1, max);
  });
}
spinMicrotasks(0, 1000); */


/* continuously schedule microtasks
function spinMicrotasks(n=0) {
  Promise.resolve().then(() => {
    console.log("micro", n);
    spinMicrotasks(n+1); // keep scheduling another microtask [micro(n+1), micro(n+2), micro(n+3)...]
  });
}
spinMicrotasks(); */



/* let i = 0;
setInterval(() => {
  console.log(i++);
}, 0)
Promise.resolve().then(() => console.log("P"));
 */

/* let count = 0;
const id = setInterval(() => {
  count++;
  console.log(count);

  if (count === 3) {
    clearInterval(id);
  }
}, 1000);
 */

/* const id = setInterval(() => {
  console.log("ping");
}, 1000);
clearInterval(id);  // stops repeating

 */

/* setInterval(() => console.log("tick"), 1000);
clearInterval(1000);  // stops repeating
while(true) {}  // infinite blocking
 */

/* setInterval(() => {
  console.log("Hello");
}, 1000);
 */

/* setInterval(() => {
  console.log("interval macrotask");
}, 0);
 */





// function loader(arr,target) {
//    const seen = new Map(); // value -> index

//   for (let i = 0; i < arr.length; i++) {
//     const val = arr[i];
//     const complement = target - val;
//     console.log(complement, seen.has(complement),seen.set(val,i));

//     if (seen.has(complement)) {
//       console.log(seen.get(complement),i);
//       return [seen.get(complement), i];
//     }
//     seen.set(val, i);


// //     // store current value and its index
// //     seen.set(val, i);
//   }
//   }

// const arr = [1, 2, 3, 4,5];
// const target = 5;
// console.log(loader(arr,target));

/*async function test() {
    console.log(1);
    await console.log(2);
    console.log(3);
}
test();
console.log(4);*/



