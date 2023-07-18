let botton = document.getElementById("click")
let body1 = document.getElementById("body1")
let httt = new XMLHttpRequest();
httt.open("GET","task.json")

botton.onclick = function(){
    let mhm = "";
    const httjs =JSON.parse(httt.responseText);
    for (let i = 0; i<3; i++) {
      mhm +=`
  <tr >
   <td>${httjs.name[i]}</td>
   <td>${httjs.Age[i]}</td>
   <td>${httjs.Major[i]} </td>
   <td>${httjs.university[i]}</td>
   <td>
<img src="${httjs.Image[i]}" alt="flag">
   </td>
 </tr>
 <br>`
 
 
}
body1.innerHTML=mhm;

}
httt.send();

