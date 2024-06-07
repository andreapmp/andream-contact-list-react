const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			// changeColor: (index, color) => {
			// 	//get the store
			// 	const store = getStore();

			// 	//we have to loop the entire demo array to look for the respective index
			// 	//and change its color
			// 	const demo = store.demo.map((elm, i) => {
			// 		if (i === index) elm.background = color;
			// 		return elm;
			// 	});

			// 	//reset the global store
			// 	setStore({ demo: demo });
			// }

			// GET Single Agenda
			loadAgendaContacts: async () => {
				const response = await fetch("https://playground.4geeks.com/contact/agendas/andream/contacts");
				if (!response.ok) {
					throw new Error(response.status, response.statusText)
				}
				const data = await response.json();
				setStore ({contacts: data.contacts});
			},
			// Post new contacts through the API
			createNewContact: async (newContact) => {
				const response = await fetch("https://playground.4geeks.com/contact/agendas/andream/contacts", {
					method: "POST",
					body: JSON.stringify(newContact),
					headers: {
						'Content-type': 'application/json'
					}
				});
				if(!response.ok) {
					throw new Error(response.status, response.statusText)
				}
				const data = await response.json();
				return data;
			},
			// Put (update) contact through the API
			updateContact: async (contactId, updatedContact) => {
				const response = await fetch(`https://playground.4geeks.com/contact/agendas/andream/contacts/${contactId}`, {
					method: "PUT",
					body: JSON.stringify(updatedContact),
					headers: {
						'Content-type': 'application/json'
					}
				});
				if(!response.ok) {
					throw new Error(response.status, response.statusText);
				}
				const data = await response.json();
				const store = getStore();
				const editedContact = store.contacts.map(contact =>
					contact.id === parseInt(contactId) ? data : contact
				);
				setStore({ contacts: editedContact });
			},
			// Delete contacts through the API
			deleteContact: async (contactId) => {
				const response = await fetch(`https://playground.4geeks.com/contact/agendas/andream/contacts/${contactId}`, {
					method: "DELETE",
				});
				if (!response.ok) {
					throw new Error(response.status, response.statusText)
				}
				getActions().loadAgendaContacts();
			}
		}
	};
};

export default getState;
