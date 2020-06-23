import API from "./data.js"
import renderJournalEntries from "./entryList.js"

API.getJournalEntries().then((response) => renderJournalEntries(response));


const createEditButton = document.querySelector("#editJournal");
createEditButton.addEventListener("click", event => {
    if (event.target.id.startsWith("editJournal")) {
        alert("Edit!")
    }
})

const recordJournalEntry = document.querySelector("#save")
recordJournalEntry.addEventListener("click", event => {
    if (event.target.id.startsWith("save")) {
        alert("Save!")
    }
})