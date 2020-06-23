const API = {
    getJournalEntries: () => {
        return fetch("http://localhost:3000/journalEntries")
        .then(response => response.json())
    }
}


saveJournalEntry: (newJournalEntry) => {
    return fetch("http://localhost:3000/journalEntries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newJournalEntry)
    }).then(response => response.json());
}


export default API