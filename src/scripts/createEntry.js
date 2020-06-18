function generateJournalEntry(id, date, concept, entry, mood) {
    const newEntry = {
        id: id, 
        date: date,
        concept: concept,
        entry: entry,
        mood: mood
    }
    return newEntry;
}

export default generateJournalEntry; 