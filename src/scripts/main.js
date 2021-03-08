import { getEntry } from "./data/DataManager.js";
import { EntryList } from "./entry/EntryList.js"


const showEntryList = () => {
  const entryElement = document.querySelector(".entryList");
	getEntry().then((allEntries) => {
		entryElement.innerHTML = EntryList(allEntries);
	})
}


const DailyJournalAF = () => {
	showEntryList();
}

DailyJournalAF();