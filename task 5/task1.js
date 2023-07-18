

function changeColor(){

   let color = document.getElementById('colorbox');
   let colorvalue = color.value;
    
   sessionStorage.setItem('pageColor', colorvalue);
    //sessionStorage.pageColor = colorbox.value;
    document.body.style.background = sessionStorage.getItem('pageColor');
    
}
