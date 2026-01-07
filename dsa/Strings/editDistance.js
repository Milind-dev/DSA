function loader(word1,word2){
    const m = word1.length;
    const n = word2.length;
    const dp = Array.from({length: m+1},()=>Array(n+1).fill(0)); //m P* n
    for(let i=0;i<=m;i++){
        dp[i][0] = i;
        console.log("dp[i][0]" , dp[i][0]);
    }
    for(let j=0;j<=n;j++){
        dp[0][j] = j;
        console.log("dp[0][j]" , dp[0][j]);
    }
    for(let i=1;i<=m;i++){
        for(let j=1;j<=n;j++){
            // console.log("word1[i-1]" , word1[i-1],i-1);
            // console.log("word2[j-1]" , word2[j-1],j-1);
            
            if(word1[i-1] === word2[j-1]){
                dp[i][j] = dp[i-1][j-1];
                console.log("dp[i][j]" , dp[i][j]);
                
            }
            else{
                dp[i][j] = Math.min(dp[i-1][j],dp[i][j-1],dp[i-1][j-1]) + 1;
            }
        }
    }   
    return dp[m][n];
}
const word1 = "horse";
const word2 = "ros";
console.log(loader(word1,word2));