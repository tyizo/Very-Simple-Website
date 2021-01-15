function myAlert(){
    alert('Soon , it will be better <3')
};

// For Disable Right Click
document.onmouseclick = disableclick;
stats = 'No , You Can Do Inspect';
function disableclick(event){
         if(event.button == 2){
            alert(stats);
            return false;
         }; 
};
