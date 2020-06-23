import API from "./data.js"
import renderJournalEntries from "./entryList.js"
import createJournalEntry from "./createEntry.js";
import createEditButton from "./events.js"

API.getJournalEntries().then((response) => renderJournalEntries(response));


