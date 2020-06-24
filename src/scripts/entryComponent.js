 const makeJournalEntryComponent = (journalEntries) => {
        // Create your own HTML structure for a journal entry
        const journalHTMLRep =  `
       <div>
       <h1>${journalEntries.date}</h1>
        <p>${journalEntries.concept}</p>
        <p>${journalEntries.entry}</p>
        <p>${journalEntries.mood}</p>
        <section id="journalForm">
        <form>
            <button type="edit" id="editJournal">Edit</button>
            <input type="hidden" id="editedId" value="" />
            ...
        </form>    
    
    </section>
        </div>`
        return journalHTMLRep;
    }
export default makeJournalEntryComponent;
