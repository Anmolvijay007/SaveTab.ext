let myLeads=[];
let oldLeads=[];
const inputEl=document.getElementById("input-el");
const inputBtn=document.getElementById("input-btn");
const ulEl=document.getElementById("ul-el"); 
// 1. Store the delete button in a deleteBtn variable
const deleteBtn=document.getElementById("delete-btn");
const tabBtn=document.getElementById("tab-btn")
// Get the leads from the localStorage - PS: JSON.parse()
// Store it in a variable, leadsFromLocalStorage
// Log out the variable
// ["lead1", "lead2"] or null
let leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
console.log(leadsFromLocalStorage)
// 1. Check if leadsFromLocalStorage is truthy
// 2. If so, set myLeads to its value and call renderLeads()

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}
function render(leads){
    let listItems=" ";
    for(let i=0;i<leads.length;i++){
        //ulEl.innerHTML+="<li>"+leads[i]+"</li>";
    
        //const li=document.createElement("li");
        //li.innerHTML=leads[i];
        //ulEl.append(li);
    
        //listItems += "<li><a target='_blank' href='" + leads[i] + "'>" + leads[i] + "</a></li>"
        //template strings/literals
        listItems += `
        <li>
            <a target='_blank' href='${leads[i]}'>
                ${leads[i]}
            </a>
        </li>
    `
    }
    ulEl.innerHTML=listItems;
}

// 2. Listen for double clicks on the delete button (google it!)
// 3. When clicked, clear localStorage, myLeads, and the DOM
deleteBtn.addEventListener("dblclick",function(){
    localStorage.clear();
    myLeads=[];
    render(myLeads);
})
inputBtn.addEventListener("click",function(){
myLeads.push(inputEl.value);
render(myLeads);
inputEl.value='';
// Save the myLeads array to localStorage 
    // PS: remember JSON.stringify()
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    render(myLeads)
    
    // To verify that it works:
    console.log( localStorage.getItem("myLeads") )
})

tabBtn.addEventListener("click",function(){
    //API fetch
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })
})


// falsy values->

// false
// 0
// ""
// null
// undefined
// NaN

//other than above values all are Truthy Values