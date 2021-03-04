/*
 *   Journal data for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
const journalData = [
    {
        id: 1,
        date: "02/17/2021",
        concept: "Terminal use",
        entry: "Learned how to use the Terminal, learned alot of commands.",
        mood: "Hype",
    },

    {
        id: 2,
        date: "02/18/2021",
        concept: "Github",
        entry: "Learned how to use Github and Git, first practice with flexbox.",
        mood: "Chill",
    },

    {
         id: 3,
        date: "02/19/2021",
        concept: "Github",
        entry: "Learning more about Github and pushing up/ pulling down repos.",
        mood: "Hype",
    },

    {
        id: 4,
        date: "02/20/2021",
        concept: "Group Project- HTML/CSS",
        entry: "Magical Mecurians group project making a travel page with HTML and CSS.",
        mood: "Hype",
    },
    {
        id: 5,
        date: "02/21/2021",
        concept: "Javascript",
        entry: "Intro into Javascript.",
        mood: "Chill",
    },
    {
        id: 6,
        date: "03/1/2021",
        concept: "JS/HTML/CSS",
        entry: "Working on group project, Awesome Apricots, making our first project to be automated javascript to go to the DOM.",
        mood: "Hype",
    },
    {
        id: 7,
        date: "03/3/2021",
        concept: "TJS/HTML/CSS",
        entry: "Project presentations, self assesment- missed 2.",
        mood: "Chill",
    },
]

export const getJournal = () => {
    return journalData
}




/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
// export const getJournalEntries = () => {
//     const sortedByDate = journal.sort(
//         (currentEntry, nextEntry) =>
//             Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
//     )
//     return sortedByDate
// }