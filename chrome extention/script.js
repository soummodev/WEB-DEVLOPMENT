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
    url: "https://www.bing.com/ck/a?!&&p=0db1b7cd9ccde335a92305bf504953e5334b0ccc89813e5654976135fa0df626JmltdHM9MTc3MDA3NjgwMA&ptn=3&ver=2&hsh=4&fclid=3b7333bf-feeb-6a1c-03a0-25adff596bea&psq=xhamster&u=a1aHR0cHM6Ly94aGFtc3Rlci5jb20vY2F0ZWdvcmllcw",
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

