# Fish Market Platform - Project Overview

## Introduction

The blue economy in Kenya holds immense potential, particularly within the fisheries sector, a cornerstone for numerous coastal and inland communities. However, realizing this potential is significantly hampered by the lack of accessible digital infrastructure for efficient fish trade. Our project, the **Fish Market Platform**, aims to bridge this gap by creating a digital marketplace connecting local fisherfolks directly with buyers.

## Problem Analysis

The traditional fish market system in Kenya remains largely informal, plagued by limited market visibility, logistical hurdles, and a lack of direct interaction between fish suppliers (fisherfolks) and consumers (households, hotels, restaurants, etc.). This results in several critical issues:

### For Fisherfolks:

- **Limited Market Reach:** Dependence on local markets and middlemen restricts income and market exposure.
- **Post-Harvest Losses:** Lack of efficient sales channels leads to spoilage of fresh catches.
- **Lack of Transparency and Pricing Control:** Middlemen often dictate prices, reducing fisherfolks' earnings.
- **Disconnected Supply Chain:** No centralized system for buyers to view stock and place direct orders.
- **Low Digital Penetration:** Limited adoption of digital tools for fish trade despite increasing access to technology.

### For Buyers:

- **Unreliable Supply:** Difficulty in consistently sourcing fresh fish.
- **Lack of Information:** No central database for fish prices, types, and availability.
- **Limited Engagement with Producers:** Inability to directly communicate or build relationships with fisherfolks.

## Proposed Solution

The Fish Market Platform is envisioned as a web-based marketplace built using **React.js (frontend)** and **Supabase (backend)** to directly connect local fisherfolks with buyers. This platform will:

- Enable fisherfolks to easily list their catch with real-time stock and price updates.
- Allow buyers to efficiently browse, search, and filter fish listings.
- Facilitate direct order requests and streamlined buyer-seller communication.
- Provide intuitive dashboards for both user types to manage their activities effectively.

This digital solution aims to empower local fishing communities, significantly reduce post-harvest waste, and foster transparency and sustainability within Kenya’s vital blue economy.

## Objectives

The main objective of this project is to design and develop a user-friendly web-based fish market platform that streamlines the process of buying and selling fish within Kenya’s blue economy.

### Main Objective

- To build a digital marketplace that enables fisherfolks to list their fresh catch and allows buyers to browse, request, and purchase fish directly from the source.

### Specific Objectives

- To create a user-friendly and responsive interface using React.js, that allows fisherfolks and buyers to easily interact with the platform from both desktop and mobile devices.
- To implement an authentication system that supports role-based access for two types of users — fisherfolks and buyers.
- To allow fisherfolks to add, update, and delete their fish listings, including details like fish type, price per kilogram, available weight, and images.
- To enable buyers to browse listings, apply filters (e.g., type, price, location), and request orders directly from fisherfolks.
- To build a real-time backend using Supabase that stores user profiles, listings, and order data in a secure and scalable way.
- To provide dashboards for each user type, showing personalized information such as active listings (for fisherfolks) and active/past orders (for buyers).
- To reduce post-harvest losses by creating a faster route to market, improving income generation for local fisherfolks.
- To contribute to the growth of the digital blue economy in Kenya, by promoting transparency, accessibility, and local economic empowerment.

## Scope

This project focuses on the development of a web-based fish marketplace platform aimed at enhancing the fish trade within Kenya’s blue economy by directly connecting fisherfolks to buyers.

###  In-Scope Features

- **User Authentication and Role Management**
  - Secure sign-up and login functionality using Supabase Auth
  - Support for two user roles: Fisherfolk and Buyer
- **Fisherfolk Functionalities**
  - Profile creation and editing
  - Adding new fish listings with relevant details (name, weight, price, photo)
  - Managing existing listings (update, delete)
  - Viewing and managing incoming order requests from buyers
- **Buyer Functionalities**
  - Browsing and searching available fish listings
  - Filtering listings by price, availability, and location
  - Placing order requests to fisherfolks
  - Viewing their own order history and statuses
- **Real-Time Data Management**
  - Data is stored and retrieved using Supabase (PostgreSQL backend)
  - Instant updates to listings and orders
- **Responsive User Interface**
  - Clean and intuitive UI using React.js
  - Fully responsive design for mobile and desktop users

### Out-of-Scope Features (Future Work or Add-ons)

- Integrated payment gateways or mobile money systems (e.g., M-PESA)
- Fish delivery logistics or tracking system
- Ratings and reviews system for fisherfolks or buyers
- Multi-language support (e.g., Swahili)
- Mobile app (native Android/iOS)
- Integration with fisheries or government databases

## System Features and Design

### 1. User Roles

The platform supports two main user roles:

- **Fisherfolk:** Can add, update, and manage fish listings; view and respond to order requests.
- **Buyer:** Can browse listings, filter fish types, and place order requests.

### 2. Key Features

- **🔐 Authentication & Authorization**
  - Sign up / Login with Supabase Auth
  - Role-based access: redirects and available pages based on user type

- **🐟 Fish Listings (Fisherfolks)**
  - Add new fish (name, image, quantity, price per kg, availability)
  - Edit or delete listed fish
  - View list of active fish stock

- **🛒 Fish Marketplace (Buyers)**
  - Public-facing page that shows available fish
  - Search and filter by price, fish type, or weight
  - View listing details (fisherfolk, location, freshness)

- **📦 Order Requests**
  - Buyers can submit a request to order fish
  - Fisherfolks get notified of orders and can accept/decline
  - Order status updates (pending, accepted, fulfilled)

- **📊 Dashboards**
  - **Fisherfolk Dashboard:** Shows profile, current listings, order requests
  - **Buyer Dashboard:** Shows active orders, order history, profile

- **📱 Responsive Design**
  - Mobile-friendly interface
  - Simple navigation bar with role-based menu items
  - Clean and minimalist layout optimized for low-bandwidth use

## System Design (Workflow)

### For Fisherfolks

- Land on homepage → Sign Up or Log In as "Fisherfolk"
- After login → Redirected to Fisherfolk Dashboard
- Add fish to the listing with details
- Wait for buyers to request → View orders in dashboard
- Accept/decline requests → Communicate if needed

### For Buyers

- Land on homepage → Sign Up or Log In as "Buyer"
- Browse public fish listings (even without logging in)
- After login → Able to place order requests
- View orders status in dashboard
- Await fulfillment or connect with the fisherfolk

## 🛠️ Tech Stack

- **Frontend:** React.js + Tailwind CSS  
- **Backend:** Supabase (Auth + Database)  
- **Deployment:** Vercel / Netlify

## Conclusion

The **Fish Market Platform** represents a significant step towards digitizing and enhancing the fish trade within Kenya’s blue economy. By leveraging modern web technologies, the platform aims to create a transparent, efficient, and accessible marketplace that empowers local fisherfolks and provides buyers with a reliable source of fresh fish — ultimately contributing to the sustainable growth of the sector.
