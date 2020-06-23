import API from "./data.js"
import makeJournalEntryComponent from "./entryComponent.js"

let journalEntries = []


const renderJournalEntries = () => {
    for (const entry of journalEntries) {
        const journalHTML = makeJournalEntryComponent(entry)
        const journalArticleElement = document.querySelector(".entryLog");
        journalArticleElement.innerHTML += journalHTML
    }
}
export default renderJournalEntries;
