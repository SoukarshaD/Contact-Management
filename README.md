📇 Contact Management App (MERN Stack)

A full-stack Contact Management Web Application built using the MERN stack, allowing users to add, view, update, sort, and delete contacts with a clean and responsive UI.

🚀 Features

➕ Add new contacts with validation

✏️ Edit/update existing contacts

🗑️ Delete contacts

🔄 Live UI updates (no page reload)

🔃 Sort contacts (Latest / Oldest)

📱 Fully responsive design

⚠️ Proper error handling & messages

🛠️ Tech Stack
Frontend

React.js (Vite)

Tailwind CSS

JavaScript (ES6)

useState & useEffect

Backend

Node.js

Express.js

MongoDB (Atlas / Compass)

Mongoose

📂 Project Structure
Contact-management-app/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── tailwind.config.js
│   ├── postcss.config.cjs
│   └── vite.config.js
│
└── README.md

🔌 API Endpoints
Method	Endpoint	Description
GET	/api/contacts	Fetch all contacts
POST	/api/contacts	Add new contact
PUT	/api/contacts/:id	Update contact
DELETE	/api/contacts/:id	Delete contact
⚙️ Setup Instructions
1️⃣ Clone the repository
git clone https://github.com/SoukarshaD/contact-management-app.git
cd contact-management-app

2️⃣ Backend Setup
cd backend
npm install
npm run dev


Create a .env file:

PORT=5000
MONGO_URI=your_mongodb_connection_string

3️⃣ Frontend Setup
cd frontend
npm install
npm run dev


Open:

http://localhost:5173

🎯 Learning Outcomes

Practical MERN stack implementation

REST API design

State management in React

Tailwind CSS configuration & debugging

Real-world error handling

Clean component architecture

🧠 Key Highlights

Single form reused for Add & Edit

Centralized API service layer

Proper separation of concerns

Production-style folder structure

Tailwind CSS fully configured and optimized

📌 Future Enhancements

Toast notifications

Delete confirmation modal

Pagination

Authentication (JWT)

Deployment (Vercel + Render)

👨‍💻 Author

Soukarsha Dutta
B.Tech CSE | MERN Developer
📫 Open to internships & opportunities

⭐ If you like this project

Give it a ⭐ on GitHub — it helps a lot!
