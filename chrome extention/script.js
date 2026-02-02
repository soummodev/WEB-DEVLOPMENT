let myleads = []
//let myleads is a string
//myleads = JSON.parse(myleads)
//myleads.push("www.www")
//myleads = JSON.stringify(myleads)
//localstorage.setItem()
//localstorage.getItem()

const inputel = document.getElementById("input-el")
const ulel = document.getElementById("ul-el")

const inputbtn = document.getElementById("ibtn");
inputbtn.addEventListener("click", function () {
    myleads.push(inputel.value)
    inputel.value = "";
    renderlist()
    
});



function renderlist() {
    let listitem = ""
    for (let i = 0; i < myleads.length; i++){
        listitem += `<li> 
         <a target='_blank'  href='${myleads[i]}'> 
         ${myleads[i]} 
         </a>
         </li>`;
    }
    ulel.innerHTML = listitem;

}

