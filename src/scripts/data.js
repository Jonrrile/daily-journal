const API = {
    getJournalEntries: () => {
        return fetch("http://localhost:3000/journalEntries") 
        .then(response => response.json());
    },

    saveJournalEntry: (newEntryObject) => {
        return fetch("http://localhost:3000/journalEntries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEntryObject)
        }).then(response => response.json());

    },

    deleteJournalEntry(id) {
        return fetch(`http://localhost:3000/journalEntries/${id}`,{
            method: "DELETE"
        })
        .then(response => response.json())
    }
}

export default API;
