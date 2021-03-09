
export const JournalEntry = (journalObj) => {
    return (`
    <section class="journal-card">

        <h2 class = "journal-date">${journalObj.date}</h2>
        <div class= "journal-entry">Description: ${journalObj.description}</div>
        <div lass= "journal-concept"> Concept: ${journalObj.concept}</div>
        <div class= "journal-mood">Mood: ${journalObj.mood}</div>
        <img class="journal-image" src="${journalObj.imageURL}" />
        </section>
    `)
}




