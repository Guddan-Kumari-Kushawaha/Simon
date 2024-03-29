let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function(){
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delBtn = document.createElement("button");
    delBtn.innerText="delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);
    ul.appendChild(item);
    // console.log(inp.value);      it is for console
    inp.value =null;
});

ul.addEventListener("click", function(event){
   if(event.target.nodeName=="BUTTON"){
    let listItem =event.target.parentElement;
    listItem.remove();
    // console.log("delete")
   }
    else{
        console.log("not deleted");
    }
})

// let delBtns = document.querySelectorAll(".delete");
// for(delBtn of delBtns){
//     delBtn.addEventListener("click" ,function(){
//         // console.log("element deleted");
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// }