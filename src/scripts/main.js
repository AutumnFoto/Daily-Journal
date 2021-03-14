import { getEntry } from "./data/dataManager.js";
import { entryList } from "./entry/EntryList.js";
import{NavBar} from "./nav/NavBar.js";

const showEntryList = () => {
  const entryElement = document.querySelector("#entryList");
	getEntry().then((allEntries) => {
		entryElement.innerHTML = entryList(allEntries);
	})
}

const showNavBar = () => {
    //Get a reference to the location on the DOM where the nav will display
    const navElement = document.querySelector("nav");
	navElement.innerHTML = NavBar();
}

const DailyJournalAF = () => {
	showEntryList();
	showNavBar();
}

DailyJournalAF();

