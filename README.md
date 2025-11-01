# 🚀 Strelema Employee Management Portal

A full-stack web application for managing employees, departments, attendance, and more — built using **React (Vite)**, **Context API**, and **Tailwind CSS**.  
This project includes both a **public landing page** and a **protected admin dashboard**.

---

## 🌐 Live Demo

👉 [https://strelema-hrms-portal.vercel.app](https://strelema-hrms-portal.vercel.app)

---

## 👨‍💻 Author

**Amol Mahor**  
📧 Email: [amolmahor50@gmail.com](mailto:amolmahor50@gmail.com)  
📞 Phone: +91 9673170912  
💼 [LinkedIn](https://linkedin.com/in/amol-mahor-a57a87202)  
💻 [GitHub](https://github.com/amolmahor50/strelema-hrms-portal)

---

## 🧠 Features

### 🏠 Public Section

- Beautiful landing page with hero, services, destinations & testimonial sections
- User authentication page (Login)
- Responsive header and footer layout

### 🔐 Protected Admin Section

- Admin Dashboard
- Employee management (with pagination & API integration)
- Department, Leaves, Holidays, and Attendance modules
- Context-based global state management
- Responsive Sidebar & Header layout
- Dark / Light mode options
- Smooth navigation using **React Router v6**

---

## ⚙️ Tech Stack

| Category               | Technologies Used               |
| ---------------------- | ------------------------------- |
| **Frontend Framework** | React (Vite)                    |
| **Routing**            | React Router DOM                |
| **State Management**   | Context API                     |
| **Styling**            | Tailwind CSS, ShadCN UI         |
| **UI Components**      | Lucide Icons, ShadCN Components |
| **Animation**          | Framer Motion                   |
| **Data Handling**      | Axios (API Client)              |
| **Build Tool**         | Vite                            |
| **Deployment**         | vercel                         |

---

## 🧩 Folder Structure

src/
├── assets/
│ 
├── components/
│ ├── common/
│ │ ├── GradientBackground.jsx
│ │ ├── Headline.jsx
│ │ ├── MotionWrapper.jsx
│ │ └── PageLayout.jsx
│ ├── ui/
│ │ ├── AppProviders.jsx
│ │ ├── AuthContext.jsx
│ │ └── EmployeeContext.jsx
│ └── custom/
│ ├── Icon.jsx
│ └── Typography.jsx
│
├── contexts/
│ ├── AppProviders.jsx
│ ├── AuthContext.jsx
│ └── EmployeeContext.jsx
│
├── lib/
│ └── utils.ts
│
├── pages/
│ └── admin/
│ ├── Dashboard.jsx
│ ├── EmployeeTable.jsx
│ ├── Bookings.jsx
│ ├── Destinations.jsx
│ ├── Flights.jsx
│ ├── Hotels.jsx
│ └── NotFound.jsx
│
├── routes/
│ ├── apiClient.js
│ ├── authService.js
│ ├── employeeService.js
│ ├── PublicRoutes.jsx
│ └── ProtectedRoutes.jsx
│
├── services/
│ ├── apiClient.js
│ ├── authService.js
│ └── employeeService.js
│
├── view/
│ ├── auth/
│ │ └── LoginForm.jsx
│ ├── landing/
│ │ ├── BookTripSteps.jsx
│ │ ├── Footer.jsx
│ │ ├── Header.jsx
│ │ ├── Herosection.jsx
│ │ ├── LandingPageLayout.jsx
│ │ ├── ServicesSection.jsx
│ │ ├── SubscribeSection.jsx
│ │ ├── Testimonials.jsx
│ │ └── TopDestinations.jsx
│ └── layout/
│ ├── Header.jsx
│ ├── MainLayout.jsx
│ └── Sidebar.jsx
│
├── App.jsx
├── index.css
├── main.jsx
└── index.html
