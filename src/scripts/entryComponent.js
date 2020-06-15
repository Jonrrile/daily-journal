/*
    Purpose: To create, and return, a string template that
    represents a single journal entry object as HTML

    Arguments: journalEntry (object)
*/

const makeJournalEntryComponent = (journalEntry) => {
    // Create your own HTML structure for a journal entry
    `return
 
   <div>
   <h1>${journalEntry.date}</h1>
    <p>${journalEntry.concept}</p>
    <p>${journalEntry.entry}</p>
    <p>${journalEntry.mood}</p>
    </div>`

}

export default makeJournalEntryComponent

/*
Responsible for generating a list of fish HTML
representations, and putting in the browser
*/      


// Invoke the render function