#  App Tracker

App Tracker is a modern and responsive web application built with **React** and **Tailwind CSS**, designed to showcase, explore, and manage mobile apps.
It allows users to browse top apps, view app details, and install/uninstall apps — all powered by dynamic data and localStorage integration.

---

##  Features

###  Home Page
- Beautiful banner with centered heading and dual action buttons:
  - **App Store** and **Play Store** links.
- **Statistics section** with unique styled cards.
- **Top Apps Section** displaying 8 featured apps in a responsive 4-column grid.
- Each app card shows:
  - Image, Title, Downloads, and Average Rating.
- “**Show All**” button to navigate to the full app list.

---

###  All Apps Page
- Displays all available apps with title, image, downloads, and ratings.
- Includes **live search** functionality (case-insensitive).
- Shows total number of apps and dynamic filtering.
- “No App Found” message for unmatched results.
- **Sorting Dropdown** for sorting apps by download count (High–Low / Low–High).

---

###  App Details Page
- Shows detailed information about the selected app.
- Displays app image, title, company name, downloads, reviews, and average rating.
- **Install Button**:
  - Saves the app to LocalStorage.
  - Changes state to “Installed” and becomes disabled.
  - Shows a **toast notification** after installation.
- Includes a **Recharts bar chart** visualizing app rating distribution.
- Full description section styled as per Figma layout.

---

###  My Installation Page
- Displays all apps installed by the user.
- Each card includes an **Uninstall** button to remove apps from LocalStorage.
- Shows a **toast message** upon successful uninstall.

---

### Layout & Navigation
- **Header** includes:
  - Logo (links to Home)
  - Navigation bar with active route highlighting.
  - “Contribution” button linking to GitHub profile.
- **Footer**:
  - Custom designed with creative style and responsive layout.

---

###  Other Functionalities
- Custom **404 Error Page** for invalid routes.
- **Loading Animation** displayed during:
  - Page navigation.
  - Search operation.
- Fully **responsive** across all devices.
- Handles page reloads from any route on production without errors.

---

##  Technologies Used
-  **React.js (Vite)**
- **Tailwind CSS**
- **Recharts**
- **React Router DOM**
- **React Hot Toast**
- **LocalStorage**
- **Deployed on Netlify**

---

##  Data Structure
The app data is stored in a JSON array with 12–20 objects following this structure:

```json
{
  "id": 1,
  "image": "app-image.jpg",
  "title": "App Title",
  "companyName": "App Company",
  "description": "App description...",
  "size": 45,
  "reviews": 230,
  "ratingAvg": 4.5,
  "downloads": 12000,
  "ratings": [
    { "name": "1 star", "count": 20 },
    { "name": "2 star", "count": 15 },
    { "name": "3 star", "count": 40 },
    { "name": "4 star", "count": 70 },
    { "name": "5 star", "count": 85 }
  ]
}