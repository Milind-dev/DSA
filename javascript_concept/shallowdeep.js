

/*class Person {
    constructor(name, dob) {
        this.name = name;
        this.dob = dob;
    }
    greet() { console.log("hi"); }
}

const obj = new Person("Milind", new Date());
const deep = structuredClone(obj);
deep.greet = obj.greet;
deep.greet();*/

/*const obj = {
    name: "Milind",
    dob: new Date(),
    greet() { console.log("hi") }
};


const clone = structuredClone(obj);
clone.greet = obj.greet;

clone.greet(); // hi*/


/*const obj = {
    name: "Milind",
    dob: new Date(),
    greet() { console.log("hi") }
};

const deep = JSON.parse(JSON.stringify(obj));
console.log(deep.dob);
console.log(deep.greet);*/


/*
    const obj = { a: 1, b: { c: 2 } };
    const copy = {...{...obj}};
    copy.b.c  = 19;
    console.log(copy)
    console.log(copy.b.c)*/
/*
    const obj = { a: 1, b: { c: 2 } };
    const copy = {...obj};
    const objassigment = Object.assign({},copy);
    objassigment.b.c = 10;
    console.log(objassigment);*/

/*
    const obj = { a: 1, b: { c: 2 } };
    const copy = {...obj};
    delete copy;
    console.log(copy)
    console.log(obj);
*/

/*
    const obj = { a: 1, b: { c: 2 } };
    const copy = {...obj};
    copy.a = 2;
    copy.b.c = 23;
    copy.a = 23;
    console.log(copy);
    console.log(obj);
*/

/*
    const obj = { a: 1, b: { c: 2 } };
    const copy = {...obj}
    copy.a = 12;
    copy.b = 23;  //you destroy obj now b is 23 and c is not exist. now its primitive
    copy.c = 90;  //
    copy.b.c =89; //type error  because c is not in object
    console.log(copy)
*/

/*    const obj = { a: 1, b: { c: 2 } };
    const copy = {...obj}
    copy.a = 12;
    copy.b = 23;  //you destroy obj now b is 23 and c is not exist. now its primitive
    copy.c = 90;  //
    copy.b.c =89; //type error  because c is not in object
    console.log(copy)
    console.log(obj)
*/
