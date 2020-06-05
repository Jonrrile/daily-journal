getJournalEntry().then(
    () => {
        console.log("inside", journalEntry)
        renderJournalEntries()
    }
)
console.log("outside", journalEntry)