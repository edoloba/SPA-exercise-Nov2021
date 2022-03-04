// The following line makes sure your styles are included in the project. Don't remove this.
// import '../styles/main.scss';
// Import any additional modules you want to include below \/


// \/ All of your javascript should go here \/

// let modal = document.querySelector('.modal');
// let close_modal = document.querySelector('.close')
// let myPromise = new Promise((resolve) => {
//     setTimeout(function() {
//             resolve(
//                 modal.style.display = 'block',
//                 close_modal.addEventListener('click', function() {
//                     modal.style.display = 'none';
//                 })
//             );
//         }, 2000)
// })
// myPromise.then(modal);


// re write it in terms of async and await
const modal = document.getElementById("myModal");
function promiseOfModal() {
    return new Promise((resolve) => {
    setTimeout(function () {
        resolve(modal);
    }, 3000);
});
}

async function awaitCondition() {
    let popUpModal = await promiseOfModal();
    modal.style.display = "block";
    modal.addEventListener("click", () => {
        modal.style.display = "none";
    })
    console.log(popUpModal);
}
promiseOfModal();
// promiseOfModal.then(function(val) {
//     console.log("User has been on the page for 60 seconds");
//     val.style.display = "block";
// })
