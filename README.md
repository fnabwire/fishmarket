# 🐟 Fish Market Platform

A digital marketplace connecting fishermen directly with buyers, ensuring fresh seafood reaches customers efficiently.

## 🌟 Features

### 🏠 **Home Page (Landing Page)**
- **Navbar**: Logo + Links (Home | Listings | About | Login | Sign Up)
- **Hero Section**: 
  - Tagline: *"Fresh Fish, Direct from the Ocean!"*
  - Buttons: 
    - *"Explore Listings"* → Redirects to Fish Listings Page
    - *"Sell Your Fish"* → Redirects to Login (for fishermen)
- **Featured Listings**: Recent fish listings with images, names, and prices.
- **Footer**: Contact info, social links, and policy links.

### 🔐 **Authentication (Login/Signup)**
1. **Role Selection**: 
   - *"I am a Fisherman"* or *"I am a Buyer"*
2. **Login/Signup** (via Supabase Auth):
   - *Fishermen Signup*: Name, Email, Password, Location
   - *Buyers Signup*: Name, Email, Password
3. **Role-Based Redirect**:
   - Fishermen → Dashboard
   - Buyers → Listings Page

### 📦 **Fish Listings Page**
- **Public Access**: Search (by name/price/fisherman) + Filters (price, availability, location).
- **Listings Display**:
  - Fish image, name, price/kg, availability.
  - *"Order Now"* button (for logged-in buyers).
- **Buyer Flow**:
  - Order form (quantity, contact details).
  - Orders appear in *"My Orders"* section.

### 🎣 **Fisherman Dashboard**
- Manage listings, view orders, update availability.

## 🛠️ **Tech Stack**
- **Frontend**: React.js + Tailwind CSS
- **Backend**: Supabase (Auth + Database)
- **Deployment**: Vercel / Netlify

