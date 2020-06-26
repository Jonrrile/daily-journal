import API from "./data.js"
import renderJournalEntries from "./entryList.js"
import createJournalEntry from "./createEntry.js";
import createEditButton from "./events.js"
//function that gets your journal entries
API.getJournalEntries().then((response) => renderJournalEntries(response));

//let taco = createJournalEntry("June 24th 2020", "CRUD", "working through journal", "confused")


//console.log(taco);

// save button functionality
const recordJournalEntry = document.querySelector("#save")
recordJournalEntry.addEventListener("click", event => {
    const date = document.querySelector("#journalDate").value
    const concepts = document.querySelector("#concepts").value
    const entry = document.querySelector("#entry").value
    const mood = document.querySelector("#mood").value

    if (date === "" || concepts === "" || entry === "" || mood === "") {
        alert("Please fill out all fields!")
        //this is the part that actually posts the newjournal entry AND THEN gets them all to render them once again in the browser. 
    } else {
        let testEntry = createJournalEntry(date, concepts, entry, mood)
        console.log(testEntry)
        API.saveJournalEntry(testEntry).then(() => {
            API.getJournalEntries().then((response) => renderJournalEntries(response));
        })
    };

})

