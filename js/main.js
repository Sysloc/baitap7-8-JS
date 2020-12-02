function getELE(id){
	return document.getElementById(id);
}
arrayMang = [];
function themMang(){
    var mang = parseFloat(getELE('inpMang').value);
    arrayMang.push(mang);
	console.log(arrayMang);
	getELE('infoMang').innerHTML ='mảng của bạn là: ' + arrayMang;
}
function tongSoDuong(){
	var s = 0;
	var count= 0;
	for (var i = 0; i < arrayMang.length ; i++){
		if(arrayMang[i] > 0){
			s += arrayMang[i];
			count++;
		}
		console.log(s);
		getELE('infoTongDuong').innerHTML = 'Tổng số dương là: ' + s + '<br>'+'<br>' + 'Có ' + count + ' số dương trong mảng';
	}
}

function soNhoNhat(){
	min = arrayMang[0];
	for(var i = 1; i < arrayMang.length; i++){
		if (min > arrayMang[i]){
			min = arrayMang[i];
		}
	}
	getELE('infoSoNhoNhat').innerHTML = 'Số nhỏ nhất trong mảng là: '+ min;
}

function soDuongNho(){
	min = arrayMang[0];
	for(var i = 1; i < arrayMang.length; i++){
		if (min > arrayMang[i]){
			if(arrayMang[i]>0){
				min = arrayMang[i];
			}
		}
	}
	getELE('infoSoDuongNho').innerHTML = 'Số dương nhỏ nhất trong mảng là: '+ min;
}

function soChanCuoiCung(){
	var a = 0;
	for(var i =0; i < arrayMang.length; i++){
		if(arrayMang[i]%2 == 0){
			if(arrayMang[i] > 0){
				a = arrayMang[i];
			}
			
		}
	}
	getELE('infoChanCuoi').innerHTML = 'số chẳn cuối cùng của mảng là: '+ a;
}
function doiCho(){
	var a=parseFloat( getELE('inpViTriA').value);
	var b=parseFloat( getELE('inpViTriB').value);
	doiViTri(a,b);
}

function doiViTri(a,b){
	var viTri = arrayMang[a];
	arrayMang[a]= arrayMang[b];
	arrayMang[b] = viTri;
	getELE('infoDoiCho').innerHTML = 'mảng sau khi đổi vị trí: ' + arrayMang;
}

function sapXep(){
	for(var i = 0; i<arrayMang.length;i++){
		for(var j = i+1; j< arrayMang.length; j++){
			if(arrayMang[i] > arrayMang[j]){
				var temp = arrayMang[i];
				arrayMang[i] = arrayMang[j];
				arrayMang[j] = temp;
			}
		}
	}
	getELE('infoSapXep').innerHTML = 'mảng sau khi sắp xếp lại: '+ arrayMang;
}

/**
 * các nút button thực thi
 */
getELE('btnThemSo').onclick = themMang;
getELE('btnTongDuong').onclick = tongSoDuong;
getELE('btnSoNhoNhat').onclick = soNhoNhat;
getELE('btnSoDuongNho').onclick = soDuongNho;
getELE('btnChanCuoi').onclick = soChanCuoiCung;
getELE('btnDoiCho').onclick = doiCho;
getELE('btnSapXep').onclick = sapXep;
