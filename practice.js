let a1 = document.getElementById("a1");

a1.addEventListener("click", () => {
  let c1 = document.getElementById("c1");
  a1.style.position = "relative";
  a1.style.transform = "translateX(1120px)";
  a1.style.transition="3s"
  

  setTimeout(()=>{
    // c1.style.backgroundColor="red"
  
    c1.style.backgroundSize="cover"
    c1.style.backgroundImage="url('rat.png')"
   
    

  },3000)

  
})


let a2 = document.getElementById("a2");

a2.addEventListener("click", () => {
  let c2 = document.getElementById("c2");
  a2.style.position = "relative";
  a2.style.transform = "translateX(1180px)";
  a2.style.transition="3s"

  setTimeout(()=>{
    c2.style.backgroundColor="green"
  },3000)

  
})

let a3 = document.getElementById("a3");3
a3.addEventListener("click", () => {
  let c3 = document.getElementById("c3");
  a3.style.position = "relative";
  a3.style.transform = "translateX(1180px)";
  a3.style.transition="3s"


  setTimeout(()=>{
    c3.style.backgroundColor="deeppink"
  },3000)

  
})


