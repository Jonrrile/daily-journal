import API from "./data.js"
import renderJournalEntries from "./entryList.js"
import generateJournalEntry from "./createEntry.js"

API.getJournalEntries().then((response) => renderJournalEntries(response));

const recordJournalEntry = document.querySelector("#save")
recordJournalEntry.addEventListener("click", event => {
    const date = document.querySelector("#journalDate").value
    const concepts = document.querySelector("#concepts").value
    const entry = document.querySelector("#entry").value

    let newEntry = generateJournalEntry(date, concepts, entry)
    API.saveJournalEntry(newEntry)
    API.getJournalEntries().then((response) => renderJournalEntries(response));

})

document.querySelector(".entryLog").addEventListener("click", event => {
    if (event.target.id.startsWith("deleteEntry--")) {
        const entryToDelete = event.target.id.split("--")[1]
        console.log(entryToDelete)
        API.deleteJournalEntry(entryToDelete)
        .then(API.getJournalEntries)
        .then(renderJournalEntries)
    }
})