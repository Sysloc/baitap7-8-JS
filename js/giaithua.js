document.getElementById('btnGiaiThua').onclick = giaiThua;
function giaiThua(){
    var giaiThua = 1;
    var n = document.getElementById('nhapGiaiThua').value;
    for(var i=1;i<=n;i++){
        giaiThua *=i;
    }
    console.log (giaiThua);
    document.getElementById('infoGiaiThua').innerHTML = 'Giai thừa là: '+ giaiThua;
}