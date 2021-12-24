let myLeads = [];
/* working with JSON*/
//myLeads = `["www.myLeads.com"]`;
/* making into JSON*/
///myLeads = JSON.parse(myLeads);
/*making into string*/
//  myLeads = JSON.stringify(myLeads)
//myLeads.push("www.joeyEats.com");
//console.log(myLeads);

/* practicing with JSONs*/
/*
let myLeads2 = `["www.hamburgers.com"]`;
myLeads2 = JSON.parse(myLeads2);
myLeads2.push("www.weiners.cun");
myLeads2 = JSON.stringify(myLeads2);
console.log(typeof myLeads2);
console.log("Leads2: %s", myLeads2);
console.log()
*/

/*
                                        TRUTHY VS FALSE VALUES

                                                FALSY

                                                NaN
                                                null
                                                0
                                                ""
                                                undefined
                                                false

 */

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
const tabBtn = document.getElementById("tab-btn");


if(leadsFromLocalStorage){
    myLeads =leadsFromLocalStorage
    render(myLeads);
}

/* Save Button click*/
inputBtn.addEventListener("click", function(){
    //myLeads = JSON.parse(localStorage.getItem("myLeads"));
    if(inputEl.value){
        myLeads.push(inputEl.value);
    }
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(JSON.parse(localStorage.getItem("myLeads")));
})



deleteBtn.addEventListener("click", function(){
    localStorage.clear();
    myLeads=[];
    render(myLeads);
})

tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        render(JSON.parse(localStorage.getItem("myLeads")));
    })
})


function render(leads){
    var listItems = "";
    for(let i = 0; i < leads.length; i++){
        /* Method 1*/
        //ulEl.innerHTML += "<li>"+myLeads[i]+"</li>";

        /* Method 2 */
        // const li = document.createElement("li");
        // li.textContent = myLeads[i];
        // ulEl.append(li);

        /* Normal Version*/
        //listItems += '<li> <a href="'+myLeads[i]+'" target="_blank">' +myLeads[i]+"</a></li>";

        /* Template String version*/
        listItems += `<li>
                            <a target="_blank" href='${leads[i]}'> 
                                ${leads[i]}
                            </a>
                       </li>
                    `
    }
    ulEl.innerHTML = listItems;
}


