const BASE_URL = "https://contact-management.onrender.com/api/contacts";

// GET all contacts (with optional sorting)
export const getContacts = async (sort = "latest") => {
    const url =
        sort === "oldest"
            ? `${BASE_URL}?sort=oldest`
            : BASE_URL;

    const res = await fetch(url);
    return res.json();
};

// ADD a new contact
export const addContact = async (contactData) => {
    const res = await fetch(BASE_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(contactData)
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.error || "Failed to add contact");
    }

    return data;
};

// UPDATE a contact
export const updateContact = async (id, updatedData) => {
    const res = await fetch(`${BASE_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedData)
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.error || "Failed to update contact");
    }

    return data;
};

// DELETE a contact
export const deleteContact = async (id) => {
    const res = await fetch(`${BASE_URL}/${id}`, {
        method: "DELETE"
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.error || "Failed to delete contact");
    }

    return data;
};