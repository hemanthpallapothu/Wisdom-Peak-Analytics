# User Directory Project

## Project Setup and Initialization

### 1. Set Up the Project Directory:
1. Create a new directory for your project and navigate into it.
2. Initialize a new React project using Create React App:
   ```bash
   npx create-react-app user-directory
   ```
3. Navigate into the project directory:
   ```bash
   cd user-directory
   ```

### 2. Install Necessary Dependencies:
- **React Router for navigation:**
   ```bash
   npm install react-router-dom
   ```

- **State Management:**
   - Using React Context API (Builtin, no installation needed).

- **Styling:**
   - Install Styled Components:
     ```bash
     npm install styled-components
     ```

### 3. Bonus Features:
- Implemented a dark/light theme toggle using React Context API and styled-components.

---

## Steps to Run the Project Locally

1. Clone the repository from GitHub:
   ```bash
   git clone https://github.com/your-username/user-directory.git
   ```

2. Navigate into the project directory:
   ```bash
   cd user-directory
   ```

3. Install all the necessary dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000` to view the application.

---

## Features Implemented

### 1. Home Page:
- Fetches and displays a list of users from `https://jsonplaceholder.typicode.com/users`.
- Displays user details including name, email, and city.
- Search functionality to filter users by name.
- Sorting functionality (A-Z, Z-A) for the user list.
- Clicking on a user navigates to their detailed page.

### 2. User Detail Page:
- Displays full user details including name, email, phone, company name, and website.
- Includes a "Go Back" button to return to the home page.

### 3. State Management:
- Utilized React Context API for managing global state and user data.

### 4. Error Handling and Loading States:
- Loading spinner displayed while fetching data.
- Error messages shown if the data fetch fails.

### 5. Styling:
- Used styled-components for dynamic styling.
- Ensured responsive design for mobile and desktop devices.

### 6. Bonus Features:
- Implemented a dark/light theme toggle using React Context API and styled-components.

---

## Deployment

### Deploying to Vercel:
1. Initialize a Git repository and commit your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```
2. Push the repository to GitHub.
3. Link your GitHub repository to your Vercel account.
4. Import the project into Vercel and configure deployment settings.

---

## Additional Notes
- **Bonus Features Implemented:**
  - Dark/light theme toggle.
  - Responsive design for both desktop and mobile.

- **State Management:** Used React Context API for global state management.

- **Styling:** Used styled-components for dynamic styling.

---

This project is now ready for deployment and further iterations. Great work implementing the features and ensuring a smooth user experience!

