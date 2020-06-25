const API = {
    getJournalEntries: () => {
        return fetch("http://localhost:3000/journalEntries")
        .then(response => response.json())
    },
   
    saveJournalEntry: (newEntryObject) => {
        return fetch("http://localhost:3000/journalEntries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEntryObject)
        })
    }
}
export default API; 