// let button = document.querySelector('button');
// let unbutton = document.querySelector('.hide');
// let cities = document.querySelector('ul');
// cities.style.display = 'none';
// unbutton.style.display = 'none';
// button.addEventListener('click', function(e) {
//     button.style.display = 'none';
//     cities.style.display = 'block';
//     unbutton.style.display = 'block';
// })
// unbutton.addEventListener('click', function(e) {
//     button.style.display = 'block';
//     cities.style.display = 'none';
//     unbutton.style.display = 'none';
//     para.style.display = 'none';
// })
// let para = document.querySelector('p');
// para.style.display = 'none';
// // list_items.style.width = '100%;'
// let things = [...cities.children];
// cities.addEventListener('click', function(e) {
//     // e.target.style.background = 'aqua';
//     things.forEach(item => {
//         if(item.classList.contains('big-primary')){
//             item.classList.remove('bg-primary');
//             item.classList.remove('text-white');
//         }
//     });
//     e.target.classList.add('bg-primary');
//     e.target.classList.add('text-white');
//     para.style.display ='block';
//     // para.classList.remove('d-none');
//     para.textContent = `You choose ${e.target.id}`;

// })



let list = document.querySelector("#list");
let button = document.querySelector("#button");
let unbutton = document.querySelector('#unbutton');
unbutton.style.display= "none";
button.addEventListener("click", function(){
    unbutton.style.display = "block";
    button.style.display = "none";
    list.style.display = "none";
})
unbutton.addEventListener("click", function(){
    unbutton.style.display = "none";
    button.style.display = "block";
    list.style.display = "block";
})
//
let selected = document.querySelector(".selected")
selected.style.display = "none";
/* document.querySelectorAll('.list').onclick = function() {
    this.classList.toggle('active');
}
 */
let child = list.children;
//console.log(child.length) //5
list.addEventListener("click", function(e){
    selected.textContent = `Your favorite city is ${e.target.textContent}`;
    selected.style.display = "block";
    for ( let i = 0; i < child.length; i++){
        if (child[i].classList.contains("active")){
            child[i].classList.toggle("active")
        }
    }
    e.target.classList.add("active");
    //e.target.classList.toggle("active");
})
let body = document.querySelector("body")
body.addEventListener("click", function(){
    for ( let i = 0; i < child.length; i++){
        if (child[i].classList.contains("active")){
            child[i].classList.toggle("active")
            selected.style.display = "none";
        }
    }
}, true
)