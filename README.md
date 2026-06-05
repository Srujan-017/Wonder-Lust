# 🌍 WonderLust

<div align="center">

### Discover • Explore • Share Amazing Destinations

A full-stack travel accommodation platform inspired by modern stay-booking experiences. Users can discover destinations, create listings, upload images, share reviews, and manage their travel properties through a secure and responsive web application.

[![Live Demo](https://img.shields.io/badge/Live-Demo-success?style=for-the-badge)](https://wonder-lust-sm1n.onrender.com/listings)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green?style=for-the-badge&logo=node.js)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green?style=for-the-badge&logo=mongodb)](https://mongodb.com/)
[![Express](https://img.shields.io/badge/Express.js-Backend-black?style=for-the-badge&logo=express)](https://expressjs.com/)
[![Render](https://img.shields.io/badge/Hosted%20On-Render-46E3B7?style=for-the-badge)](https://render.com/)

### 🚀 Live Application

https://wonder-lust-sm1n.onrender.com/listings

</div>

---

# 📖 About The Project

WonderLust is a full-stack web application that allows travelers and property owners to connect through an intuitive listing platform.

The application provides a complete travel listing experience where users can:

- Browse unique destinations and accommodations
- Create and manage property listings
- Upload high-quality images
- Leave reviews and ratings
- Search destinations by location
- Filter listings by travel categories
- Explore mapped property locations

Built using modern web technologies and following the MVC architecture pattern, WonderLust demonstrates real-world full-stack development practices including authentication, cloud storage integration, session management, and database design.

---

# ✨ Key Features

## 👤 User Authentication

- Secure User Registration
- Login & Logout Functionality
- Session-Based Authentication
- Protected Routes
- Passport.js Integration

## 🏠 Listing Management

- Create New Listings
- Edit Existing Listings
- Delete Listings
- View Listing Details
- Property Image Uploads

## ⭐ Reviews & Ratings

- Add Reviews
- Delete Reviews
- Rating System
- User-Specific Review Management

## 🔍 Search & Discovery

- Search by Destination
- Search by Country
- Search by Property Name
- Category-Based Filtering

## 🌎 Location Services

- Geoapify Geocoding
- Interactive Maps
- Property Location Visualization

## ☁️ Cloud Storage

- Cloudinary Integration
- Secure Image Hosting
- Optimized Image Delivery

---

# 📸 Application Screenshots

## 🏡 Explore Listings

![Wonderlust explore page](public/screenshots/home.png)

Browse destinations and discover unique travel experiences.

---

## 📍 Listing Details & Location Map

![Wonderlust listing details page](public/screenshots/review.png)

View property details, reviews, ratings, and mapped locations.

---

## ➕ Create New Listing

![Wonderlust create listing page](public/screenshots/new-listing.png)

Property owners can add new travel destinations with images.

---

## ✏️ Edit Existing Listings

![Wonderlust edit listing page](public/screenshots/edit.png)

Update property information anytime.

---

# 🛠️ Tech Stack

## Frontend

- EJS
- HTML5
- CSS3
- Bootstrap
- JavaScript

## Backend

- Node.js
- Express.js

## Database

- MongoDB Atlas
- Mongoose

## Authentication

- Passport.js
- Passport Local
- Passport Local Mongoose
- Express Session

## File Upload & Storage

- Multer
- Cloudinary
- Multer Storage Cloudinary

## Maps & Geolocation

- Geoapify API
- MapLibre
- OpenFreeMap

## Deployment

- Render

---

# 🏗️ Project Architecture

The application follows the MVC (Model-View-Controller) architecture.

```text
Wonder-Lust
│
├── controllers/
├── models/
├── routes/
├── views/
├── public/
├── middleware.js
├── cloudConfig.js
├── schema.js
├── app.js
└── package.json
```

### Architecture Highlights

- Modular Route Structure
- MVC Design Pattern
- Middleware-Based Authentication
- Cloud Image Management
- Session Persistence with MongoDB
- Server-Side Validation using Joi

---

# ⚙️ Environment Variables

Create a `.env` file in the root directory.

```env
ATLASDB_URL=your_mongodb_connection_string

SECRET=your_session_secret

CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret

GEOAPIFY_API_KEY=your_geoapify_api_key
```

---

# 🚀 Local Installation

### Clone Repository

```bash
git clone https://github.com/Srujan-017/Wonder-Lust.git
```

### Navigate to Project

```bash
cd Wonder-Lust
```

### Install Dependencies

```bash
npm install
```

### Start Application

```bash
npm start
```

### Open Browser

```text
http://localhost:8080/listings
```

---

# 🌟 Future Enhancements

- Booking Functionality
- User Profiles
- Wishlist Feature
- Google Authentication
- Payment Gateway Integration
- Advanced Search Filters
- Admin Dashboard
- Property Availability Calendar

---

# 🔐 Security Practices

The project includes:

- Password Hashing
- Session-Based Authentication
- Route Protection
- Input Validation using Joi
- Environment Variable Protection
- Secure Cloud Storage Integration

Sensitive files intentionally excluded:

```text
.env
node_modules
logs
temporary build files
```

---

# 👨‍💻 Developer

## Srujan V

Computer Science Engineering Student  
Full Stack Web Developer

### Connect With Me

- GitHub: https://github.com/Srujan-017
- LinkedIn: Add Your LinkedIn Profile Here

---

# ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.

It helps the project reach more developers and supports future improvements.

---

<div align="center">

Made with ❤️ using Node.js, Express.js, MongoDB Atlas, Cloudinary & Render

</div>
