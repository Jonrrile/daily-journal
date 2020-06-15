const API = {
    getJournalEntries () {
        return fetch("http://localhost:3000/journalEntry")
            .then(response => response.json())
    }
}

export default API;