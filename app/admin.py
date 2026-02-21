from sqladmin import ModelView
from app.models import Product, Brand, BrandSection


class ProductAdmin(ModelView, model=Product):
    column_list = [Product.id, Product.name, Product.slug, Product.display_order]
    column_searchable_list = [Product.name]
    column_sortable_list = [Product.id, Product.name, Product.display_order]
    form_columns = [Product.name, Product.slug, Product.banner_image, Product.description, Product.display_order]
    name = "Product"
    name_plural = "Products"
    icon = "fa-solid fa-box"


class BrandAdmin(ModelView, model=Brand):
    column_list = [Brand.id, Brand.name, Brand.slug, Brand.display_order]
    column_searchable_list = [Brand.name]
    column_sortable_list = [Brand.id, Brand.name, Brand.display_order]
    form_columns = [Brand.name, Brand.slug, Brand.logo_url, Brand.banner_image, Brand.intro_title, Brand.intro_text, Brand.display_order]
    name = "Brand"
    name_plural = "Brands"
    icon = "fa-solid fa-tag"


class BrandSectionAdmin(ModelView, model=BrandSection):
    column_list = [BrandSection.id, BrandSection.brand_id, BrandSection.title, BrandSection.layout, BrandSection.display_order]
    column_sortable_list = [BrandSection.id, BrandSection.brand_id, BrandSection.display_order]
    form_columns = [BrandSection.brand, BrandSection.title, BrandSection.text, BrandSection.image_url, BrandSection.layout, BrandSection.display_order]
    name = "Brand Section"
    name_plural = "Brand Sections"
    icon = "fa-solid fa-layer-group"
