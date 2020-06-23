//const API = {
  //  getJournalEntries: () => {
    //    return fetch("http://localhost:3000/journalEntries")
      //  .then(response => response.json())
    //}
//}


const API = {
    saveJournalEntry: (newEntryObject) => {
        return fetch("put the URL to the API here", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEntryObject)
        })
    }
}

export default API