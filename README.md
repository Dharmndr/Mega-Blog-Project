# 📝 BlogSphere

BlogSphere is a full-stack blogging platform where users can securely create, read, update, and delete their own blog posts.

It features authentication, rich text editing, image uploads, and protected routes.

## 🚀 Features

- 🔐 User Authentication (Signup, Login, Logout)

- ✍️ Create Blog Posts with Rich Text Editor

- 🖼 Upload Featured Images

- 📝 Edit & Update Posts

- 🗑 Delete Own Posts

- 👀 View All Active Posts

- 🛡 Protected Routes (Only logged-in users can create/edit/delete)

- 📱 Responsive UI with Tailwind CSS

## 🛠 Tech Stack
### Frontend

- ⚛ React

- 🎨 Tailwind CSS

- 🧭 React Router

- 🧠 Redux Toolkit

- 📝 React Hook Form

- ✨ TinyMCE

### Backend & Services

- ☁ Appwrite (Authentication, Database & Storage)

### Build Tool

- ⚡ Vite

## 📂 Project Structure 
```
src/
│
├── appwrite/        # Appwrite authentication & database services
├── components/      # Reusable UI components
├── pages/           # Page components (Home, Login, Signup, Post, etc.)
├── store/           # Redux store & auth slice
├── App.jsx          # Main layout
└── main.jsx         # Entry point
```
## 🔐 Authentication Flow

- User registers → Account created in Appwrite

- Session created automatically

- Redux stores user data

- Protected routes restrict access

- Logout clears all sessions

## 📝 Post Management

### Users can:

- Create posts with title, slug, content & image

- Upload featured image to Appwrite Storage

- Edit their own posts

- Delete posts (with image cleanup)

- View all active posts

### Only the author can edit or delete their post.

## ⚙️ Environment Variables

### Create a .env file in the root directory:
```javascript
VITE_APPWRITE_URL=your_appwrite_endpoint
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPWRITE_COLLECTION_ID=your_collection_id
VITE_APPWRITE_BUCKET_ID=your_bucket_id
VITE_TINYMCE_KEY=your_tinymce_api_key
```
## ▶️ Installation & Setup

### 1️⃣ Clone the repository
```
git clone https://github.com/Dharmndr/BlogSphere.git
cd blogsphere
```
### 2️⃣ Install dependencies
```
npm install
```
### 3️⃣ Start development server
```
npm run dev
```
App runs on:
```
http://localhost:5173
```
## 📦 Build for Production
```
npm run build
npm run preview
```
## 🎯 Key Highlights

- Slug auto-generation from title

- Rich Text Editor integration

- Image preview support

- Secure session handling

- Clean reusable component architecture

- Fully responsive layout

## 🧩 Future Improvements

- 🔎 Search & filter posts

- ❤️ Like & comment system

- 👤 User profile page

- 📊 Post analytics

- 🌙 Dark mode

- 📌 Pagination support

## 👨‍💻 Author

Dharmendra Kumar

## 📜 License

This project is open-source and available under the MIT License.
