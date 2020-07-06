import API from "./data.js";
import makeJournalEntryComponent from "./entryComponent.js"

const entryContainer = document.querySelector(".entryLog")

const renderJournalEntries = () => {
    entryContainer.innerHTML = "";
    API.getJournalEntries()
    .then((journalArray) => {
        journalArray.forEach(item => {
            entryContainer.innerHTML += makeJournalEntryComponent(item);
        })
    })
}

export default renderJournalEntries;