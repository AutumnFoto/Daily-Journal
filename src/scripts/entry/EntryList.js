import { JournalEntry } from "./JournalEntry.js";

export const entryList = (allEntries) => {
	let entryHTML = "";
		//Loop over the array of posts and for each one, invoke the entry component which returns HTML representation
		for (const entryObject of allEntries) {
		
			entryHTML += JournalEntry(entryObject)
		}
		return entryHTML;
	
}






