/*
const API = {
    getJournalEntries: () => {
        return fetch("http://localhost:3000/journalEntries") 
        .then(response => response.json());
    }
}

export default API;
*/


const API = {
 getJournalEntries () {
    return fetch("http://localhost:3000/journalEntries") // Fetch from the API
    .then(response  => response.json()) 

    }  
}
// Parse as JSON

    /*.then(
        (entries) => {
        // What should happen when we finally have the array?
            journalEntries = entries 
        }
    )
}

*/
export default API;