const createJournalEntry = (date, concepts, entry, mood) => {
    const newJournalEntry = {
      "date": date,
      "concepts": concepts,
      "entry": entry,
      "mood": mood
    };
  
    return newJournalEntry;
  };
  
  export default createJournalEntry;