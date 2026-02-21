from pydantic import BaseModel
from typing import List, Optional


class ProductListItem(BaseModel):
    id: int
    name: str
    slug: str
    banner_image: str

    class Config:
        from_attributes = True


class ProductOut(BaseModel):
    id: int
    name: str
    slug: str
    banner_image: str
    description: str

    class Config:
        from_attributes = True


class BrandSectionOut(BaseModel):
    id: int
    title: str
    text: str
    image_url: str
    layout: str
    display_order: int

    class Config:
        from_attributes = True


class BrandListItem(BaseModel):
    id: int
    name: str
    slug: str
    logo_url: str

    class Config:
        from_attributes = True


class BrandOut(BaseModel):
    id: int
    name: str
    slug: str
    logo_url: str
    banner_image: str
    intro_title: str
    intro_text: str
    sections: List[BrandSectionOut] = []

    class Config:
        from_attributes = True
