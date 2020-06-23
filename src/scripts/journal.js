import API from "./data.js"
import renderJournalEntries from "./entryList.js"
import createJournalEntry from "./createEntry.js";
import createEditButton from "./events.js"

//API.getJournalEntries().then((response) => renderJournalEntries(response));
let taco = createJournalEntry(6.23, "promises", "We are learning how to edit data", "confused")

API.saveJournalEntry(taco);
console.log(taco);


