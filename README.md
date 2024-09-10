<h1>Collaborative Project Management Tool</h1>

<p>A Collaborative Project Management Tool is a unified platform designed to enhance teamwork and streamline project execution. It offers features such as:


<h2>Features</h2>

Task Management: Create, assign, and track tasks with deadlines and priorities.
Project Planning: Visualize the progress of the task through charts.
Collaboration: File sharing, and comments.
Customization: Adaptable with custom fields, templates, and scalable to various project sizes.
The tool improves efficiency, transparency, and communication within teams, making project management smoother and more effective.</p>


<h2>User Requirements</h2>

  <h4>Frontend Requirements</h4>
     <ol>
       <li>React (Vite)</li>
       <li>Redux Toolkit for State Management</li>
       <li>Vite-react</li>
       <li>Tailwind CSS</li>
     </ol>
     
  <h4>Backend Requirements</h4>
    <ol>
      <li>Node.js with Express.js</li>
    </ol>
  <h4>Database Requirements</h4>
   <ol>
      <li> MongoDB for efficient and scalable data storage.</li>
    </ol>

<h2>Setting Up MongoDB</h2>
Follow these steps to set up MongoDB on your system:

1. Download and Install MongoDB
  Download: Go to the MongoDB Community Download Page and choose the version for your operating system.
  Install:
  Windows: Run the installer and follow the setup wizard.
  macOS: Use Homebrew: brew tap mongodb/brew and brew install mongodb-community.

2. Start MongoDB
  Windows: Start MongoDB as a service or manually from the command line with mongod.
  macOS/Linux: Run mongod in the terminal to start the MongoDB server. Use sudo if needed for permissions.

3. Verify Installation
  Open a terminal and run mongo to start the MongoDB shell.
  Check the MongoDB version with db.version() to ensure it’s running correctly.

4. Connect to MongoDB
  Use the mongo shell command or a GUI tool like MongoDB Compass to connect.

5. Create Databases and Collections
  In the MongoDB shell, create databases and collections as needed.

6. Secure MongoDB
  Firewall: Ensure MongoDB ports are secured.

For more details, refer to the <a href = "https://www.mongodb.com/docs/manual/">MongoDB Documentation.</a>


<h2>Steps to run server</h2>
  <ol>
    <li>Open the project in any editor of choice.</li>
    <li>Navigate into the server directory cd server.</li>
    <li>Run npm i or npm install to install the packages.</li>
  <!--   add "type":"module" in pakeckage.json for import syntax use in backend -->
    <li>Run npm start to start the server.</li>
  </ol>

If configured correctly, you should see a message indicating that the server is running successfully and Database Connected.


<h2>Environment variables</h2>
First, create the environment variables file .env in the client folder. The .env file contains the following environment variables:

- VITE_APP_BASE_URL = http://localhost:{port-number} #Note: Change the port number to your port number.
- VITE_APP_FIREBASE_API_KEY = Firebase api key


<h2>Steps to run client</h2>
  <ol>
    <li>Navigate into the client directory cd client.</li>
    <li>Run npm i or npm install to install the packages.</li>
    <li>Run npm start to run the app on http://localhost:3000.</li>
    <li>Open [http://localhost:{port-number}](http://localhost:{port-number}) to view it in your browser.</li>
  </ol>
