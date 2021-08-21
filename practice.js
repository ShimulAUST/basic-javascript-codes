//string reverse
let a = 'absa';
let newSt = "";
for (let i = a.length - 1; i >= 0; i--) {
    newSt += a[i];
}
console.log(newSt);

//array manipulation
let aa = [1, 2, 5, 3, 6, 8, 9, 4, 2, 5, 1, 55, 66, 88, 44, 22, 111];

aa.sort(function (a, b) {
    return a - b;
})

console.log(aa);
//array search
let arr = [
    'A Smarter Way to Learn JavaScript: The new tech-assisted approach that requires half the effort',
    'Eloquent JavaScript: A Modern Introduction to Programming',
    'JavaScript & JQuery: Interactive Front-End Web Development',
    'avaScript: The Good Parts',
    'Learn JavaScript VISUALLY',
    'JavaScript: The Definitive Guide',
    'Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript',
    'JavaScript for Kids: A Playful Introduction to Programming'
];

let newArray = [];
for (const arrElement of arr) {
    if (arrElement.toLowerCase().includes('JavAScript'.toLowerCase())) {
        newArray.push(arrElement);
    }
}

console.log(newArray);

//palindrome or not

let st = 'abba';
let len = st.length;
let flag = 0;
console.log(len);
for (let i = 0; i < len / 2; i++) {
    if (st[i] != st[st.length - 1 - i]) {
        flag = 0;
    }
    else {
        flag = 1;
    }
}
if (flag == 1) {
    console.log("Palindrome");
}
else {
    console.log("Not a plaindrome");
}
//given integer is palindrome or not

let n = 1001;

console.log(typeof intNumber);
let r;
let sum = 0;
let temp = n;

while (n > 0) {
    r = n % 10;
    sum = (sum * 10) + r;
    console.log(sum);
    n = parseInt(n / 10);
}
if (temp == sum) {
    console.log("Palindrome Number", sum);
}
else {
    console.log("Not a Palindrome Number", sum);
}

//prime number or not
const number = 13;
let isPrime = true;

if (number == 1) {
    console.log('1 is neither a prime number nor composite number');
}
else if (number > 1) {
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }
}
if (isPrime) {
    console.log(number, "is a Prime Number");
}
else {
    console.log(number, "is not a Prime Number");
}
