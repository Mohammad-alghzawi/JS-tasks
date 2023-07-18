let botton = document.getElementById("click");
let body1 = document.getElementById("body1");

async function mohammad() {
  const response = await fetch("https://api.github.com/users/Mohammad-alghzawi/repos");
  const data = await response.json();
  console.log(data);
  let mhm = "";


botton.onclick = function () {
  // const httjs =JSON.parse(httt.responseText);
  for (let i = 0; i < 5; i++) {
    
    mhm += `
  <tr >
   <td>${data[i].id}</td>
   <td>${data[i].node_id}</td>
   <td>${data[i].url} </td>
   <td>${data[i].full_name}</td>

 </tr>
 <br>`;
  }
  body1.innerHTML = mhm;
};
}
mohammad();
