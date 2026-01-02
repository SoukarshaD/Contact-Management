const ContactItem = ({ contact, onDelete, onEdit }) => {
    return (
        <li className="border p-4 rounded-lg flex justify-between items-start hover:shadow">
            <div>
                <p className="font-semibold">{contact.name}</p>
                <p className="text-sm">{contact.email}</p>
                <p className="text-sm">{contact.phone}</p>
                {contact.message && (
                    <p className="text-sm text-gray-600 mt-1">{contact.message}</p>
                )}
            </div>

            <div className="flex gap-3">
                <button
                    onClick={() => onEdit(contact)}
                    className="text-blue-600 text-sm"
                >
                    Edit
                </button>
                <button
                    onClick={() => onDelete(contact._id)}
                    className="text-red-600 text-sm"
                >
                    Delete
                </button>
            </div>
        </li>
    );
};

export default ContactItem;