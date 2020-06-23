/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/
import API from "./data.js"
import renderJournalEntries from "./entryList.js"

API.getJournalEntries().then((response) => renderJournalEntries(response));
/*

//import API from "./data.js"
//import renderJournalEntries from "./entryList.js"

//console.log("test")

//import renderJournalEntries from "./entryList.js"

//API.getJournalEntries().then(renderJournalEntries.entryConverter)


/*var click = document.querySelector("#save")

const makeEntry = generateJournalEntry(1, "June 18th", "API", "Today we are learning how to fetch and POST", "Happy")
saveJournalEntry(newEntry);
console.log(makeEntry);

API.getJournalEntries().then(renderJournalEntries)
import API from "./data.js"
import renderJournalEntries from "./entryList.js" */




const createEditButton = document.querySelector("#editJournal");
createEditButton.addEventListener("click", event => {
    if (event.target.id.startsWith("editJournal")) {
        alert("Edit!")
    }
})

  /*
   const getJournalEntries = () => {
       return fetch("http://localhost:3000/journalEntries") // Fetch from the API
       .then((httpResponse) => {
           return httpResponse.json()
       }  
       )// Parse as JSON
   
       .then(
           (entries) => {
           // What should happen when we finally have the array?
               journalEntries = entries 
           }
       )
   }
   




    
    const renderJournalEntries = () => {
        for (const entry of journalEntries) {
            const journalHTML = makeJournalEntryComponent(entry)
            const journalArticleElement = document.querySelector(".entryLog");
            journalArticleElement.innerHTML += journalHTML
        }
    }


    const makeJournalEntryComponent = (journalEntries) => {
        // Create your own HTML structure for a journal entry
       return `
       <div>
       <h1>${journalEntries.date}</h1>
        <p>${journalEntries.concept}</p>
        <p>${journalEntries.entry}</p>
        <p>${journalEntries.mood}</p>
        <section id="journalForm">
        <form>
            <button type="edit" id="editJournal">Edit</button>
            <input type="hidden" id="editedId" value="" />
            ...
        </form>    
    
    </section>
        </div>`
    }

   getJournalEntries().then(
    () => {
        renderJournalEntries()
    }
)
*/