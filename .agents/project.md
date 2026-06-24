# Coffee Date Invitation Website

## Project Overview

A romantic and interactive web application designed to ask a girl out on a coffee date. The website guides her through a series of questions, allowing her to respond, choose her preferred coffee date style, select her availability, upload a photo, and submit everything to a database.

Built with:

* Astro
* Supabase (Database & Storage)
* Tailwind CSS (Optional)
* TypeScript

---

# Project Goals

* Create a memorable and personalized invitation experience.
* Collect date preferences in a simple and fun way.
* Store responses securely in Supabase.
* Allow photo uploads.
* Provide a dashboard for viewing submissions.

---

# User Flow

## Landing Page

### Hero Section

Display:

* A cute welcome message
* Personalized greeting
* Background image or animation

Example:

> "Hi ❤️, I have something important to ask you..."

Button:

* Continue

---

## Question 1: Date Invitation

Question:

> "Would you like to go on a coffee date with me?"

Options:

### Yes

Proceeds to next step.

### No

Show playful response:

> "Are you sure? 🥺"

Options:

* Yes, I'm sure
* Let me think again

If still No:

> "That's okay. Thank you for being honest ❤️"

Store response.

---

## Question 2: Preferred Coffee Date

Question:

> "What kind of coffee date would you enjoy?"

Options:

* Cozy Cafe
* Coffee + Walk
* Study Date
* Dessert & Coffee
* Surprise Me
* Custom Option

If Custom:

Display text input.

---

## Question 3: Her Availability

Question:

> "When are you available?"

Fields:

* Date Picker
* Time Picker

Allow:

* Multiple available dates (optional)

---

## Question 4: My Availability

Display:

> "Here are the dates I'm available."

Options:

* Predefined available dates
* Calendar view

Example:

* July 5
* July 6
* July 12
* July 13

User can select matching dates.

---

## Question 5: Photo Upload

Question:

> "Upload your cutest photo 📸"

Requirements:

* JPG
* PNG
* WEBP

Max Size:

* 10 MB

Store in:

Supabase Storage

Save file URL in database.

---

## Final Message

Display:

> "Thank you for answering ❤️"

Show summary:

* Response
* Coffee date type
* Selected availability
* Uploaded photo preview

Button:

* Submit

---

# Database Design

## Table: date_responses

| Column             | Type      |
| ------------------ | --------- |
| id                 | uuid      |
| created_at         | timestamp |
| answer             | text      |
| coffee_date_type   | text      |
| custom_coffee_type | text      |
| her_available_date | date      |
| her_available_time | time      |
| my_selected_date   | date      |
| photo_url          | text      |

---

# Supabase Storage

## Bucket

photos

### Permissions

* Public Read
* Authenticated Upload

---

# Pages Structure

```text
src/
│
├── pages/
│   ├── index.astro
│   ├── invite.astro
│   ├── thank-you.astro
│
├── components/
│   ├── Hero.astro
│   ├── QuestionCard.astro
│   ├── CoffeeOptions.astro
│   ├── AvailabilityPicker.astro
│   ├── PhotoUpload.astro
│   ├── ProgressBar.astro
│
├── layouts/
│   └── MainLayout.astro
│
└── lib/
    ├── supabase.ts
    └── db.ts
```

---

# Features

## Core Features

* Multi-step form
* Progress indicator
* Date picker
* Time picker
* Photo upload
* Form validation
* Success page

---

## Nice-to-Have Features

### Music

Play background music.

### Confetti

Show confetti when she selects "Yes".

### Love Notes

Random cute messages between steps.

### Countdown

Display countdown until selected date.

### Polaroid Preview

Show uploaded image as a polaroid photo.

### Dark Mode

Optional romantic dark theme.

---

# Admin Dashboard

## Purpose

View all submissions.

Display:

* Date response
* Coffee preference
* Availability
* Uploaded photo
* Submission timestamp

Route:

```text
/admin
```

Protected by password.

---

# Environment Variables

```env
PUBLIC_SUPABASE_URL=
PUBLIC_SUPABASE_ANON_KEY=
```

---

# Success Criteria

The application should:

* Feel personal and romantic.
* Work smoothly on mobile devices.
* Store all responses in Supabase.
* Successfully upload photos.
* Make the invitation experience memorable and fun.
Supabase
Angelo122221's Org
Free

New project
Feedback

Search...

⌘K

Help

Advisor Center

Angelo122221
Create a new project
Your project will have its own dedicated instance and full Postgres database. An API will be set up so you can easily interact with your new database.

Organization

Angelo122221's Org
Free

Angelo122221's OrgFree
GitHub (optional)

Connect GitHub
Ideal for agent-first workflows: update your schema in code, push it to GitHub, and Supabase deploys the changes automatically. Learn more
Project name
coffee-date
Database password
••••••••••••••••••
Note: If using the Postgres connection string, you will need to percent-encode the password

This password is strong. Generate a password.

Region

region icon
Asia-Pacific

Asia-PacificRecommended
Select the region closest to your users for the best performance.

Security

Enable Data API
Autogenerate a RESTful API for your public schema. Recommended if using a client library like supabase-js.

Automatically expose new tables
Grants privileges to Data API roles by default, exposing new tables.
We recommend disabling this to control access manually.

Enable automatic RLS
Create an event trigger that automatically enables Row Level Security on all new tables in the public schema.
Advanced Configuration

Cancel

Create new project
Background pattern

Notice
We've updated our Terms of Service

Updates define the responsibilities of both you and Supabase in the use of AI.


Learn more
New Project | Supabase
Keith@ngelo_122221