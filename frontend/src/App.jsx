import { useEffect, useState } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import {
  getContacts,
  addContact,
  deleteContact,
  updateContact
} from "./services/api";

function App() {
  const [contacts, setContacts] = useState([]);
  const [sort, setSort] = useState("latest");
  const [error, setError] = useState("");
  const [editingContact, setEditingContact] = useState(null);

  // Fetch contacts from backend
  const fetchContacts = async (sortType = sort, retry = 0) => {
  try {
    const data = await getContacts(sortType);
    setContacts(data);
    setError("");
  } catch {
    if (retry < 3) {
      setError("Waking up server, please wait…");
      setTimeout(() => fetchContacts(sortType, retry + 1), 3000);
    } else {
      setError("Failed to load contacts");
    }
  }
};

  // Add new contact
  const handleAddContact = async (contactData) => {
    try {
      await addContact(contactData);
      fetchContacts(); // live refresh
    } catch (err) {
      throw err;
    }
  };

  // Update contact
  const handleUpdateContact = async (id, updatedData) => {
    try {
      const updated = await updateContact(id, updatedData);
      setContacts((prev) =>
        prev.map((c) => (c._id === id ? updated.contact : c))
      );
      setEditingContact(null);
    } catch (err) {
      setError(err.message || "Failed to update contact");
    }
  };

  // Delete contact
  const handleDeleteContact = async (id) => {
    try {
      await deleteContact(id);
      setContacts((prev) =>
        prev.filter((contact) => contact._id !== id)
      );
    } catch {
      setError("Failed to delete contact");
    }
  };

  // Load contacts on page load & sort change
  useEffect(() => {
    fetchContacts();
  }, [sort]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Contact Management App
      </h1>

      {error && (
        <p className="text-red-600 text-center mb-6">{error}</p>
      )}

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <ContactForm
          onAddContact={handleAddContact}
          onUpdateContact={handleUpdateContact}
          editingContact={editingContact}
          setEditingContact={setEditingContact}
        />

        <ContactList
          contacts={contacts}
          onDelete={handleDeleteContact}
          onEdit={setEditingContact}
          sort={sort}
          setSort={setSort}
        />
      </div>
    </div>
  );

}

export default App;