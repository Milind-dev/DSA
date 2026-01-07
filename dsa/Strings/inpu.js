// your code goes here
process.stdin.setEncoding('utf-8')
let input = ''
process.stdin.on('data',(chunks)=>{
    input = input + chunks
})
process.stdin.on('end',()=>{
    const lines = input.trim().split("\n")
    for(let i=1;i<= +lines[0]*2;i+=2)
    {
        const roku = lines[i+1].split("RR").join("-").split("SS").join("-").split("PP").join("-").split("")
        console.log(roku.length)
    }
})