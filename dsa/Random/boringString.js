// https://www.codechef.com/practice/course/2-star-difficulty-problems/DIFF1600/problems/BORSTR
function longestBoringSubstring(S) {
  let maxRun = 1;
  let currentRun = 1;

  for (let i = 1; i < S.length; i++) {
    if (S[i] === S[i - 1]) {
      currentRun++;
      maxRun = Math.max(maxRun, currentRun);
    } else {
      currentRun = 1;
    }
  }

  return Math.max(0, maxRun - 1);
}
