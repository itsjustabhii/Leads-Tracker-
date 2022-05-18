let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")


inputBtn.addEventListener("click",function() {
    myLeads.push(inputEl.value)
    console.log(myLeads);
    inputEl.value = ""   //To clear the input field after submitting
    renderLeads()
})


function renderLeads() {
    let listItems = ""
    for(let i = 0; i < myLeads.length; i++) {
        //Add the item to the listItems variable instead of the ulEl.innerHTML
        listItems += `
        <li>
            <a target='_blank' href='${myLeads[i]}'>  
            ${myLeads[i]}</a> 
        </li>
        `               //target='_blank' used to get a blank new pg after clicking
        console.log(listItems)
    }
    
    //Render the listitems inside the unordered list using ulEl.innerHTML
    ulEl.innerHTML = listItems
}












