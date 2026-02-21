# Gearnix Trading LLC — Website

Full-stack website built with **React** (frontend) + **FastAPI** (backend) + **SQLite** (database) + **SQLAdmin** (admin panel).

## Prerequisites

- Python 3.10+
- Node.js 18+

## Setup

### 1. Clone & enter the project

```bash
cd client_web
```

### 2. Python environment

```bash
python3 -m venv venv
source venv/bin/activate      # Linux/Mac
# venv\Scripts\activate       # Windows
pip install -r requirements.txt
```

### 3. Frontend build

```bash
cd ui
npm install
npx vite build
cd ..
```

### 4. Seed the database

```bash
python -m app.seed
```

### 5. Create an admin user

```bash
python -m app.create_admin admin your_password
```

### 6. Run the server

```bash
uvicorn app.main:app --host 0.0.0.0 --port 8000
```

Visit:
- **Website** → http://localhost:8000
- **Admin Panel** → http://localhost:8000/admin/

## Project Structure

```
├── app/                  # FastAPI backend
│   ├── main.py           # App + API routes + serve frontend
│   ├── models.py         # Product, Brand, BrandSection, AdminUser
│   ├── schemas.py        # Pydantic response models
│   ├── admin.py          # SQLAdmin views
│   ├── database.py       # SQLite connection
│   ├── seed.py           # Seed initial data
│   └── create_admin.py   # CLI: create admin users
├── ui/                   # React frontend (Vite)
│   ├── src/
│   ├── dist/             # Production build (served by FastAPI)
│   └── vite.config.js    # Dev proxy → localhost:8000
├── requirements.txt
└── data.db               # SQLite database (auto-created)
```

## API Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/products` | List all products |
| GET | `/api/products/{slug}` | Product detail |
| GET | `/api/brands` | List all brands |
| GET | `/api/brands/{slug}` | Brand detail + sections |

## Development

Run frontend and backend separately for hot-reload:

```bash
# Terminal 1 — Backend
source venv/bin/activate
uvicorn app.main:app --reload --port 8000

# Terminal 2 — Frontend (with API proxy)
cd ui
npm run dev
```

The Vite dev server proxies `/api` requests to `localhost:8000`.

## Admin Management

```bash
# Create or update admin user
python -m app.create_admin <username> <password>
```

Log in at `/admin/` to manage Products, Brands, and Brand Sections.
