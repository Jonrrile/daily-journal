//    Purpose: To create, and return, a string template that
  //  represents a single journal entry object as HTML

    //Arguments: journalEntry (object)


const makeJournalEntryComponent = (singleEntry) => {
    const domElement = `
    <div class="entry__card">
   <h1>${singleEntry.date}</h1>
   <p>${singleEntry.id}</p>
    <p>${singleEntry.concept}</p>
    <p>${singleEntry.entry}</p>
    <p>${singleEntry.mood}</p>
    <button id="deleteEntry--${singleEntry.id}">Delete</button>
    </div>`
    return domElement
    }


export default makeJournalEntryComponent;

/*
Responsible for generating a list of fish HTML
representations, and putting in the browser
*/      


// Invoke the render function