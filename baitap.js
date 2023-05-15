var arr1 = [];
function themSo() {
    // lấy dữ liệu
    var soN = document.getElementById("soN").value * 1;
    // thêm số vào mảng
    arr1.push(soN);
    document.getElementById("nguoiDungNhap").innerHTML = arr1;  
}

function tinhTongSoDuong() {
    var tongSoDuong = 0;
    arr1.forEach(function (item, index) { 
        if ( item > 0) {
            tongSoDuong += item;
        }
    });
    document.getElementById("tongCacSoDuong").innerHTML = tongSoDuong;
}

function demCacSoDuong() {
    var dem = 0;
    arr1.forEach(function (item,index) {
        if (item > 0) {
            dem++;
        }
    } ) ;
    document.getElementById("demCacSoDuong").innerHTML = dem;
}


function timSoNhoNhat () {
    // Các bước xử lí để tìm điểm thấp nhất
    // tạo 1 bienMin, gán cho biến min một giá trị đầu tiên từ mảng sau đó nhớ ép kiểu dữ liệu từ string về number
    // var bienMin = arrDanhSachSo[0].innerHTML * 1;
    // var index = 0;
    // for (var i = 1; i < arrDanhSachSo.length; i++) {
    //     var diem = arrDanhSachSo[i].innerHTML * 1;
    //     if (diem < bienMin) {
    //         bienMin = diem;
    //         index = 1;
    //     }
    // }
    // console.log(bienMin);
    // console.log(index);
    var arr,
  i,
  l,
  min

arr = []
min = Number
for (i = 0, l = arr.length; i < l; i++) {
  min = Math.min(min, arr[i])
}
console.log(min)
}

document.getElementById("timSoNhoNhat").onclick = timSoNhoNhat;