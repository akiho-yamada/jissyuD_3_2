const input = document.querySelector("input#speed");
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
var tanni = "m/s";
select.onchange = function(){
  tanni=this.value;
  main()
}

function main(){
    let get_number= parseInt(input.value);
    let labelArray = new Array(4);
    labelArray[0] = document.querySelector('label#m');
    labelArray[1] = document.querySelector('label#km');
    labelArray[2] = document.querySelector('label#mph');
    labelArray[3] = document.querySelector('label#knot');
    
    if (tanni ==="m"){
        var text=[get_number, get_number*3.6, get_number*2.237, get_number*1.944];
    } 
    else if (tanni ==="km"){
        var text=[get_number*0.278, get_number, get_number*0.621, get_number*0.54];
    } 
    else if (tanni ==="mph"){
        var text=[get_number*0.447, get_number*1.609, get_number, get_number*0.869];
    } 
    else{
        var text=[get_number*0.514, get_number*1.852, get_number*1.151, get_number];
    } 


    //console.log(text[0]);
    for(i=0; i<4; i++){

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