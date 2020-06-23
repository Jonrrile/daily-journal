const createEditButton = document.querySelector("#editJournal");
createEditButton.addEventListener("click", event => {
    if (event.target.id.startsWith("editJournal")) {
        alert("Edit!")
    }
})

/*
const recordJournalEntry = document.querySelector("#save")
recordJournalEntry.addEventListener("click", event => {
    const date = document.querySelector("#journalDate").value
    const concepts = document.querySelector("#concepts").value
    const entry = document.querySelector("#entry").value
    const mood = document.querySelector("#mood").value

    if (date === "" || concepts === "" || entry === "" || mood === "") {
        alert("Please fill out all fields!") 
        else {
            const makeEntry = createJournalEntry(date, concepts, entry, mood)
        API.saveJournalEntry(makeEntry)
        .then(
            () => {
                return API.getJournalEntries()
            })
            .then (() => {
                renderJournalEntries.entryLog(API.journalEntries)
            });
    //if (event.target.id.startsWith("save")) {
      //  alert("Save!")
    */

    export default createEditButton