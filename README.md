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
Frontend, React.js (Vite), Tailwind CSS, JavaScript (ES6), useState & useEffect, Backend, Node.js, Express.js, MongoDB (Atlas / Compass), Mongoose

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

Deployment (Vercel + Railway)





⚠️ Known Limitation (Free Tier Cold Start)

This project uses free-tier cloud services for deployment (Railway for backend and MongoDB Atlas for database).

🕒 Cold Start Behavior

When the application is accessed after a period of inactivity, the backend server may be in a sleep state.

On the first request, the server needs time to wake up and reconnect to the database.

This can cause a short delay (usually 10–30 seconds) before data loads.

💡 How It’s Handled

The frontend includes retry logic and shows a friendly message:

“Waking up server, please wait…”

Once the backend is active, the application works normally.

Subsequent requests are fast and stable.

🚀 Production Note

In a production environment, this issue can be avoided by:

Using a paid hosting plan, or

Keeping the backend active with a periodic health check (keep-alive ping).

This limitation is common with free-tier deployments and does not affect the core functionality or correctness of the application.

👨‍💻 Author

Soukarsha Dutta
B.Tech CSE | MERN Developer
📫 Open to internships & opportunities

⭐ If you like this project

Give it a ⭐ on GitHub — it helps a lot!
