# VibeStream

VibeStream is a backend application for streaming music. This repository contains all the backend code and configuration for the VibeStream app.

## Table of Contents

- [Project Structure](#project-structure)
- [Installation](#installation)
- [How to Run](#how-to-run)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Project Structure

Here’s an overview of the project structure:

VibeStream/
├── .gitignore # Git ignore file
├── .env # Environment configuration file
├── node_modules/ # Node.js modules (dependencies)
├── package.json # Project metadata and dependencies
├── server.js # Main application server file
├── routes/ # Contains route handling files
│ ├── api.js
├── controllers/ # Logic for handling requests
│ ├── musicController.js
├── models/ # Data models (e.g., User, Playlist)
│ ├── user.js
├── utils/ # Helper functions
│ ├── auth.js
└── README.md # Project documentation


- **`.gitignore`**: Specifies files and directories that Git should ignore.
- **`.env`**: Stores environment variables like API keys, database connections, and other sensitive data. This file is **not pushed to GitHub** for security reasons.
- **`node_modules/`**: Contains installed npm packages (dependencies).
- **`package.json`**: Contains the project metadata (name, version, scripts) and dependencies.
- **`server.js`**: Main entry point of the backend application. It sets up the server and handles incoming requests.
- **`routes/`**: Contains route definitions and endpoint handlers.
- **`controllers/`**: Contains the business logic to handle the functionality for each route.
- **`models/`**: Contains the data models for the application (e.g., User, Playlist).
- **`utils/`**: Contains utility functions such as authentication helpers.

## Installation

### Prerequisites

- **Node.js** and **npm** should be installed on your machine. You can install them from [here](https://nodejs.org/).

### Steps to Set Up Locally

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Arnav-Soney/VibeStream.git
   cd VibeStream
