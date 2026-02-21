import os
from pathlib import Path
from fastapi import FastAPI, Depends, HTTPException, Request
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse, RedirectResponse
from sqlalchemy.orm import Session
from sqladmin import Admin
from sqladmin.authentication import AuthenticationBackend

from app.database import engine, get_db, SessionLocal, Base
from app.models import Product, Brand, AdminUser
from app.schemas import ProductListItem, ProductOut, BrandListItem, BrandOut
from app.admin import ProductAdmin, BrandAdmin, BrandSectionAdmin

# Create tables
Base.metadata.create_all(bind=engine)


class AdminAuth(AuthenticationBackend):
    async def login(self, request: Request) -> bool:
        form = await request.form()
        username = form.get("username")
        password = form.get("password")
        db = SessionLocal()
        try:
            user = db.query(AdminUser).filter(AdminUser.username == username).first()
            if user and user.check_password(password):
                request.session.update({"admin_user": username})
                return True
        finally:
            db.close()
        return False

    async def logout(self, request: Request) -> bool:
        request.session.clear()
        return True

    async def authenticate(self, request: Request) -> RedirectResponse | bool:
        if "admin_user" not in request.session:
            return RedirectResponse(request.url_for("admin:login"), status_code=302)
        return True


app = FastAPI(title="Gearnix API")

# SQLAdmin with auth
auth_backend = AdminAuth(secret_key="gearnix-admin-secret-key-change-me")
admin = Admin(app, engine, title="Gearnix Admin", authentication_backend=auth_backend)
admin.add_view(ProductAdmin)
admin.add_view(BrandAdmin)
admin.add_view(BrandSectionAdmin)


# ── API Routes ──────────────────────────────────────────

@app.get("/api/products", response_model=list[ProductListItem])
def list_products(db: Session = Depends(get_db)):
    return db.query(Product).order_by(Product.display_order, Product.name).all()


@app.get("/api/products/{slug}", response_model=ProductOut)
def get_product(slug: str, db: Session = Depends(get_db)):
    product = db.query(Product).filter(Product.slug == slug).first()
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    return product


@app.get("/api/brands", response_model=list[BrandListItem])
def list_brands(db: Session = Depends(get_db)):
    return db.query(Brand).order_by(Brand.display_order, Brand.name).all()


@app.get("/api/brands/{slug}", response_model=BrandOut)
def get_brand(slug: str, db: Session = Depends(get_db)):
    brand = db.query(Brand).filter(Brand.slug == slug).first()
    if not brand:
        raise HTTPException(status_code=404, detail="Brand not found")
    return brand


# ── Serve React Frontend ────────────────────────────────

UI_DIR = Path(__file__).resolve().parent.parent / "ui" / "dist"

if UI_DIR.exists():
    app.mount("/assets", StaticFiles(directory=UI_DIR / "assets"), name="static-assets")

    @app.get("/{path:path}")
    async def serve_frontend(path: str):
        # Try to serve the exact file first
        file_path = UI_DIR / path
        if path and file_path.exists() and file_path.is_file():
            return FileResponse(file_path)
        # SPA fallback: serve index.html
        return FileResponse(UI_DIR / "index.html")
