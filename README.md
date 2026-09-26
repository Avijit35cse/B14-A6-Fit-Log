# 💪 FitLog — Workout Library

**FitLog** is a modern, dark-themed workout library built with **Next.js**.
Users can browse workouts, view detailed exercise information, build a daily workout plan, save workouts for later, search and sort workouts, and track completed exercises.

---

## 🚀 Live Project

🔗 **Live Website:**
https://b14-a6-fit-log-opal-xi.vercel.app/

🔗 **GitHub Repository:**
https://github.com/Avijit35cse/B14-A6-Fit-Log

---

## 🛠️ Technologies Used

* **Next.js 16**
* **React**
* **TypeScript**
* **Tailwind CSS**
* **DaisyUI**
* **Lucide React**
* **React Toastify**
* **Next.js App Router**
* **Browser LocalStorage**

---

## ✨ Key Features

### 1. 🏋️ Workout Library

Browse the complete workout library with detailed information including:

* Workout images
* Muscle group tags
* Equipment information
* Duration
* Calories burned
* Rating
* Responsive workout cards

---

### 2. 📋 Workout Details

Open any workout to view complete exercise information:

* Workout name and description
* Muscle groups
* Equipment
* Difficulty level
* Sets and reps
* Duration
* Calories burned
* Rating
* Step-by-step instructions

---

### 3. 📅 My Plan

Create and manage your daily workout plan.

* Add workouts to today's plan
* Maximum **5 lifts** per plan
* View total exercises
* View total workout duration
* View total calories
* View workout details
* Mark workouts as completed
* Remove workouts
* Plan data persists after page reload

---

### 4. 🔖 Save for Later

Save workouts that you want to use later.

* Save workouts from the workout details page
* View saved workouts in the **Saved** tab
* View saved workout details
* Remove saved workouts
* Saved data persists after page reload

---

### 5. 🔍 Search & Sort

The My Plan page provides workout management tools.

**Search by:**

* Workout name
* Equipment
* Difficulty
* Muscle-group tags

**Sort by:**

* Duration
* Calories burned
* Rating

---

## 💾 LocalStorage Persistence

FitLog uses the browser's **LocalStorage API** to persist user data.

The application stores:

* Today's workout plan
* Saved workouts
* Completed workout status

This allows workout data to remain available even after refreshing the browser.

---

## 🔔 Toast Notifications

**React Toastify** provides instant feedback for important user actions.

Examples include:

* Workout added to today's plan
* Workout saved for later
* Duplicate workout attempts
* Plan limit reached
* Workout removed
* Workout saved successfully

---

## 📱 Responsive Design

FitLog is fully responsive and optimized for:

* 📱 **Mobile**
* 💻 **Tablet**
* 🖥️ **Desktop**

The following sections adapt to different screen sizes:

* Navbar
* Hero section
* Workout library
* Workout cards
* Workout details
* My Plan
* Footer

---

## ⏳ Loading & Error Handling

The application includes several user-friendly loading and error states:

* Loading UI while workout data is being fetched
* My Plan loading state
* Custom `404` page
* Workout-not-found handling
* API response error handling
* Invalid workout ID handling

---

## 🔌 API

Workout data is fetched from the FitLog API.

### All Workouts

```text
https://api.abcz.workers.dev/api/fitlog
```

### Workout Details

```text
https://api.abcz.workers.dev/api/fitlog/:id
```

---

## 📂 Project Structure

```text
fit-log/
├── public/
│
├── src/
│   ├── app/
│   │   ├── my-plan/
│   │   │   ├── loading.tsx
│   │   │   └── page.tsx
│   │   │
│   │   ├── workout/
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   │
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── loading.tsx
│   │   ├── not-found.tsx
│   │   └── page.tsx
│   │
│   ├── components/
│   │   ├── detailsAction/
│   │   │   └── DetailsAction.jsx
│   │   │
│   │   ├── home/
│   │   │   ├── FitnessCard.tsx
│   │   │   ├── Hero.tsx
│   │   │   └── Library.tsx
│   │   │
│   │   ├── myPlan/
│   │   │   └── MyPlan.tsx
│   │   │
│   │   └── shared/
│   │       ├── Footer.tsx
│   │       ├── Navbar.tsx
│   │       └── NavLink.tsx
│   │
│   ├── context/
│   │   └── PlanContext.tsx
│   │
│   ├── library/
│   │   └── page.tsx
│   │
│   └── types/
│       └── type.ts
│
├── .gitignore
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── README.md
└── tsconfig.json
```

---

## ⚙️ Run Locally

### 1. Clone the Repository

```bash
git clone https://github.com/Avijit35cse/B14-A6-Fit-Log.git
```

### 2. Go to the Project Directory

```bash
cd fit-log
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

Open the application in your browser:

```text
http://localhost:3000
```

---

## 📦 Production Build

Create a production build:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

---

## 🎯 Project Highlights

* 🌑 Dark and modern fitness-focused UI
* 📱 Fully responsive design
* 🏋️ Workout library
* 📋 Dynamic workout details
* 📅 Daily workout planning
* 🔢 Five-lift plan limit
* 🔖 Saved workouts
* 💾 LocalStorage persistence
* 🔍 Search functionality
* ↕️ Workout sorting
* ✅ Mark as Done functionality
* 🔔 Toast notifications
* ⏳ Loading states
* 🚫 Custom 404 page
* 📱 Responsive navigation
* 🦶 Responsive footer

---

## 👨‍💻 Author

**Avijit Barua**

Built with ❤️ using **Next.js, React, TypeScript & Tailwind CSS**.

---

### © 2026 FitLog — Workout Library

**Train hard. Log honest.**
