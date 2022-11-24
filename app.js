
// =====================================================================RC======
// ============================1st Method=====================================


const example = document.querySelector("table");
// console.log(example)
let str = '';
const addColorToBox = (ex1) => {

    if(ex1.target.classList.contains("tdd")){
        if(str !== "") str.classList.remove("selected-color");
        str = ex1.target;
        str.classList.add("selected-color");
    }
}

example.addEventListener("click",addColorToBox)


// ===============================2nd==Method===============================

// const example = document.querySelector("table");
// console.log(example)
// const arr1 = [];
// const addColorToBox = (ex1) => {
    // if(ex1.target.classList.contains("tdd")){
    //     if(arr1.length >= 1){
    //         let firstEle =arr1.shift();
    //         firstEle.classList.remove("selected-color");
    //     }
    //     arr1.push(ex1.target);
    //     console.log(ex1.target)
    // }
    // arr1.forEach((el) => {
    //     el.classList.add("selected-color");
    //     console.log(el);
    // })
   
// }

// example.addEventListener("click",addColorToBox)

// ==========================================================

// const row1 = document.querySelector("table")
// const row2 = document.querySelector("table")

// const td= document.querySelectorAll("td")
// console.log("3434")



// const onclicks = (e)=>{
//     if(td.classList.contains("tdd")){
//         td.classList.remove("tdd");
//     }
//     e.target.classList.add("tdd")
    
//     console.log(e.target);
//     // if (e.target.parentNode.parentNode.includes("tdd")){
//     //     e.target.parentNode.parentNode.remove("tdd")
//     // }
   
// };

// const over = (a) =>{
//     a.target.classList.remove("tdd")
// }


// row1.addEventListener("click", onclicks);
// row2.addEventListener("mouseover", over);
