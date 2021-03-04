/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data module component
 */
import { getJournal } from "./JournalData.js";
import {  JournalEntry  } from "./JournalEntry.js";

export const journalList = () => {
    const allJournals = getJournal();
    const DOMLocation = document.querySelector("#journalList");
    let journalRep = "";

    for(const oneJournal of allJournals){
        journalRep += JournalEntry(oneJournal);
    }
    
    DOMLocation.innerHTML = journalRep;
}







// // DOM reference to where all entries will be rendered
// const entryLog = document.querySelector("#entryLog")

// export const EntryListComponent = () => {
//     // Use the journal entry data from the data module component
//     const entries = getJournalEntries()

//     for (const entry of entries) {
//         /*
//             Invoke the component that returns an
//             HTML representation of a single entry
//         */
//         entryLog.innerHTML += 
//     }
// }


// export const getJournal = () => {
//     const allJournal = getEntry();

//     const DOMlocal = document.querySelector("#journal");

//     let journalHTML = "";
//     for (const singleEntry of allJournal) {
//         journalHTML += journalEntry(singleEntry);
//     }
//     console.log("journal html", journalHTML);
//     DOMlocal.innerHTML += journalHTML;
// }
// © 2021 GitHub, Inc.