//    Purpose: To create, and return, a string template that
  //  represents a single journal entry object as HTML

    //Arguments: journalEntry (object)


const makeJournalEntryComponent = (singleEntry) => {
    const domElement = `
    <div class="entry__card">
   <h1>${singleEntry.date}</h1>
    <p>${singleEntry.concept}</p>
    <p>${singleEntry.entry}</p>
    <p>${singleEntry.mood}</p>
    <button id="deleteEntry--${singleEntry.id}">Delete</button>
    <button id="editEntry--${singleEntry.id}">Edit</button>
    </div>`
    return domElement
    }


export default makeJournalEntryComponent;
