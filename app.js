
const row1 = document.querySelector("table")
const row2 = document.querySelector("table")


console.log("3434")



const onclicks = (e)=>{
    e.target.classList.add("tdd")
   
};

const over = (a) =>{
    a.target.classList.remove("tdd")
}


// const remove = document.querySelector(".row1")
// const onsecondclick = (b) =>{

//     if(b.target.classList.contains("tdd")==true){
            
//         b.target.classList.remove("tdd")
//     }
// }
// remove.addEventListener("click", onsecondclick)
row1.addEventListener("click",onclicks);
row2.addEventListener("mouseover", over)

