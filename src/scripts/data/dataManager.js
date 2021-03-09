export const getEntry = () => {

    return fetch("http://localhost:8088/entry")
    .then(response => response.json())
    .then(data => {
    const sortedByDate = data.sort(
          (currentEntry, nextEntry) =>
              Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
      )
      return sortedByDate
    })
  };