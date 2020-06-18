import API from "./data.js"
import renderJournalEntries from "./entryList.js"
import generateJournalEntry from "./createEntry.js"

var click = document.querySelector("#save")

const makeEntry = generateJournalEntry(1, "June 18th", "API", "Today we are learning how to fetch and POST", "Happy")
saveJournalEntry(newEntry);
console.log(makeEntry);

API.getJournalEntries().then(renderJournalEntries)

export default API
