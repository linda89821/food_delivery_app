# Food Delivery App

A simple fullstack food delivery web application with user authentication, cart functionality, and checkout flow.

## Features

- User Signup & Login
- Dashboard with dish listings
- Add to Cart functionality
- Cart page with total price and clear cart
- Checkout flow with Success confirmation
- Responsive UI with Tailwind CSS
- Frontend built with React + Vite
- Backend using Node.js + Express

## Tech Stack

- **Frontend**: React, Vite, Tailwind CSS, React Router
- **Backend**: Node.js, Express
- **State Management**: React Context API

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/food-delivery-app.git
cd food-delivery-app
```

2. Install dependencies for frontend

```bash
cd food-delivery-frontend
npm install
```

3. Install dependencies for backend

```bash
cd ../food-delivery-backend
npm install
```

### Running the App

Start the backend server:

```bash
cd food-delivery-backend
node server.js
```

Start the frontend dev server:

```bash
cd ../food-delivery-frontend
npm run dev
```

Open your browser and go to `http://localhost:5173`.

## Project Structure

```
food-delivery-app/
├── food-delivery-frontend/    # Frontend source
│   ├── src/
│   │   ├── pages/             # Login, Signup, Dashboard, Cart, Success
│   │   ├── components/        # Reusable UI components
│   │   ├── context/           # Cart context for global state
│   │   └── main.jsx           # Entry point
│   ├── index.html
│   └── tailwind.config.js
├── food-delivery-backend/     # Backend source
│   └── server.js              # Express server
└── README.md
```

## TODO (Advanced Ideas)

- Integrate real database (e.g., MongoDB, PostgreSQL)
- Add order history per user
- Add image upload for dishes
- Stripe API integration for real payment
- Admin dashboard for managing dishes

## License

MIT

---

Made with love by Linda