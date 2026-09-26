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
* Plan li
