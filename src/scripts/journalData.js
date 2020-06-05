let journalEntry = []

const getJournalEntry = () => {
    return fetch("http://localhost:3000/journalEntry") // Fetch from the API
    .then((httpResponse) => {
        return httpResponse.json()
    }  
    )// Parse as JSON
    
    .then(
        (entries) => {
        // What should happen when we finally have the array?
            journalEntry = entries 
        }
    )
}

