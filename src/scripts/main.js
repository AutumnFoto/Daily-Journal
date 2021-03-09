import { getEntry } from "./data/dataManager.js";
import { entryList } from "./entry/EntryList.js";


const showEntryList = () => {
  const entryElement = document.querySelector("#entryList");
	getEntry().then((allEntries) => {
		entryElement.innerHTML = entryList(allEntries);
	})
}


const DailyJournalAF = () => {
	showEntryList();
}

DailyJournalAF();

