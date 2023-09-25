const input = document.querySelector("input#long");
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
var tanni = "km";
select.onchange = function(){
  tanni=this.value;
  main()
}

function main(){
    let get_number= parseInt(input.value);
    let labelArray = new Array(6);
    labelArray[0] = document.querySelector('label#km');
    labelArray[1] = document.querySelector('label#cm');
    labelArray[2] = document.querySelector('label#m');
    labelArray[3] = document.querySelector('label#mm');
    labelArray[4] = document.querySelector('label#inch');
    labelArray[5] = document.querySelector('label#ft');
    
    let kmText, cmText, mText, mmText, inchText, ftText, mileText;
    if (tanni ==="km"){
        var text=[get_number, get_number*100000, get_number*1000, get_number*1000000, get_number*39370, get_number*3280];
    } 
    else if (tanni ==="cm"){
        var text=[get_number*0.00001, get_number, get_number*0.01, get_number*10, get_number*0.394, get_number*0.033];
    } 
    else if (tanni ==="m"){
        var text=[get_number*0.001, get_number*100, get_number, get_number*1000000000, get_number*39.37, get_number*3.281];
    } 
    else if (tanni ==="mm"){
        var text=[get_number*0.000001, get_number*0.1, get_number*0.01, get_number, get_number*0.039, get_number*0.003];
    } 
    else if (tanni ==="inch"){
        var text=[get_number*0.000025, get_number*0.00025, get_number*0.025, get_number*25.4, get_number*1, get_number*0.083];
    } 
    else{
        var text=[get_number*0.000305, get_number*30.48, get_number*0.305, get_number*304.8, get_number*12, get_number];
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