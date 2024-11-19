
# H2O Project

A full-stack project with separate folders for the frontend and backend. This README provides detailed steps for setting up the project on your local machine using Visual Studio Code.

---

## Table of Contents

- [File Structure](#file-structure)
- [Prerequisites](#prerequisites)
- [Setup Instructions](#setup-instructions)
  - [Clone the Repository](#clone-the-repository)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Running the Project](#running-the-project)
- [Additional Notes](#additional-notes)

---

## File Structure

The repository is organized as follows:

project-folder/ ├── frontend/ ├── backend/



---

## Prerequisites

Ensure you have the following tools installed on your computer:

### 1. Node.js Installation

- Download and install Node.js (v14+ recommended) by following [this video guide](https://youtu.be/TdzIb4Wfao0?si=H-98CTP4f3H4FbKk).
- Verify the installation using the terminal:
  ```bash
  node -v
  npm -v


### 2. MongoDB Compass Installation

Download and install MongoDB Compass, a GUI tool for interacting with MongoDB databases. (https://www.mongodb.com/products/tools/compass)
Follow the installation steps provided on the official MongoDB website.



### 3. Visual Studio Code

Download and install Visual Studio Code, the recommended IDE for this project. (https://code.visualstudio.com/)



---

## Setup Instructions

### 1. Clone the Repository

1. Open Visual Studio Code.  
2. Open the terminal (`Ctrl+` or View > Terminal).  
3. Clone the repository using the following command:
   ```bash
   git clone <repository-url>

### 2. Backend Setup

1. Navigate to the `backend` folder:
   ```bash
   cd backend

2. Initialize a Node.js project in the backend folder:
   ```bash
   npm init -y

3. Install the necessary dependencies:
   ```bash
   npm install express mongoose cors nodemon dotenv

### 3. Frontend Setup

1. Navigate to the frontend folder:
   ```bash
   cd ../frontend

2. To install the dependencies for the frontend folder
   ```bash
   npm install
