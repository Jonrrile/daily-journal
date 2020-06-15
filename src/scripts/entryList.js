import makeJournalEntryComponent from "./entryComponent.js"

const renderJournalEntries = () => {
    for (const entry of journalEntry) {
        const journalHTML = makeJournalEntryComponent(entry)

        const journalArticleElement = document.querySelector(".entryLog");
        journalArticleElement.innerHTML += journalHTML
    }

}

export default renderJournalEntries
