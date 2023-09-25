const input = document.querySelector("input#temp");
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
var tanni = "c";
select.onchange = function(){
  tanni=this.value;
  main()
}

function main(){
    let get_number= parseInt(input.value);
    let labelArray = new Array(3);
    labelArray[0] = document.querySelector('label#c');
    labelArray[1] = document.querySelector('label#f');
    labelArray[2] = document.querySelector('label#k');
    
    if (tanni ==="c"){
        var text=[get_number, get_number*1.8+32, get_number+273.15];
    } 
    else if (tanni ==="f"){
        var text=[(get_number-32)/1.8, get_number, (get_number-32)/1.8+273.15];
    } 
    else{
        var text=[get_number-273.15, (get_number-273.15)*1.8+32, get_number];
    } 


    //console.log(text[0]);
    for(i=0; i<3; i++){

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