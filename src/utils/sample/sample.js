// A(n) = A(n-1) + A(n-2)
// A(0) = 0
// A(1) = 1
// A(2) = 1 + 0 -> 1
// A(3) = 2 + 1 -> 1 + 0 + 1 -> 2
// A(4) = 3 + 2 -> 2 + 1 + 1 + 0 -> 1 + 0 + 1 + 1 + 0 -> 3
// A(5) = 5 + 3 -> 3 + 2 + 2 + 1 + 1 + 0 + 1 + 0 -> 1 + 0 + 1 + 1 + 0 + 2 + 1 + 1 + 0 + 1 + 0 -> 5
const fibonacci = (n) => {
    if (n < 2) {
        return n;
    }
    let a = 0; // A(n-2)
    let b = 1; //A(n-1)
    let answer = 0; // A(n) 初期値は0でもいい
    for (let i = 2; i <= n; i++) {
        // A(n) = A(n-1) + A(n-2)
        answer = a + b;
        // A(n-2) = A(n-1) 一つ進む
        a = b;
        // A(n-1) = A(n) 一つ進む
        b = answer;
    }
}

export const yourself = {
    fibonacci: fibonacci
};