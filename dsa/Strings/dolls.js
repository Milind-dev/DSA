// https://chatgpt.com/g/g-p-692edd2dbb3c81918e3d48968f7cb9ae-dsa/c/6935438e-3e18-8326-94d8-0123739934c0


function loader(dolls){
    let res = 0;
    for(const r of dolls){
        res ^= r;
    }
    return res;
}

const dolls = [1,2,3,2,1];
console.log(loader(dolls))



// your code goes here

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;
/*

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', () => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function main(){
    const numberOfTestCases = parseInt(readLine());
    for(let i=0;i<numberOfTestCases;i++){
        const numberOfDolls = parseInt(readLine());
        let missingDoll = 0;
        for(let i=0;i<numberOfDolls;i++){
            const dollType = parseInt(readLine());
            missingDoll^= dollType;
        }
        console.log(missingDoll)
    }
}*/



