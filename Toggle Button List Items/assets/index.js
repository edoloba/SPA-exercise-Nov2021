let body = document.querySelector("body");
let title = document.createElement("h1");
title.textContent = "My Favorite Destination";
let subTitle = document.createElement("h3");
subTitle.textContent = "Toggle the list of my favorite destinations";
title.style.textAlign = "center";
subTitle.style.color = "blue";
subTitle.style.backgroundColor = "aqua";
subTitle.style.padding = "20px";
body.appendChild(title);
body.appendChild(subTitle);

let button = document.querySelector("button");
button.classList.add("event");
body.appendChild(button);
button.style.float = "right";
button.style.marginRight = "180px";
button.style.padding = "30px";
button.style.fontSize = "25px";
// let list = document.querySelectorAll('li');
// body.appendChild(list);
let dropDown = document.querySelector(".dropdown-menu");
dropDown.style.width = "100%";
dropDown.style.fontSize = "50px";
body.appendChild(dropDown);
// button.addEventListener("click", function (e) {
//   document.querySelector(".dropdown-menu").classList.toggle("show");
//   if (!e.target.matches(".btn")) {
//     for (let i = 0; i < dropDown.length; i++) {
//       let openDropDown = dropDown[i];
//       if (openDropDown.classList.contains("show")) {
//         openDropDown.classList.remove("show");
//       }
//     }
//   }
// });
let unbutton = document.querySelector(`.hide`)
unbutton.style.display = `none`;
unbutton.style.float = "right";
unbutton.style.marginRight = "180px";
unbutton.style.padding = "30px";
unbutton.style.fontSize = "25px";
dropDown.appendChild(unbutton);
button.addEventListener(`click`, function(){
    button.style.display = `none`;
    dropDown.style.display = `block`;
    unbutton.style.display = `block`
})
unbutton.addEventListener(`click`, function(){
    unbutton.style.display = `none`
    button.style.display = `block`
    dropDown.style.display = `none`;
})

let para = document.querySelector('p');
para.style.display = 'none';
para.style.background ='green'
dropDown.appendChild(para);
dropDown.addEventListener('click', function(e) {
    para.textContent = `You choose ${e.target.id}`;
    para.style.display = 'block';
    let items = document.querySelectorAll('li');
    items.addEventListener('click', function(e) {
        e.target.classList.add('active');
        e.target.classList.remove('active');
    })
})

