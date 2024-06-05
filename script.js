let istatus = document.querySelector('h4');
let add = document.querySelector('#add');
let remove = document.querySelector('#remove');

add.addEventListener("click", function(){
    istatus.innerHTML = "Frinds";
    istatus.style.color = "green";
})
remove.addEventListener("click", function(){
    istatus.innerHTML = "Stranger";
    istatus.style.color = "yellow";
})

// let check = 0

// if(check == 0 ){
//     istatus.innerHTML = "Friends";
//     istatus.style.color = "green"
//     add.innerHTML = "Remove"
//     add.style.color = "red"
//     check = 1;
// }
// else{
//     istatus.innerHTML = "Stranger";
//     istatus.style.color = "yellow"
//     add.innerHTML = "add Friend"
//     add.style.color = "green"
//     check = 0;
// }