
/*
    Purpose: To create, and return, a string template that
    represents a single journal entry object as HTML

    Arguments: journalEntry (object)
*/

const makeJournalEntryComponent = (journalEntry) => {
    // Create your own HTML structure for a journal entry
   return `
   <div>
   <h1>${journalEntry.date}</h1>
    <p>${journalEntry.concept}</p>
    <p>${journalEntry.entry}</p>
    <p>${journalEntry.mood}</p>
    </div>`
}

/*
Responsible for generating a list of fish HTML
representations, and putting in the browser
*/      

const renderJournalEntries = () => {
    for (const entry of journalEntry) {
        const journalHTML = makeJournalEntryComponent(entry)

        const journalArticleElement = document.querySelector(".entryLog");
        journalArticleElement.innerHTML += journalHTML
    }

}

// Invoke the render function

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

renderJournalEntries();