export const getEntry = () => {

    return fetch("http://localhost:8088/entry")
    .then(reponse => Response.json())
    // .then(parsedResponse => {

    //     return parsedResponse;
    // })
}

export const getUsers = () => {
    return fetch("http://localhost:8088/users")
}

const loggedInUser = {
	id: 1,
	name: "Autumn",
	email: "acarte94@gmail.com"
}

export const getLoggedInUser = () => {
	return loggedInUser;
}