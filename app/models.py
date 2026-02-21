from sqlalchemy import Column, Integer, String, Text, ForeignKey
from sqlalchemy.orm import relationship
from hashlib import sha256
from app.database import Base


class Product(Base):
    __tablename__ = "products"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(200), nullable=False)
    slug = Column(String(200), unique=True, nullable=False, index=True)
    banner_image = Column(String(500), default="")
    description = Column(Text, default="")
    display_order = Column(Integer, default=0)

    def __str__(self):
        return self.name


class Brand(Base):
    __tablename__ = "brands"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(200), nullable=False)
    slug = Column(String(200), unique=True, nullable=False, index=True)
    logo_url = Column(String(500), default="")
    banner_image = Column(String(500), default="")
    intro_title = Column(String(500), default="")
    intro_text = Column(Text, default="")
    display_order = Column(Integer, default=0)

    sections = relationship("BrandSection", back_populates="brand", order_by="BrandSection.display_order", cascade="all, delete-orphan")

    def __str__(self):
        return self.name


class BrandSection(Base):
    __tablename__ = "brand_sections"

    id = Column(Integer, primary_key=True, index=True)
    brand_id = Column(Integer, ForeignKey("brands.id"), nullable=False)
    title = Column(String(500), nullable=False)
    text = Column(Text, default="")
    image_url = Column(String(500), default="")
    layout = Column(String(20), default="left")  # left, right, full
    display_order = Column(Integer, default=0)

    brand = relationship("Brand", back_populates="sections")

    def __str__(self):
        return self.title


class AdminUser(Base):
    __tablename__ = "admin_users"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(100), unique=True, nullable=False)
    password_hash = Column(String(200), nullable=False)

    def set_password(self, password: str):
        self.password_hash = sha256(password.encode()).hexdigest()

    def check_password(self, password: str) -> bool:
        return self.password_hash == sha256(password.encode()).hexdigest()

    def __str__(self):
        return self.username
