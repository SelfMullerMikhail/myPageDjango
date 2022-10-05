// "use strict"
// window.addEventListener("DOMContentLoaded", () => {

//     const form = () => {
//         const forms = document.querySelectorAll('form'),
//             inputs = document.querySelectorAll('input')
//     }

//     const postData = async (url, data) => {
//         let res = await fetch(ur, {
//             method: "POST",
//             body: data
//         });
//         return await res.text();
//     }

//     // const clearInputs = () => {
//     //     inputs.forEach(item => {
//     //         item.value = "";
//     //     });
//     // };

//     form.forEach(item =>
//         item.addEventListener("submit", (e) => {
//             e.preventDefault();

//             const formData = new FormData(item);

//             console.log(formData)
//             postData("server.php", formData);

//         }))



//     // form.addEventListener('submit', el => {
//     //     el.preventDefault()
//     //     let formDataInfo = new FormData(form);
//     //     console.log(formDataInfo)
//     // })

// })