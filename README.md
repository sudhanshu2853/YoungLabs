🚀
This is a simple Express.js application with a frontend that greets users based on their input. It is deployed manually on Vercel without using the CLI.

📌 Features
✔️ Express.js Backend with API
✔️ Static Frontend (HTML, CSS, JavaScript)
✔️ Axios for API Requests
✔️ Fully Responsive UI
✔️ Hosted on Vercel

📁 Project Structure
/younglabs
│── /api
│   ├── server.js      # Express.js server
│── frontend.html      # Frontend UI
│── package.json       # Dependencies
│── vercel.json        # Vercel Deployment Config
│── README.md          # Documentation
│── favicon.png        # Website Icon
🚀 Setup & Run Locally
1️⃣ Clone the Repository
git clone https://github.com/sudhanshu2853/youngLabs.git
cd youngLabs
2️⃣ Install Dependencies
npm install
3️⃣ Run the Server Locally
node api/server.js
or (for automatic restart on file changes)

npx nodemon api/server.js
Your server will now be running at:
t
http://localhost:3000/
🔗 API Endpoints
Method	Endpoint	Description	Example Usage
GET	/api/greet?name=Sudhanshu	Returns a greeting message	http://localhost:3000/api/greet?name=Sudhanshu
Example Response
{
    "message": "Hello, Sudhanshu! Welcome to YoungLabs."
}
