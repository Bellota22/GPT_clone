# ChatGPT Clone Project

## Description
This project is a full-stack clone of ChatGPT, featuring a backend built with FastAPI and SQLite database, with an added capability for Google Cloud database integration. The frontend is developed using React.js and styled with Tailwind CSS.

## Getting Started

### Prerequisites
Before starting, ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [Python](https://www.python.org/)
- [FastAPI](https://fastapi.tiangolo.com/)
- [SQLite](https://www.sqlite.org/index.html) or [Google Cloud SQL](https://cloud.google.com/sql)

### Setup
1. **Environment Variables**
   - Navigate to the frontend directory.
   - Create a `.env` file.
   - Add the following content to the `.env` file:
     ```
     VITE_BACKEND_HOST="http://127.0.0.1:8080"
     ```

2. **Initializing the Project**
   - Ensure you are at the same level as the `init.sh` file in your project directory.
   - Run the following command to initialize the project:
     ```
     sh init.sh
     ```


## Usage
Once both the frontend and backend servers are running, you can interact with the ChatGPT clone by opening your web browser and navigating to the address provided by the frontend server (`http://localhost:5173`).

Enjoy the experience of a ChatGPT-like interface!
