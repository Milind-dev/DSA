
// ---------------------------
// CONFIG (tweak safely here)
// ---------------------------
const config = {
    linearN: 200_000,       // size for O(n)
    nLogN_N: 200_000,       // n used for O(n log n)
    logN_N: 1_000_000,      // n used for O(log n)
    nSquareSide: 2000,      // side length for O(n^2): total ~ n^2 ops (2000^2 = 4M)
    fibRecursiveN: 35,      // recursive fib (exponential) — don't set too large
    fibDpN: 1000000,        // dp fib (linear) — large but fast (no logs)
    showDpSteps: false,     // if true will print dp steps (don't use with large fibDpN)
    fibVerboseN: 30         // n for the verbose fib() (the one that logs each i)
};

// ---------------------------
// HELPER: measure runtime
// ---------------------------
function measure(label, fn) {
    const t0 = performance.now();
    let result;
    try {
        result = fn();
    } catch (err) {
        result = { error: String(err) };
    }
    const t1 = performance.now();
    return { label, ms: (t1 - t0), result };
}

// ---------------------------
// ALGORITHMS (complexities)
// ---------------------------

// O(log n)
function work_logN(n) {
    let count = 0;
    let x = n;
    while (x > 1) {
        x = Math.floor(x / 2);
        count++;
    }
    return count;
}

// O(n)
function work_linearN(n) {
    let s = 0;
    for (let i = 0; i < n; i++) s++;
    return s;
}

// O(n log n)
function work_nLogN(n) {
    // Outer loop n times, inner loop halves each time
    let total = 0;
    for (let i = 0; i < n; i++) {
        let j = n;
        while (j > 1) {
            j = Math.floor(j / 2);
            total++;
        }
    }
    return total;
}

// O(n^2)
function work_nSquare(side) {
    let total = 0;
    for (let i = 0; i < side; i++) {
        for (let j = 0; j < side; j++) {
            total++;
        }
    }
    return total;
}

// Fibonacci - naive recursive (exponential)
function fib_recursive(n) {
    if (n <= 1) return n;
    return fib_recursive(n - 1) + fib_recursive(n - 2);
}

// Fibonacci - DP (linear, optional step logs)
function fib_dp(n, showSteps = false) {
    if (n <= 1) return n;
    const dp = new Array(n + 1);
    dp[0] = 0;
    dp[1] = 1;
    for (let i = 2; i <= n; i++) {
        if (showSteps) console.log("i =", i, "=>", dp[i], dp[i - 1], dp[i - 2]);
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}

// ---------------------------
// RUN MEASUREMENTS (main demo)
// ---------------------------
(function runAll() {
    // Nice colored header in console
    console.log("%c=== Complexity & Fibonacci Performance Demo ===", "color: white; background: #007ACC; padding:6px; font-weight:bold");
    console.log("%cConfig:", "font-weight:bold;"); console.table(config);

    const results = [];

    // log n
    results.push(measure(`O(log n) (n=${config.logN_N})`, () => work_logN(config.logN_N)));

    // linear
    results.push(measure(`O(n) (n=${config.linearN})`, () => work_linearN(config.linearN)));

    // n log n
    results.push(measure(`O(n log n) (n=${config.nLogN_N})`, () => work_nLogN(config.nLogN_N)));

    // n^2
    results.push(measure(`O(n^2) (side=${config.nSquareSide})`, () => work_nSquare(config.nSquareSide)));

    // Fibonacci: DP (no step logs when large)
    results.push(measure(`Fib DP (n=${config.fibDpN})`, () => fib_dp(config.fibDpN, config.showDpSteps)));

    // Fibonacci: recursive (may take long — sensible default used)
    results.push(measure(`Fib Recursive (n=${config.fibRecursiveN})`, () => fib_recursive(config.fibRecursiveN)));

    // Format results for table: ms to nicely rounded
    const table = results.map(r => ({
        'Test': r.label,
        'Time (ms)': Number(r.ms.toFixed(3)),
        'Result (sample)': (typeof r.result === 'object' && r.result !== null && 'error' in r.result) ? r.result.error : r.result
    }));

    console.log("%c--- Summary (ms) ---", "color: white; background: #28A745; padding:4px; font-weight:bold");
    console.table(table);

    console.log("%cNotes:", "font-weight:bold");
    console.log(" - Times depend on your CPU, browser, background tasks.");
    console.log(" - For Fib DP we disabled step logging (showDpSteps=false) because logging 1e6 steps would freeze the console.");
    console.log(" - If you want to compare different sizes, change `config` values and re-run the script.");
})();

// ---------------------------
// YOUR VERBOSE fib(n) + measurement
// (this prints each dp step — keep n small)
// ---------------------------

// Performance measuring helper (single-line output style; reusing measure isn't necessary but using it for ms)
function measureAndLog(label, fn) {
    const t0 = performance.now();
    let result;
    try {
        result = fn();
    } catch (err) {
        result = { error: String(err) };
    }
    const t1 = performance.now();
    console.log(`${label}: ${(t1 - t0).toFixed(5)} ms`);
    return result;
}

// Your verbose fib (prints dp[i] state each iteration)
function fib_verbose(n) {
    const dp = new Array(n + 1);
    dp[0] = 0;
    dp[1] = 1;
    for (let i = 2; i <= n; i++) {
        // This prints the state before updating dp[i]
        console.log("i =", i, "=>", dp[i], dp[i - 1], dp[i - 2]);
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}

// Run the verbose fib with a small n (config.fibVerboseN)
console.log("%c--- Verbose Fibonacci (step-by-step) ---", "color: white; background: #6f42c1; padding:4px; font-weight:bold");
const verboseResult = measureAndLog(`Verbose Fib (n=${config.fibVerboseN})`, () => fib_verbose(config.fibVerboseN));
console.log("Final Result =", verboseResult);





/*

// Performance measuring helper
function measure(label, fn) {
    const start = performance.now();
    const result = fn();
    const end = performance.now();
    console.log(`${label}: ${(end - start).toFixed(5)} ms`);
    return result;
}

// Your Fibonacci DP code
function fib(n) {
       if (n <= 1) {
            return n;
        }
        return fib(n - 1) + fib(n - 2);
}
// Run fib with performance measurement
const answer = measure("Fibonacci DP", () => fib(30));
console.log("Final Result =", answer);
// Fibonacci DP: 19.88650 ms
// Final Result = 832040
*/




/*// Performance measuring helper
function measure(label, fn) {
    const start = performance.now();
    const result = fn();
    const end = performance.now();
    console.log(`${label}: ${(end - start).toFixed(5)} ms`);
    return result;
}

// Your Fibonacci DP code
function fib(n) {
    const dp = new Array(n + 1);
    dp[0] = 0;
    dp[1] = 1;
    for (let i = 2; i <= n; i++) {
        // This will show how dp fills step-by-step
        console.log("i =", i, "=>", dp[i], dp[i - 1], dp[i - 2]);
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}
// Run fib with performance measurement
const answer = measure("Fibonacci DP", () => fib(30));
console.log("Final Result =", answer);*/


// 75.38630 ms
// Final Result = 1.4617811965143821e+44

//
// function fib(n){
//     const dp = new Array(n+1);
//     dp[0] = 0;
//     dp[1] = 1;
//     for (let i=0;i<=n;i++){
//         console.log(dp[i],dp[i-1],dp[i+1])
//     }
//     return dp[n];
// }
//
//
//
// console.log(fib(5)); // 5
/*
function fib(n) {
    const dp = new Array(n + 1);
    dp[0] = 0;
    dp[1] = 1;
    for (let i = 2; i <= n; i++) {
        console.log(dp[i] ,dp[i - 1] , dp[i - 2])
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}
console.log(fib(5)); // 5*/

/*+-------+---------+---------+------------------------+------------------------+
|   i   | dp[i-2] | dp[i-1] | dp[i] before updating  | dp[i] after updating   |
+-------+---------+---------+------------------------+------------------------+
|   2   |    0    |    1    |      undefined         |          1             |
|   3   |    1    |    1    |      undefined         |          2             |
|   4   |    1    |    2    |      undefined         |          3             |
|   5   |    2    |    3    |      undefined         |          5             |
+-------+---------+---------+------------------------+------------------------+*/

