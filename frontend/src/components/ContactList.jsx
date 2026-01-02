import ContactItem from "./ContactItem";

const ContactList = ({ contacts, onDelete, onEdit, sort, setSort }) => {
    return (
        <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">Contacts</h2>

                <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="border p-2 rounded"
                >
                    <option value="latest">Latest</option>
                    <option value="oldest">Oldest</option>
                </select>
            </div>

            {contacts.length === 0 ? (
                <p className="text-gray-500">No contacts found</p>
            ) : (
                <ul className="space-y-4">
                    {contacts.map((contact) => (
                        <ContactItem
                            key={contact._id}
                            contact={contact}
                            onDelete={onDelete}
                            onEdit={onEdit}
                        />
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ContactList;