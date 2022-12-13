//bai1
function isPrime(a){
    var check = true;
    if (a<=1) return false;
    else if (a>=4)
        for (var i=2; i<=Math.round(Math.sqrt(a)); i++)
            if (a%i==0) return false;
    return true;
}
console.log(isPrime(7));
console.log(isPrime(10));

const obj = {
    name: "Hưng",
    age: 20,
    email: "dth27902@gamil.com"
}

//bai2
function run(a){
    let b = [];
    let i = 0;
    for (let key in a) {
        b[i] = key + ": " + a[key];
        i++;
    }
    return b;
}
console.log(run(obj));

//bai3
//Cho 1 mảng dưới đây
var courses = ['C++', 'Java', 'Javascript'];

//viết hàm addCourse thêm 1 phần tử vào mảng courses
function addCourse(arr, n){
    arr[arr.length] = n;
}
addCourse(courses, 'Go');
console.log(courses) //output: [ 'C++', 'Java', 'Javascript', 'Go' ]

//viết hàm getFirstElement lấy phần tử đầu tiên
function getFirstElement(arr){
    return arr[0];
}
var firstElement = getFirstElement(courses);
console.log(firstElement) //output: C++;

//viết hàm joinArr nối các phần tử thành một chuỗi
function joinArr(arr, k){
    let newArr = arr.join(k);
    return newArr;
}
var result1 = joinArr(courses, ",");
var result2 = joinArr(courses, " * ");

console.log(result1); //output: C++,Java,Javascript,Go
console.log(result2); //output: C++ * Java * Javascript * Go
