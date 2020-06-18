const API = {
    saveJournalEntry: (newEntry) => {
        return fetch("http://localhost:3000/journalEntry", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEntry)
        }) .then(response => response.json());
    }
}

export default API
