const disp = document.getElementById("display");

function appendtodisplay(x){


    disp.value += x;
}
function clr(){
    disp.value='';
}

function calc(){
   try{ disp.value = eval(disp.value);
    }
   catch(error){
    disp.value ='ERROR';
}
}