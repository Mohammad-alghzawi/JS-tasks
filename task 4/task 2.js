let container = document.createElement("div");
let paragraph = document.createElement("p");
paragraph.textContent="Hello World !";
container.appendChild(paragraph);

// Add event listener for mouseover
container.addEventListener("mouseover",function()
{
    paragraph.textContent= "Can i help you ?";
}); 


// Add event listener for mouseout
container.addEventListener("mouseout",function()
{
    paragraph.textContent= "Hello World !";
}); 

//styling
container.style.border = "1px solid black ";
container.style.backgroundColor= "yellow";
container.style.textAlign="center";
container.style.width="500px"
container.style.marginLeft="500px"


document.body.appendChild(container);




// let cont=document.getElementById("cont")
// let mhm = document.getElementById("mhm")

// mhm.addEventListener("mouseover",function() {
//     mhm.innerHTML="hello in jordan"
// })

// mhm.addEventListener("mouseout",function() {
//     mhm.innerHTML="hello world"
// })

// cont.style.border="1px black solid"
// cont.style.textAlign="center"