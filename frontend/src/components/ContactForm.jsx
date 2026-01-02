import { useEffect, useState } from "react";

const ContactForm = ({
    onAddContact,
    onUpdateContact,
    editingContact,
    setEditingContact
}) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    useEffect(() => {
        if (editingContact) {
            setFormData(editingContact);
        }
    }, [editingContact]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (editingContact) {
            await onUpdateContact(editingContact._id, formData);
            setEditingContact(null);
        } else {
            await onAddContact(formData);
        }

        setFormData({ name: "", email: "", phone: "", message: "" });
    };

    return (
        <div className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-6">
                {editingContact ? "Edit Contact" : "Add Contact"}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    name="name"
                    placeholder="Name *"
                    value={formData.name}
                    onChange={handleChange}
                    className="block w-full p-3 border rounded-lg"
                />

                <input
                    name="email"
                    placeholder="Email *"
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full p-3 border rounded-lg"
                />

                <input
                    name="phone"
                    placeholder="Phone *"
                    value={formData.phone}
                    onChange={handleChange}
                    className="block w-full p-3 border rounded-lg"
                />

                <textarea
                    name="message"
                    placeholder="Message (optional)"
                    value={formData.message}
                    onChange={handleChange}
                    className="block w-full p-3 border rounded-lg"
                />

                <button
                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
                >
                    {editingContact ? "Update Contact" : "Add Contact"}
                </button>

                {editingContact && (
                    <button
                        type="button"
                        onClick={() => setEditingContact(null)}
                        className="w-full border py-3 rounded-lg"
                    >
                        Cancel
                    </button>
                )}
            </form>
        </div>
    );
};

export default ContactForm;