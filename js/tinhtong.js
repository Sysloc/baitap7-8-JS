/**
 * nhập vào 2 số x, n tính tổng: S(n) = x + x^2 + x^3 + … + x^n;
 */

 document.getElementById('btnTongBinh').onclick = tinhTong;
 function tinhTong(){
    var x = document.getElementById('nhapX').value;
    var n = document.getElementById('nhapN').value;
    var i = 1,t=1,s=0;
    while(i<=n){
        t*=x;
        s+=t;
        i++;
        console.log(s);
    }
    document.getElementById('infoTongBinh').innerHTML = 'Tổng bình phương là: ' + s;
 }