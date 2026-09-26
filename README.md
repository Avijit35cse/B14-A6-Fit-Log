FitLog --- Workout Library

FitLog is a modern, dark-themed workout library built with Next.js.
Users can browse workouts, view detailed exercise information, build a
daily workout plan, save workouts for later, search and sort workouts,
and track completed exercises.

🚀 Live Project

Project URL:

(https://b14-a6-fit-log-opal-xi.vercel.app/)

🛠️ Technologies Used

Next.js 16

React

TypeScript

Tailwind CSS

DaisyUI

Lucide React

React Toastify

Next.js App Router

LocalStorage

✨ Key Features

1. Workout Library

Browse the complete workout library with:

Workout images

Muscle group tags

Equipment information

Duration

Calories burned

Rating

Responsive workout cards

2. Workout Details

Open any workout to see detailed information including:

Workout name and description

Muscle groups

Equipment

Difficulty

Sets and reps

Duration

Calories burned

Rating

Step-by-step instructions

3. My Plan

Create and manage today's workout plan.

Add workouts to today's plan

Maximum 5 lifts per plan

View plan statistics

View workout details

Mark workouts as done

Remove workouts

Plan data persists after page reload

4. Save for Later

Save workouts that you want to use later.

Save workouts from the details page

View saved workouts in the Saved tab

View workout details

Remove saved workouts

Saved data persists after page reload

5. Search and Sort

The My Plan page provides workout management tools:

Search by workout name

Search by equipment

Search by difficulty

Search by muscle-group tags

Sort by Duration

Sort by Calories

Sort by Rating

💾 LocalStorage Persistence

FitLog uses browser localStorage to persist user data.

The application stores:

Today's workout plan

Saved workouts

Completed workout status

This allows the user's workout data to remain available after refreshing
the page.

🔔 Toast Notifications

React Toastify provides user feedback for important actions such as:

Workout added to today's plan

Workout saved for later

Duplicate workout attempts

Plan limit reached

📱 Responsive Design

FitLog is responsive and designed for:

📱 Mobile

💻 Tablet

🖥️ Desktop

The navbar, hero section, workout cards, workout details, My Plan page,
and footer adapt to different screen sizes.

⏳ Loading & Error Handling

The project includes:

Loading UI while workout data is being loaded

My Plan loading state

Custom 404 page for invalid routes

Workout-not-found handling on invalid workout IDs

API response error handling

🔌 API

Workout data is fetched from the FitLog API.

All Workouts

https://api.abcz.workers.dev/api/fitlog

Workout Details

https://api.abcz.workers.dev/api/fitlog/:id

📂 Project Structure

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

⚙️ Run Locally

1. Clone the repository

git clone (https://github.com/Avijit35cse/B14-A6-Fit-Log.git)

2. Go to the project directory

cd fit-log

3. Install dependencies

npm install

4. Start the development server

npm run dev

Open the application at:

http://localhost:3000

📦 Production Build

Create a production build:

npm run build

Start the production server:

npm start

🎯 Project Highlights

Dark, modern fitness-focused UI

Responsive design

Workout library

Dynamic workout details

Daily workout planning

Five-lift plan limit

Saved workouts

LocalStorage persistence

Search and sorting

Mark as Done functionality

Toast notifications

Loading states

Custom 404 page

Responsive navigation and footer

© 2026 FitLog --- Workout Library. Train hard, log honest.