# 🐟 Fish Market Platform - System Design Document

## Overview
This document outlines the system design for the Fish Market Platform — a web-based application that directly connects Kenyan fisherfolks to buyers, streamlining fish sales and reducing post-harvest losses in the blue economy. The system leverages modern web technologies (React.js, Supabase) for seamless user experiences, real-time updates, and scalability.

## 🏗️ 1. System Architecture

### 1.1 Architecture Diagram

```
+--------------------+     +----------------------+     +------------------+
|   React Frontend   | <-- | Supabase Auth (JWT)    | --> | Supabase DB      |
|   (Client-side UI) |     +----------------------+     +------------------+
|                    |                                         ↑
+--------------------+                                         |
          ↑                                                   |
          | Web (HTTPS)                                       |
          | REST/Realtime APIs                                |
          |                                                   ↓
+---------------------------+     +---------------------+     +--------------------+
| Fisherfolk Dashboard      |     | Buyer Dashboard       |     | Admin Console (DB) |
+---------------------------+     +---------------------+     +--------------------+
```

## 👥 2. User Roles

### 2.1 Fisherfolk
* Can list new fish (name, price, weight, image)
* Can manage (edit/delete) fish listings
* View and manage buyer orders
* Access dashboard showing listings & sales activity

### 2.2 Buyer
* Can browse/filter fish listings
* Can place order requests
* View order history and request status

### 2.3 Admin (future)
* Optional: Access Supabase backend for user moderation, analytics, and debugging

## 🧾 3. Entity Relationship Diagram (ERD)

### 3.1 Tables & Relationships

**Users**
```
-----
user_id (PK)
name
email
role ('fisherfolk' or 'buyer')
location
phone
created_at
```

**FishListings**
```
------------
listing_id (PK)
user_id (FK → Users.user_id)
fish_type
price_per_kg
available_kg
image_url
location
created_at
```

**Orders**
```
------
order_id (PK)
listing_id (FK → FishListings.listing_id)
buyer_id (FK → Users.user_id)
status ('pending', 'accepted', 'declined', 'fulfilled')
quantity_kg
message
created_at
updated_at
```

**Messages** (optional/future)
```
-------
message_id (PK)
order_id (FK → Orders.order_id)
sender_id (FK → Users.user_id)
content
timestamp
```

### 3.2 Relationship Summary
* A User can be a Fisherfolk (who creates multiple FishListings) or a Buyer (who places multiple Orders)
* Each Order is linked to a specific FishListing and a Buyer
* Potential for a message table to facilitate communication between buyer and seller per order

## 🧮 4. Data Flow & Workflow

### 4.1 Fisherfolk Workflow
Signup/Login → Dashboard → Add Fish → Fish Available for Buyers → Accept/Decline Orders

### 4.2 Buyer Workflow
Signup/Login → Browse Listings → Filter/Search → Place Order → Track Order in Dashboard

### 4.3 Order Management Logic
When a buyer places an order:
* `status` = "pending"

Fisherfolk can update:
* Accept → `status` = "accepted"
* Decline → `status` = "declined"
* Fulfill (manually marked or inferred) → `status` = "fulfilled"

## 📊 5. Dashboard & Reporting

### 5.1 Fisherfolk Dashboard
* Active Fish Listings (type, price, stock left)
* Incoming Orders (status filters: pending, accepted, declined)
* Sales Summary (number of fulfilled orders, total kg sold)
* Earnings Estimate (price × quantity sold)

### 5.2 Buyer Dashboard
* Order History (filter by status/date)
* Active Orders (pending/accepted)
* Quick access to fisherfolk contact info per order

### 5.3 Admin Reports (future scope)
* Total Listings by Region/Fisherfolk
* Fish Type Demand Analytics
* Order Fulfillment Rates
* Daily/Weekly User Registrations
* Platform Engagement (logins, listings, orders per day)

## 🛡️ 6. Security & Data Management
* Supabase Auth (JWT) to handle secure logins and role-based access
* RLS (Row-Level Security) enabled to prevent unauthorized access to:
    * Fish listings (only editable by their owner)
    * Orders (only visible to involved parties)
* Validation on input forms (React-side + Supabase constraints)
* Database Rules:
    * Fisherfolk can only update their listings
    * Buyers can only view/modify their orders

## 🧰 7. Tech Stack

| Layer      | Tool/Tech               |
|------------|-------------------------|
| Frontend   | React.js + Tailwind CSS |
| Backend    | Supabase (PostgreSQL + Auth) |
| Deployment | Netlify / Vercel        |
| Storage    | Supabase Storage (for images) |
| Realtime   | Supabase Realtime (for updates to listings/orders) |

## 🔮 8. Future Enhancements
* Integrated payment gateway (M-PESA / Stripe)
* Delivery logistics module
* Ratings & reviews (post-order)
* Mobile app version (React Native)
* SMS/Email order notifications
* Admin dashboard with metrics and moderation tools
* Integration with Kenya Fisheries Department databases

## ✅ Conclusion
This system design establishes a scalable and secure architecture for connecting fisherfolks and buyers in Kenya through a centralized digital fish marketplace. By aligning technical design with the project’s mission of reducing waste, increasing income, and empowering local fishing communities, this platform becomes a critical step toward a more sustainable digital blue economy.
