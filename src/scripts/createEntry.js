function generateJournalEntry(date, concept, entry, mood) {
    const newEntry = {
        date: date,
        concept: concept,
        entry: entry,
        mood: mood
    }
    return newEntry;
}

export default generateJournalEntry; 
