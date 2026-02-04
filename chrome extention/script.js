let myleads = []
let oldleads = [];
//let myleads is a string
//myleads = JSON.parse(myleads)
//myleads.push("www.www")
//myleads = JSON.stringify(myleads)
//localstorage.setItem()
//localstorage.getItem()
const tab = document.getElementById("saveb")
const dlt = document.getElementById("dbtn")
dlt.addEventListener("dblclick", function() {
    localStorage.clear()
    myleads = []
    renderlist(myleads)
})

const tabs = [
  {
    url: "https://www.youtube.com/",
  },
];
tab.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentwindow: true }, function (tabs) {
           myleads.push(tabs[0].url);
           localStorage.setItem("myleads", JSON.stringify(myleads));
           renderlist(myleads);
    })
 
});
const inputel = document.getElementById("input-el")
const ulel = document.getElementById("ul-el")

const lfls = JSON.parse(localStorage.getItem("myleads"))
if (lfls) {
    myleads = lfls
    renderlist(myleads)
  
}




const inputbtn = document.getElementById("ibtn");
inputbtn.addEventListener("click", function () {
    myleads.push(inputel.value)
    inputel.value = "";
    renderlist(myleads)
    
});



function renderlist(leads) {
    let listitem = ""
    for (let i = 0; i < leads.length; i++){
        listitem += `<li> 
         <a target='_blank'  href='${leads[i]}'> 
         ${leads[i]} 
         </a>
         </li>`;
    }
    ulel.innerHTML = listitem;

}

