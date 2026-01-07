// https://www.codechef.com/practice/course/greedy-algorithms/INTGRA01/problems/PERMEXIS

function permixis(input, n){
   const sorting =  input.sort((a,b) => b-a);
   console.log(sorting);
   
   for (let i = 0; i < sorting.length-1; i++) {
        const element = Math.abs(sorting[i] - sorting[i+1]);
        if(element > 1){
            return "No"
        }
   }
    
    return "Yes";
}

// const input = [3 ,2 ,2, 3] 
const input = [1 ,5];

const n = input.length;
console.log(permixis(input,n));
