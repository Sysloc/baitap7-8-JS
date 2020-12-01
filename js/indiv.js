document.getElementById('btnInThe').onclick = inDiv;
function inDiv(){
    for(var i = 0; i < 10; i++){
        if(i %2 == 0){
           var a = document.createElement("div");
           a.style.background = 'Red';
           a.style.width = '100%';
           a.style.height = '10px';
           a.style.margin = '5px'
            document.getElementById('animaDiv').appendChild(a);
        }else{
            var b = document.createElement("div")
            b.style.background = "green";
            b.style.width = '100%';
            b.style.height = '10px';
            b.style.margin = '5px'
            document.getElementById('animaDiv').appendChild(b);
        }
    }
}