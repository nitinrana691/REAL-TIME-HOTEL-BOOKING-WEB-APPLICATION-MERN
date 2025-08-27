# REAL-TIME HOTEL BOOKING WEB APPLICATION (MERN)

A full-stack, real-time hotel booking web application built using the MERN (MongoDB, Express.js, React, Node.js) stack. This project provides a platform for users to search, book, and manage hotel reservations with real-time updates and a seamless user experience.

## Features

- **User Authentication**: Secure sign-up, login, and logout functionality.
- **Hotel Search & Filter**: Search hotels by location, date, facilities, price range, and more.
- **Real-Time Booking**: Live availability updates and instant booking confirmation.
- **Booking Management**: View, modify, and cancel bookings.
- **Admin Portal**: Dedicated portal for administrators to manage hotels, rooms, users, and bookings, view analytics, and perform system operations.
- **Admin Dashboard**: Hotel and room management, bookings overview, analytics.
- **Responsive UI**: Mobile-friendly and modern user interface built with React.
- **Payment Integration**: Secure online payment for reservations.
- **User Reviews & Ratings**: Users can leave feedback and rate their stay.
- **Notifications**: Real-time notifications for bookings and cancellations.

## Tech Stack

- **Frontend**: React.js, Redux, Tailwind CSS (or Bootstrap)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (with Mongoose)
- **Authentication**: JWT (JSON Web Token)
- **Real-Time Updates**: Socket.io (or similar)
- **Payments**: Stripe API (or similar)
- **Deployment**: Vercel/Netlify (Frontend), Render/Heroku/AWS (Backend), MongoDB Atlas

## Getting Started

### Prerequisites

- Node.js & npm
- MongoDB (local or Atlas account)
- Stripe API keys (if using payments)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/nitinrana691/REAL-TIME-HOTEL-BOOKING-WEB-APPLICATION-MERN.git
   cd REAL-TIME-HOTEL-BOOKING-WEB-APPLICATION-MERN
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   npm run dev
   ```

3. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   npm start
   ```

4. **Environment Variables**

   Create a `.env` file in both `backend` and `frontend` directories with necessary configuration such as database URI, JWT secret, API keys, etc.

## Folder Structure

```
REAL-TIME-HOTEL-BOOKING-WEB-APPLICATION-MERN/
│
├── backend/        # Express API, Models, Routes, Controllers
│
├── frontend/       # React app, Components, Redux
│
├── admin-portal/   # Admin portal source code (if separated)
│
└── README.md
```

## Contributing

Contributions are welcome! Please open issues or submit a pull request for improvements or bug fixes.

## License

This project is licensed under the MIT License.

## Contact

For queries or support, contact [Nitin Rana](https://github.com/nitinrana691).
