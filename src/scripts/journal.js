/*
import API from "./data.js"
import renderJournalEntries from "./entryList.js"

API.getJournalEntries().then(renderJournalEntries.entryConverter)


/*var click = document.querySelector("#save")

const makeEntry = generateJournalEntry(1, "June 18th", "API", "Today we are learning how to fetch and POST", "Happy")
saveJournalEntry(newEntry);
console.log(makeEntry);

API.getJournalEntries().then(renderJournalEntries)
import API from "./data.js"
import renderJournalEntries from "./entryList.js" */

/*
const journalEntries = [
    {
        date: "June 2nd 2020",
        concept: "JavaScript Objects",
        entry: "Today we learned about automating HTML entries utilizing JavaScript",
        mood: "Confused"
    },
    
    {
        date: "June 2nd 2020",
        concept: "JavaScript Objects",
        entry: "Today we learned about automating HTML entries utilizing JavaScript",
        mood: "Confused"
    
    
    },
    
    {
        date: "June 3rd 2020",
        concept: "JavaScript Functions",
        entry: "Learning a little  more but still very confused about functions",
        mood: "hopeful?"
    }
    ]
    */
   let journalEntries = []

   const getJournalEntries = () => {
       return fetch("http://localhost:3000/journalEntries") // Fetch from the API
       .then((httpResponse) => {
           return httpResponse.json()
       }  
       )// Parse as JSON
   
       .then(
           (entries) => {
           // What should happen when we finally have the array?
               journalEntries = entries 
           }
       )
   }
   




    const renderJournalEntries = () => {
        for (const entry of journalEntries) {
            const journalHTML = makeJournalEntryComponent(entry)
            const journalArticleElement = document.querySelector(".entryLog");
            journalArticleElement.innerHTML += journalHTML
        }
    }


    const makeJournalEntryComponent = (journalEntries) => {
        // Create your own HTML structure for a journal entry
       return `
       <div>
       <h1>${journalEntries.date}</h1>
        <p>${journalEntries.concept}</p>
        <p>${journalEntries.entry}</p>
        <p>${journalEntries.mood}</p>
        </div>`
    }
    /*
    Responsible for generating a list of fish HTML
    representations, and putting in the browser
    */      
   
   getJournalEntries().then(
    () => {
        renderJournalEntries()
    }
)
