# HealthBuddy Webpage

A React-based webpage for HealthBuddy that includes features such as lab test discovery, lifestyle health packages, user reviews, and FAQs.

## Features
- **Dynamic Content Loading**: Fetches and dynamically renders sections from an API (`fetchPageConfig`).
- **Header**: Displays location information and cart/wallet functionalities.
- **Icons Section**: Shortcut icons to popular features (e.g., lab tests, diagnostics).
- **Banners**: Carousel or grid for promotional banners.
- **Featured Checkups**: Scrollable list of featured health check-ups with category filters.
- **Lifestyle Packages**: Offers lifestyle-related health check-ups.
- **User Reviews**: Scrollable user testimonials.
- **FAQs**: Expandable questions and answers section.
- **Highlights Section**: Displays key features of the platform.

## Technologies Used
- **React**: Component-based frontend development.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **JavaScript (ES6)**: Modern JavaScript features.
- **CSS Loader**: Loader animation for the page.
- **API Integration**: Fetches configuration dynamically.

## Folder Structure
src/ ├── components/ # React components for sections │ ├── Header.jsx # Header component │ ├── IconsSection.jsx # Icons section │ ├── BannersSection.jsx # Banners section │ ├── FeaturedCheckups.jsx # Featured check-ups │ ├── FAQs.jsx # FAQs section │ ├── LifestylePackages.jsx# Lifestyle packages │ ├── UserReviews.jsx # User reviews section │ └── HighlightsSection.jsx# Highlights section ├── services/ # API service │ └── api.js # API logic ├── App.jsx # Main App component ├── index.js # ReactDOM entry point ├── index.css # Tailwind CSS and custom styles

## Getting Started

### Prerequisites
Make sure you have the following installed:
- **Node.js** (v16 or higher)
- **npm** (v8 or higher)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Gopichand219/health-buddy.git
2. Navigate to the project directory:
    cd health-buddy
3. Install dependencies:
    npm install

### Usage
1. Start the development server:
    npm start