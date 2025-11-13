# Image Processing API

This project is part of the **Full Stack JavaScript Developer Nanodegree**.  
It creates an API endpoint that resizes and caches images using **Express**, **TypeScript**, and **Sharp**.

---

## 📦 Project Overview
The API allows users to resize images on demand and stores the processed versions for faster future access.

**Example Endpoint:**

If the resized image exists, it returns the cached version.  
If not, it resizes it using Sharp and saves it in the `images/thumb` directory.

---

## ⚙️ Environment Variables
These variables can be configured in a `.env` file:


Default values are used if `.env` is not provided.

---

## 🧠 Scripts

| Command | Description |
|----------|--------------|
| `npm run build` | Compiles TypeScript to JavaScript in `/dist` |
| `npm run start` | Starts the server using compiled JS files |
| `npm run test` | Runs all Jasmine tests |
| `npm run lint` | Runs ESLint to ensure proper code formatting |
| `npm run format` | Formats the code using Prettier |

---

## 🧪 Testing

This project uses **Jasmine** for unit and integration testing.

**Run all tests:**
```bash
npm run test

Tests included:

API endpoint responds correctly

Image resizing works properly

Cached images are returned when available

Throws an error for missing files

Folder Structure
IMAGE-PROCESSING-API
│
├── images/
│   ├── full/        # Original images
│   └── thumb/       # Resized (cached) images
│
├── src/
│   ├── routes/      # Express routes
│   ├── utils/       # Helper functions (resize.ts)
│   ├── tests/       # Unit and integration tests
│   └── server.ts    # Main Express server
│
├── .env
├── package.json
├── tsconfig.json
├── tsconfig.test.json
└── README.md
