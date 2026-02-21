"""Seed script: populates the database with initial products, brands and brand sections."""
import sys
import os
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from app.database import engine, SessionLocal, Base
from app.models import Product, Brand, BrandSection

Base.metadata.create_all(bind=engine)
db = SessionLocal()

# ── Check if already seeded ─────────────────────────────
if db.query(Product).count() > 0:
    print("Database already seeded. Skipping.")
    db.close()
    exit(0)

# ── Products ────────────────────────────────────────────
products_data = [
    ("Cat6 Cable", "cat6-cable",
     "In Dubai, UAE, Gearnix Trading is the best Cat6 Cable Dealer. A 4 twisted pair sheathed copper wire cable called category 6—also referred to as a network, LAN, or Ethernet Data Cable—can sustain data transfer rates of up to 1 gigabit per second (1,000 megabits). Large files can be transferred quickly across an office network because of this increased bandwidth. A Cat6 cable is typically used to link a computer to a hub, router, or switch so that files can be shared across a network or to access the Internet.\n\nTwisted pair cable is the industry standard for Cat6 cable, which helps to decrease crosstalk and lower noise from electrical interference. Shielded twisted pair (STP) and unshielded twisted pair are the two varieties of twisted pair cable that are available (UTP). Cat6 cable, PVC cable, LSZH cables, outdoor cables, FTP cables, STP cables, SFTP cables, and other types of networking cables are available. We also have Belden and Paige brand audio, communication, speaker, and other cables. We offer network cables that are STC approved, UV listed, and TRA approved in both our premium and budget-friendly brands."),
    ("Cat6a Cable", "cat6a-cable",
     "Gearnix Trading provides premium Cat6a cables in Dubai, UAE. Cat6a (Category 6 Augmented) cables support 10 Gigabit Ethernet speeds up to 100 meters, making them ideal for high-performance networking environments. These cables offer superior crosstalk protection and are suitable for data centers, enterprise networks, and commercial installations."),
    ("Cat7 Cable", "cat7-cable",
     "As a leading Cat7 cable supplier in Dubai, Gearnix Trading offers shielded twisted pair cables that support frequencies up to 600 MHz. Cat7 cables provide exceptional protection against electromagnetic interference, making them perfect for environments where signal integrity is critical."),
    ("Cat8 Cable", "cat8-cable",
     "Gearnix Trading supplies Cat8 cables in Dubai, UAE. Cat8 cables represent the latest in copper cable technology, supporting speeds up to 40 Gbps and frequencies up to 2000 MHz. Ideal for data centers and server rooms where maximum bandwidth is required."),
    ("Fiber Optic Cable", "fiber-optic-cable",
     "Gearnix Trading is your trusted fiber optic cable supplier in Dubai. We offer single-mode and multi-mode fiber optic cables for long-distance and high-bandwidth applications. Our fiber solutions include patch cords, pigtails, and bulk cable for enterprise and telecom installations."),
    ("Audio Cable", "audio-cable",
     "Gearnix Trading supplies premium audio cables in Dubai, UAE. Our range includes professional-grade audio cables from Belden and other top brands, suitable for commercial audio installations, conference rooms, and entertainment venues."),
    ("Speaker Cable", "speaker-cable",
     "Find high-quality speaker cables at Gearnix Trading in Dubai. We supply professional speaker cables for commercial and residential audio systems, including CL2 and CL3 rated cables for in-wall installations."),
    ("Laptops", "laptops",
     "Gearnix Trading offers business-grade laptops from major brands in Dubai, UAE. Whether you need powerful workstations for design professionals or lightweight notebooks for mobile workers, we have the right laptop solution for your business needs."),
    ("Desktops", "desktops",
     "Gearnix Trading supplies enterprise desktop computers in Dubai. From compact mini PCs to powerful workstations, we offer desktop solutions from leading brands that meet the demands of modern business computing."),
    ("Network Cabinets", "network-cabinets",
     "Gearnix Trading provides network cabinets and server racks in Dubai, UAE. We offer wall-mount and floor-standing cabinets in various sizes, complete with accessories like shelves, PDUs, and cable management solutions."),
    ("PDU", "pdu",
     "Power Distribution Units from Gearnix Trading in Dubai. We supply rack-mount PDUs from APC, Schneider, and other leading brands, offering basic, metered, and switched PDU options for data center power management."),
    ("Routers", "routers",
     "Gearnix Trading is a trusted router supplier in Dubai, UAE. We offer enterprise-grade routers from Cisco, Mikrotik, and other brands for WAN connectivity, branch office networking, and internet edge deployments."),
    ("Network Switches", "network-switches",
     "Buy managed and unmanaged network switches from Gearnix Trading in Dubai. We supply Layer 2 and Layer 3 switches from Cisco, HP, Aruba, and other brands for enterprise LAN and data center switching needs."),
    ("IP Phones", "ip-phones",
     "Gearnix Trading supplies IP phones in Dubai, UAE. From basic desk phones to advanced video conferencing endpoints, we offer Cisco, Yealink, and other brand IP telephony solutions for businesses of all sizes."),
    ("IP PBX", "ip-pbx",
     "Gearnix Trading provides IP PBX systems in Dubai for unified communications. Our IP PBX solutions support voice, video, and messaging for small businesses to large enterprises, with on-premises and cloud-based options."),
    ("Media Convertors", "media-convertors",
     "Buy fiber to Ethernet media converters from Gearnix Trading in Dubai. We offer managed and unmanaged media converters for seamless integration between fiber optic and copper networks."),
]

for i, (name, slug, desc) in enumerate(products_data):
    db.add(Product(name=name, slug=slug, description=desc, banner_image="", display_order=i))

# ── Brands ──────────────────────────────────────────────
brands_data = [
    ("Cisco", "cisco", ""),
    ("HP", "hp", ""),
    ("Dell", "dell", ""),
    ("Fortinet", "fortinet", ""),
    ("Hikvision", "hikvision", ""),
    ("APC", "apc", ""),
    ("Aruba", "aruba", ""),
    ("Belden", "belden", ""),
    ("Mikrotik", "mikrotik", ""),
    ("Ubiquiti", "ubiquiti", ""),
    ("Synology", "synology", ""),
    ("Qnap", "qnap", ""),
    ("Yealink", "yealink", ""),
    ("TP-Link", "tp-link", ""),
    ("D-Link", "d-link", ""),
    ("SonicWALL", "sonicwall", ""),
]

brand_objects = {}
for i, (name, slug, logo) in enumerate(brands_data):
    brand = Brand(name=name, slug=slug, logo_url=logo, banner_image="", intro_title="", intro_text="", display_order=i)
    db.add(brand)
    brand_objects[slug] = brand

db.flush()  # Get IDs

# ── Cisco Brand Sections ────────────────────────────────
cisco = brand_objects["cisco"]
cisco.intro_title = "Cisco Dealer in Dubai, UAE"
cisco.intro_text = "As a trusted Cisco distributor in Dubai, Gearnix Trading connects businesses across the UAE with genuine Cisco networking solutions that power today's digital infrastructure. Whether you're building a new data center, upgrading your network security, or expanding your communication systems, we provide a comprehensive range of Cisco products including switches, routers, firewalls, wireless access points, and collaboration tools delivered directly to your doorstep. Our experienced team understands the connectivity challenges faced by organizations of all sizes, from startups to large enterprises, and works closely with each client to ensure they receive the right Cisco solutions for their needs. With years of experience in the UAE market, we've established strong supplier relationships that enable us to offer competitive pricing and consistent availability of Cisco's latest technologies. Based in Dubai, Gearnix Trading proudly serves customers throughout the Emirates, helping them build networks that are secure, scalable, and ready for the future."

cisco_sections = [
    ("Cisco Switches Distributor in Dubai, UAE",
     "When your business network demands reliability and performance, choosing the right switching infrastructure becomes critical to your operations. Gearnix Trading brings Cisco's complete portfolio of networking switches to organizations across Dubai and the UAE, from compact models for small offices to enterprise-grade data center solutions. We understand that every business has unique connectivity requirements whether you're scaling a growing company, upgrading legacy systems, or building a new network from the ground up. Our team works closely with clients to identify the exact Cisco switch models that match their bandwidth needs, security requirements, and budget considerations. Located in Dubai, we serve businesses throughout the Emirates who rely on Cisco's proven technology to keep their networks running smoothly.",
     "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&q=80", "left"),
    ("Cisco Dealer in Dubai, UAE",
     "When your business needs dependable wireless connectivity across offices, warehouses, or retail spaces, choosing the right access points makes all the difference. At Gearnix Trading, we help organizations throughout Dubai and the UAE get their hands on genuine Cisco access points that match their specific networking requirements. Whether you're expanding an existing network or building one from scratch, we understand that downtime isn't an option and that getting the right equipment quickly matters to your operations. Our team knows the Cisco product range inside out, from compact models suitable for small offices to high-performance units designed for demanding environments with hundreds of concurrent users. We work directly with businesses across Dubai to ensure they receive authentic Cisco hardware along with practical guidance on selecting access points that fit their coverage needs, user capacity, and budget.",
     "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=500&q=80", "right"),
    ("Cisco Firewalls Supplier in Dubai, UAE",
     "When it comes to protecting your business network in Dubai, Cisco Firewalls stand as one of the most reliable solutions available. At Gearnix Trading, we understand that every organization faces unique security challenges, whether you're managing a small office network or overseeing multiple locations across the UAE. Our team works directly with businesses throughout Dubai to provide the right Cisco Firewall models that match your specific requirements and budget. From the compact ASA series for growing companies to the advanced Firepower threat defense systems for enterprises dealing with complex security demands, we help you find equipment that actually fits your needs. We've seen firsthand how the right firewall can mean the difference between smooth operations and costly downtime, which is why we take the time to understand what you're dealing with before recommending any solution.",
     "", "full"),
    ("Cisco Routers in Dubai, UAE",
     "When your business needs reliable networking infrastructure, choosing the right partner makes all the difference. Gearnix Trading serves as a trusted Cisco Supplier in Dubai, UAE, connecting enterprises across the region with routing solutions that keep their operations running smoothly. Whether you're scaling your network to accommodate growth, upgrading legacy systems, or building connectivity from the ground up, we understand the challenges businesses face in today's digital landscape. Our team works directly with companies throughout Dubai and the wider UAE to source the specific Cisco router models that match their requirements from small branch offices needing secure connectivity to large enterprises managing complex multi-site networks. We've built our reputation on straightforward communication, transparent pricing, and actually understanding what our clients need rather than pushing unnecessary equipment.",
     "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500&q=80", "left"),
    ("Cisco IP Phones Distributor in Dubai, UAE",
     "When businesses across Dubai and the UAE need reliable communication systems, they turn to Gearnix Trading for Cisco IP phones that keep their teams connected. We understand that every missed call or dropped connection can mean lost opportunities, which is why we focus on helping companies find the right Cisco phones for their specific needs. Whether you're setting up a small office in Business Bay or expanding your enterprise across multiple Emirates, our team takes time to understand your communication requirements and budget constraints. From the compact Cisco 6800 Series perfect for desk workers to the advanced 8800 Series designed for executives and managers, we guide you through selecting phones that match how your people actually work.",
     "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?w=500&q=80", "right"),
]

for i, (title, text, img, layout) in enumerate(cisco_sections):
    db.add(BrandSection(brand_id=cisco.id, title=title, text=text, image_url=img, layout=layout, display_order=i))

db.commit()
db.close()
print(f"Seeded {len(products_data)} products, {len(brands_data)} brands, and {len(cisco_sections)} Cisco sections.")
