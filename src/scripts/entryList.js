import makeJournalEntryComponent from "./entryComponent.js"

const renderJournalEntries = (journalEntries) => {
    for (const entry of journalEntries) {
        const journalHTML = makeJournalEntryComponent(entry)
        const journalArticleElement = document.querySelector(".entryLog");
        journalArticleElement.innerHTML += journalHTML
    }
}

export default renderJournalEntries;