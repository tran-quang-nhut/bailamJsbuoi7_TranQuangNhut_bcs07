console.log("Yamaha Yzf R15 M1!");

// thêm số
var arr = [];

function addNum () {
    var n = document.getElementById("soNguyen").value * 1;

        arr.push(n);
  
    console.log(arr);

    document.querySelector(".bg-success").innerHTML = arr;
}

// tổng số dương
function sumSo () {
    var tong = 0;

    for (i=0; i < arr.length; i++) {
        tong += arr[i];
    }

    console.log(tong);

    document.querySelector(".bg-danger").innerHTML = "tổng các phần tử bằng "+ tong;
}

// đếm số dương
function demSo () {
    var dem = 0;

    for (i = 0; i <arr.length; i++) {
        if (arr[i] > 0) {
            dem++;
        }
    }
    console.log(dem);

    document.querySelector(".bg-success").innerHTML = "Có tất cả " + dem + " số dương.";
}

// tìm số nhỏ nhất
function minSo () {
    console.log(Math.min(...arr));

    document.querySelector(".bg-danger").innerHTML = "số nhỏ nhất trong mảng là số: " + Math.min(...arr);
}

// tìm số dương nhỏ nhất
function minSoDuong () {
    var arrDuong = [];

    for (i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arrDuong.push(arr[i]);
        }
    }

    console.log(arrDuong);

    document.querySelector(".bg-primary").innerHTML = "số dương nhỏ nhất trong mảng là số: " + Math.min(...arrDuong);
}

// tìm số chẵn cuối cùng
function soChanCuoi () {
    var arrChan = [];


    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            arrChan.push(arr[i]);
        }
    }

    console.log(arrChan);

    document.querySelector(".bg-secondary").innerHTML = "Số " + arrChan[arrChan.length - 1] + " là số chẵn cuối cùng ở trong mảng";
}

// đổi chỗ
function hoanDoi () {
    var index1 = document.getElementById("soThu1").value * 1;

    var index2 = document.getElementById("soThu2").value * 1;

    console.log(index1);
    console.log(index2);

    var bienTam = arr[index1];

    arr[index1] = arr[index2];
    arr[index2] = bienTam;

    console.log(arr)

    document.querySelector(".bg-light").innerHTML = "mảng sau khi đổi chỗ phần từ sẽ là: " + arr;
}

// Sắp xếp tăng dần
function compareNumbers(a,b) {
    return a - b;
}

function xepTang () {

    console.log(arr.sort());
    console.log(arr.sort(compareNumbers));

    document.getElementById("tangDan").innerHTML = "mảng sau khi được sắp xếp theo thứ tự tăng dần sẽ là: " + arr.sort(compareNumbers);
}

// Tìm số nguyên tố đầu tiên
