/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntry = (journalObj) => {
    return (`
           <article class="journal-card">
    
        <h2 class = "journal-date">${journalObj.date}</h2>
        <p class= "journal-entry">${journalObj.entry}</p>
        <p class= "journal-concept"> ${journalObj.concept}</p>
        <p class= "journal-mood">${journalObj.mood}</p>
        </section>
    `)
}




