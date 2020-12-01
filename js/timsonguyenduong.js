// Tìm số nguyên dương nhỏ nhất sao cho: 1 + 2 + … + n > 10000
document.getElementById('btnSoDuong').onclick = soNguyenDuong;
function soNguyenDuong(){
    var soDuong = document.getElementById('inpSoDuong').value;
    var n = 1; 
    var s = 0;
   while(s < soDuong){
       s += n;
       n++;
       console.log(n);
   }
   document.getElementById('infoSoDuong').innerHTML = 'Số nguyên dương nhỏ nhất là: '+ n;
}