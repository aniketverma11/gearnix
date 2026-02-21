"""Create an admin user for the SQLAdmin panel.

Usage:
    python -m app.create_admin <username> <password>
"""
import sys
import os
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from app.database import engine, SessionLocal, Base
from app.models import AdminUser

Base.metadata.create_all(bind=engine)
db = SessionLocal()

if len(sys.argv) != 3:
    print("Usage: python -m app.create_admin <username> <password>")
    sys.exit(1)

username = sys.argv[1]
password = sys.argv[2]

existing = db.query(AdminUser).filter(AdminUser.username == username).first()
if existing:
    print(f"User '{username}' already exists. Updating password...")
    existing.set_password(password)
else:
    user = AdminUser(username=username)
    user.set_password(password)
    db.add(user)
    print(f"Admin user '{username}' created successfully!")

db.commit()
db.close()
