let myleads = []
const inputel = document.getElementById("input-el")
const ulel = document.getElementById("ul-el")

const inputbtn = document.getElementById("ibtn");
inputbtn.addEventListener("click", function () {
    myleads.push(inputel.value)
    renderlist()
});
function renderlist() {
    let listitem = "";
    for (let i = 0; i < myleads.length; i++) {
      listitem += "<li>" + myleads[i] + "</li>";
    }
    ulel.innerHTML = listitem;
    
}
