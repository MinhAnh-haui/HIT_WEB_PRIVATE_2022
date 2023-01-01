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


//bài 2
const obj = {
    name: "Hưng",
    age: 20,
    email: "dth27902@gamil.com"
}

function run(a){
    let b = [];
    let i = 0;
    for (let key in a) {
        b[i] = key + ": " + a[key];  //b.push
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
    //arr.push(n)
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
    //return arr.join(k);
}
var result1 = joinArr(courses, ",");
var result2 = joinArr(courses, " * ");

console.log(result1); //output: C++,Java,Javascript,Go
console.log(result2); //output: C++ * Java * Javascript * Go


//bài 4
//Viết hàm tính ra số chữ số lẻ của một số
const CountOdd = (num) => {
    let dem=0;
    while(num>0)
    {
        let a = num%10;
        if (a%2!=0) dem++;
        num = parseInt(num/10);
        //Math.floor(num/10)
    }
    return dem;
    //toString
}
console.log(CountOdd(111112));

//Test
//Input: 12345
//Output: 3

//Output: 11111112
//Output: 7

//Input: 22222222
//Output: 0

// Làm việc với chuỗi


//viết hàm đưa string về array
var str1 = "Hưng, Cương, Tài";
const strToArr = (str, char) => str.split(char); 

console.log(strToArr(", ")) //output: [ 'Hưng', 'Cương', 'Tài' ]

// viết hàm getStr lấy ra tên trong chuỗi str1

//console.log(getStr(str1)) //output: Cương

/*
//bài 5
var str2 = "    Dinh Tan Hung      ";

//từ chuỗi str2 viết hàm getUpperStr và getLowerStr lấy ra chuỗi viết hoa và viết thường
console.log(getUpperStr(str2)) //output : DINH TAN HUNG
console.log(getLowerStr(str2)) //output : dinh tan hung

// Viết hàm chèn 1 chuỗi bất kỳ vào một chuỗi cho trước ở vị trí cụ thể
// Mặc định chèn ở vị trí đầu tiên.


//bài 6
//test
console.log(InsertString('We are doing some exercises.'));
//Output: We are doing some exercises.
console.log(InsertString('We are doing some exercises.','JavaScript '));
//Output: Javascript We are doing some exercises.
console.log(InsertString('We are doing some exercises.','JavaScript ',18));
//Output: We are doing some JavaScript exercises.
*/

/*
//viết hàm chèn chuỗi bất kỳ vào chuỗi cho trước ở vị trí cụ thể
const InsertString = (str1, str2, idx) => {
    if(!str2 && !idx)
    {
        return str1;
    }
    else if (!idx)
}
*/
//idx = 0 null

//đếm kí tự số ký tự # xóa lùi lại 

let str = " #Luo #ng  # Minhhh##  #Anh  #"
str = str.replaceAll("#", "");
console.log(str);