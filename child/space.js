const input = document.querySelector("input#space");
//const select = document.querySelector("select#tanni");
var log = document.getElementById("values");
input.addEventListener("input", main);

// 1000mm
// 1m
// 0.001km
// 39.37inch
// 3.281ft
// 0.001mile 1mile=1609.344m

var select = document.getElementById('tanni');
var tanni = "cm";
select.onchange = function(){
  tanni=this.value;
  main()
}

function main(){
    let get_number= parseInt(input.value);
    let labelArray = new Array(6);
    labelArray[0] = document.querySelector('label#cm');
    labelArray[1] = document.querySelector('label#m');
    labelArray[2] = document.querySelector('label#km');
    labelArray[3] = document.querySelector('label#ha');
    labelArray[4] = document.querySelector('label#inch');
    labelArray[5] = document.querySelector('label#ft');
    
    if (tanni ==="cm"){
        var text=[get_number, get_number*0.001, get_number*0.0001, get_number*0, get_number*0.155, get_number*0.001];
    } 
    else if (tanni ==="m"){
        var text=[get_number*10000, get_number, get_number*0.000001, get_number*0, get_number*1550, get_number*10.76];
    } 
    else if (tanni ==="km"){
        var text=[get_number*10000000000, get_number*1000000, get_number, get_number*100, get_number*39.37, get_number*3.281];
    } 
    else if (tanni ==="ha"){
        var text=[get_number*0.000001, get_number*0.1, get_number*0.01, get_number, get_number*15500031, get_number*10764262];
    } 
    else if (tanni ==="inch"){
        var text=[get_number*6.452, get_number/1550, get_number/39.37, get_number/15500031, get_number*1, get_number*0.007];
    } 
    else{
        var text=[get_number*929, get_number*0.093, get_number/3.281, get_number/10764262, get_number*144, get_number];
    } 

    //console.log(text[0]);
    for(i=0; i<6; i++){

        labelArray[i].innerText=text[i];
    }

}

/**
document.querySelector('input#long').addEventListener("input", () => {
    let get_number= target.value;
    console.log(get_number);
    const cmLabel = document.querySelector('label#km');
    cmLabel.innerText=get_number;
  });
  
*/
  //addEventListener("change", (event) => {});