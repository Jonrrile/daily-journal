/*
    Purpose: To create, and return, a string template that
    represents a single journal entry object as HTML

    Arguments: journalEntry (object)


const makeJournalEntryComponent = {
    journalEntry (singleEntry) {
    // Create your own HTML structure for a journal entry
    return`
    <div>
   <h1>${singleEntry.date}</h1>
    <p>${singleEntry.concept}</p>
    <p>${singleEntry.entry}</p>
    <p>${singleEntry.mood}</p>
    </div>`
    }
}

export default makeJournalEntryComponent;

/*
Responsible for generating a list of fish HTML
representations, and putting in the browser
*/      


// Invoke the render function