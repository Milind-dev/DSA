
function loader(input) {
    let freq = {};
    let maxfreq = 0;
    let n = input.length;
    console.log("freqempty",freq)
    for (let x of input) {
        freq[x] = (freq[x] || 0) + 1;
        console.log("freq", freq);
        if(freq[x] > maxfreq){
            maxfreq = freq[x];
            console.log("max" , maxfreq)
        }
    }
    return n  - maxfreq;
}

const input= [1,1,5,2,3,1];
console.log(loader(input))