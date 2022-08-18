// let thumbWrapper;
// document.addEventListener("DOMContentLoaded", () => {
//   thumbWrapper = document.getElementsByClassName("rwc-embed__thumb-wrapper");
//   console.log(thumbWrapper);
// });



// for (let index = 0; index < thumbWrapper.length; index++) {
//   const element = thumbWrapper[index];
//   let childNodes = element.childNodes;
//   for (let i = 0; i < childNodes.length; i++) {
//     let outHTML = childNodes[i].outerHTML;
//     if (outHTML.includes("img")) {
//       childNodes[i].addEventListener("click", () => {
//         console.log(childNodes[i].outerHTML);
//         outHTML = `<img src="./images/botold.png" alt="Chat logo">`;
//         childNodes[i].outerHTML = outHTML;
//         console.log(childNodes[i].outerHTML);
//       });
//     }
//   }
// }

let rwcDiv = document.getElementById("rwc");
rwcDiv.addEventListener("click", () => {
  let thumbWrapper = document.getElementsByClassName(
    "rwc-embed__thumb-wrapper"
  );
  for (let index = 0; index < thumbWrapper.length; index++) {
    const element = thumbWrapper[index];
    let childNodes = element.childNodes;
    let outHTML = `<img src="https://files.orsolaas.api.onereach.ai/public/81b9e903-15fa-48dc-9a5e-59483738c4a5/Team_Khizar/Adnan/Icons/bot_img.png" alt="Chat logo">`;
    childNodes[0].outerHTML = outHTML;
  }
});
