
//import createJournalEntry from "./createEntry";

const createEditButton = document.querySelector("#editJournal");
createEditButton.addEventListener("click", event => {
    if (event.target.id.startsWith("editJournal")) {
        alert("Edit!")
    }
})



    export default createEditButton