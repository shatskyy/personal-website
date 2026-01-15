# Personal Portfolio Website

A Next.js portfolio website with public pages (resume, projects) and a private section for managing personal collections (articles, podcasts, books, videos, notes).

## Features

- **Public Pages**: Home, Resume, Projects
- **Private Section**: Password-protected dashboard for personal collections
- **Responsive Design**: Mobile-friendly with Tailwind CSS
- **Simple Authentication**: Session-based login
- **JSON Storage**: Easy-to-edit data files

## Setup

1. **Install dependencies**:
```bash
npm install
```

2. **Configure environment variables**:
Edit `.env.local` and set your password:
```
PRIVATE_PASSWORD=your-secure-password
SESSION_SECRET=your-random-32-character-secret
```

3. **Update your profile**:
Edit `data/profile.json` with your information

4. **Add your projects**:
Edit `data/projects.json` with your projects

5. **Run development server**:
```bash
npm run dev
```

6. **Open browser**:
Visit `http://localhost:3000`

## Usage

- Navigate to `/private` to access your private collections
- Login with the password you set in `.env.local`
- Add/view/delete items in each collection

## Project Structure

- `app/` - Pages and API routes
- `components/` - React components
- `data/` - JSON data files
- `lib/` - Utility functions

## Deployment

Deploy to Vercel:
```bash
npm run build
```

Set environment variables in your hosting platform.
