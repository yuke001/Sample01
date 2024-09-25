let form = document.getElementById("form")

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    let fn = document.getElementById("fn").value;
    let data1 = document.getElementById("data1");
    data1.innerHTML=`${fn}`


    let email = document.getElementById("email").value
    let data2 = document.getElementById("data2")
    data2.innerHTML=`${email}`


    let pswd = document.getElementById("pswd").value
    let data3 = document.getElementById("data3")
    data3.innerHTML=`${pswd}`



})