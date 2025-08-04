
const { PrismaClient } = require ('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');
  await prisma.deal.deleteMany({}); // Clear existing data

  const deals = [
    {
      "name": 'Website Redesign for Acme Inc.',
      "contactName": 'John Doe',
      "company": 'Acme Inc.',
      "stage": 'In_Progress',
      "value": 15000.00,
      "closeDate": new Date('2025-12-31'),
    },
    {
      "name": 'Server Migration for Beta Corp.',
      "contactName": 'Jane Smith',
      "company": 'Beta Corp.',
      "stage": 'New',
      "value": 2500.00,
      "closeDate": new Date('2025-11-15'),
    },
    
    {
      "name": 'CRM Implementation for Gamma Ltd.',
      "contactName": 'Peter Jones',
      "company": 'Gamma Ltd.',
      "stage": 'Won',
      "value": 50000.00,
      "closeDate": new Date('2025-06-20'),
    },
    {
      "name": 'Marketing Campaign for Delta LLC',
      "contactName": 'Maria Rodriguez',
      "company": 'Delta LLC',
      "stage": 'Lost',
      "value": 8000.00,
      "closeDate": new Date('2025-07-01'),
    },
  {
    "name": "Cloud Migration for Tech Solutions",
    "contactName": "Alice Johnson",
    "company": "Tech Solutions Inc.",
    "stage": "In_Progress",
    "value": 25000.00,
    "closeDate": "2025-11-20T00:00:00.000Z"
  },
  {
    "name": "Mobile App Development for Innovate Corp.",
    "contactName": "Bob Williams",
    "company": "Innovate Corp.",
    "stage": "New",
    "value": 12000.00,
    "closeDate": "2026-01-10T00:00:00.000Z"
  },
  {
    "name": "Data Analytics Project for Global Enterprises",
    "contactName": "Catherine Davis",
    "company": "Global Enterprises",
    "stage": "Won",
    "value": 45000.00,
    "closeDate": "2025-09-05T00:00:00.000Z"
  },
  {
    "name": "Cybersecurity Audit for SecureNet",
    "contactName": "David Miller",
    "company": "SecureNet Systems",
    "stage": "Lost",
    "value": 7500.00,
    "closeDate": "2025-08-15T00:00:00.000Z"
  },
  {
    "name": "E-commerce Platform for Retail Innovations",
    "contactName": "Emily Brown",
    "company": "Retail Innovations",
    "stage": "In_Progress",
    "value": 30000.00,
    "closeDate": "2026-03-25T00:00:00.000Z"
  },
  {
    "name": "IT Infrastructure Upgrade for City Council",
    "contactName": "Frank White",
    "company": "City Council Services",
    "stage": "New",
    "value": 18000.00,
    "closeDate": "2025-10-01T00:00:00.000Z"
  },
  {
    "name": "Digital Marketing Strategy for Brand Builders",
    "contactName": "Grace Taylor",
    "company": "Brand Builders Agency",
    "stage": "Won",
    "value": 9000.00,
    "closeDate": "2025-07-20T00:00:00.000Z"
  },
  {
    "name": "HR Software Integration for People Solutions",
    "contactName": "Henry Wilson",
    "company": "People Solutions Group",
    "stage": "Lost",
    "value": 11000.00,
    "closeDate": "2025-09-30T00:00:00.000Z"
  },
  {
    "name": "Supply Chain Optimization for Logistics Masters",
    "contactName": "Ivy Moore",
    "company": "Logistics Masters",
    "stage": "In_Progress",
    "value": 35000.00,
    "closeDate": "2026-02-14T00:00:00.000Z"
  },
  {
    "name": "Custom Software for Finance First",
    "contactName": "Jack Green",
    "company": "Finance First Inc.",
    "stage": "New",
    "value": 22000.00,
    "closeDate": "2025-12-05T00:00:00.000Z"
  },
  {
    "name": "Network Security for Data Guard",
    "contactName": "Karen Hall",
    "company": "Data Guard Security",
    "stage": "Won",
    "value": 16000.00,
    "closeDate": "2025-08-01T00:00:00.000Z"
  },
  {
    "name": "Website Development for Art Gallery",
    "contactName": "Leo King",
    "company": "Artistic Visions Gallery",
    "stage": "Lost",
    "value": 6000.00,
    "closeDate": "2025-10-25T00:00:00.000Z"
  },
  {
    "name": "CRM Upgrade for Customer Connect",
    "contactName": "Mia Wright",
    "company": "Customer Connect Solutions",
    "stage": "In_Progress",
    "value": 28000.00,
    "closeDate": "2026-04-01T00:00:00.000Z"
  },
  {
    "name": "ERP System Implementation for Manufacturing Co.",
    "contactName": "Noah Scott",
    "company": "Precision Manufacturing Co.",
    "stage": "New",
    "value": 60000.00,
    "closeDate": "2026-01-20T00:00:00.000Z"
  },
  {
    "name": "Cloud Storage Solution for Archive Solutions",
    "contactName": "Olivia Baker",
    "company": "Archive Solutions Ltd.",
    "stage": "Won",
    "value": 10000.00,
    "closeDate": "2025-07-10T00:00:00.000Z"
  },
  {
    "name": "AI Integration for Smart Insights",
    "contactName": "Paul Adams",
    "company": "Smart Insights AI",
    "stage": "Lost",
    "value": 40000.00,
    "closeDate": "2025-11-01T00:00:00.000Z"
  },
  {
    "name": "Blockchain Development for Trust Ledger",
    "contactName": "Quinn Nelson",
    "company": "Trust Ledger Corp.",
    "stage": "In_Progress",
    "value": 70000.00,
    "closeDate": "2026-05-01T00:00:00.000Z"
  },
  {
    "name": "VR Training Simulation for Future Learning",
    "contactName": "Rachel Carter",
    "company": "Future Learning Institute",
    "stage": "New",
    "value": 19000.00,
    "closeDate": "2025-12-10T00:00:00.000Z"
  },
  {
    "name": "IoT Device Management for Connected Homes",
    "contactName": "Sam Roberts",
    "company": "Connected Homes Inc.",
    "stage": "Won",
    "value": 28000.00,
    "closeDate": "2025-08-22T00:00:00.000Z"
  },
  {
    "name": "Big Data Consulting for Data Driven Decisions",
    "contactName": "Tina Evans",
    "company": "Data Driven Decisions",
    "stage": "Lost",
    "value": 20000.00,
    "closeDate": "2025-10-05T00:00:00.000Z"
  },
  {
    "name": "Custom Web Application for Event Planners",
    "contactName": "Umar Khan",
    "company": "Event Master Planners",
    "stage": "In_Progress",
    "value": 17000.00,
    "closeDate": "2026-03-01T00:00:00.000Z"
  },
  {
    "name": "Managed IT Services for Small Business",
    "contactName": "Victoria Lewis",
    "company": "Local Business Support",
    "stage": "New",
    "value": 5000.00,
    "closeDate": "2025-11-25T00:00:00.000Z"
  },
  {
    "name": "DevOps Implementation for Code Flow",
    "contactName": "William Clark",
    "company": "Code Flow Solutions",
    "stage": "Won",
    "value": 21000.00,
    "closeDate": "2025-09-12T00:00:00.000Z"
  },
  {
    "name": "UI/UX Redesign for User Friendly Apps",
    "contactName": "Xena Young",
    "company": "User Friendly Apps",
    "stage": "Lost",
    "value": 9500.00,
    "closeDate": "2025-12-01T00:00:00.000Z"
  },
  {
    "name": "API Development for Interconnect Systems",
    "contactName": "Yara Hernandez",
    "company": "Interconnect Systems",
    "stage": "In_Progress",
    "value": 14000.00,
    "closeDate": "2026-04-10T00:00:00.000Z"
  },
  {
    "name": "Database Optimization for Data Vault",
    "contactName": "Zack White",
    "company": "Data Vault Solutions",
    "stage": "New",
    "value": 13000.00,
    "closeDate": "2026-01-01T00:00:00.000Z"
  },
  {
    "name": "Marketing Automation for Growth Hub",
    "contactName": "Anna Green",
    "company": "Growth Hub Marketing",
    "stage": "Won",
    "value": 18000.00,
    "closeDate": "2025-07-28T00:00:00.000Z"
  },
  {
    "name": "Cloud Security Assessment for Cyber Shield",
    "contactName": "Ben Carter",
    "company": "Cyber Shield Security",
    "stage": "Lost",
    "value": 10000.00,
    "closeDate": "2025-11-10T00:00:00.000Z"
  },
  {
    "name": "Custom CRM for Sales Force",
    "contactName": "Chloe Adams",
    "company": "Sales Force Solutions",
    "stage": "In_Progress",
    "value": 40000.00,
    "closeDate": "2026-02-28T00:00:00.000Z"
  },
  {
    "name": "Payment Gateway Integration for E-Pay",
    "contactName": "Daniel Scott",
    "company": "E-Pay Services",
    "stage": "New",
    "value": 8000.00,
    "closeDate": "2025-10-15T00:00:00.000Z"
  },
  {
    "name": "Fleet Management System for Transport Co.",
    "contactName": "Ella Baker",
    "company": "City Transport Co.",
    "stage": "Won",
    "value": 32000.00,
    "closeDate": "2025-08-05T00:00:00.000Z"
  },
  {
    "name": "Inventory Management for Warehouse Solutions",
    "contactName": "Finn Roberts",
    "company": "Warehouse Solutions",
    "stage": "Lost",
    "value": 12000.00,
    "closeDate": "2025-09-20T00:00:00.000Z"
  },
  {
    "name": "Patient Management System for Health Clinic",
    "contactName": "Gina Davis",
    "company": "Community Health Clinic",
    "stage": "In_Progress",
    "value": 27000.00,
    "closeDate": "2026-03-10T00:00:00.000Z"
  },
  {
    "name": "E-learning Platform for Education Hub",
    "contactName": "Harry Wilson",
    "company": "Education Hub Online",
    "stage": "New",
    "value": 20000.00,
    "closeDate": "2026-01-25T00:00:00.000Z"
  },
  {
    "name": "Financial Reporting Tool for Accounting Firm",
    "contactName": "Isabel Moore",
    "company": "Precision Accounting Ltd.",
    "stage": "Won",
    "value": 15000.00,
    "closeDate": "2025-07-05T00:00:00.000Z"
  },
  {
    "name": "Legal Document Automation for Law Firm",
    "contactName": "Jake Green",
    "company": "Legal Aid Services",
    "stage": "Lost",
    "value": 10000.00,
    "closeDate": "2025-10-10T00:00:00.000Z"
  },
  {
    "name": "Restaurant POS System for Dine Out",
    "contactName": "Kelly Hall",
    "company": "Dine Out Restaurants",
    "stage": "In_Progress",
    "value": 9000.00,
    "closeDate": "2026-04-20T00:00:00.000Z"
  },
  {
    "name": "Hotel Booking System for Stay Inn",
    "contactName": "Liam King",
    "company": "Stay Inn Hotels",
    "stage": "New",
    "value": 24000.00,
    "closeDate": "2025-12-20T00:00:00.000Z"
  },
  {
    "name": "Gym Management Software for Fit Life",
    "contactName": "Maya Wright",
    "company": "Fit Life Gyms",
    "stage": "Won",
    "value": 7000.00,
    "closeDate": "2025-08-10T00:00:00.000Z"
  },
  {
    "name": "Real Estate CRM for Property Pros",
    "contactName": "Nathan Scott",
    "company": "Property Pros Realty",
    "stage": "Lost",
    "value": 16000.00,
    "closeDate": "2025-11-05T00:00:00.000Z"
  },
  {
    "name": "Event Management Software for Gala Events",
    "contactName": "Oliver Baker",
    "company": "Gala Events & Planning",
    "stage": "In_Progress",
    "value": 19000.00,
    "closeDate": "2026-05-15T00:00:00.000Z"
  },
  {
    "name": "Supply Chain Visibility for Global Trade",
    "contactName": "Penny Adams",
    "company": "Global Trade Logistics",
    "stage": "New",
    "value": 38000.00,
    "closeDate": "2026-01-05T00:00:00.000Z"
  },
  {
    "name": "Manufacturing Automation for RoboTech",
    "contactName": "Quentin Nelson",
    "company": "RoboTech Solutions",
    "stage": "Won",
    "value": 55000.00,
    "closeDate": "2025-07-18T00:00:00.000Z"
  },
  {
    "name": "Customer Service AI Chatbot for HelpDesk",
    "contactName": "Ruby Carter",
    "company": "HelpDesk AI",
    "stage": "Lost",
    "value": 13000.00,
    "closeDate": "2025-10-20T00:00:00.000Z"
  },
  {
    "name": "Energy Management System for Green Power",
    "contactName": "Steve Roberts",
    "company": "Green Power Solutions",
    "stage": "In_Progress",
    "value": 42000.00,
    "closeDate": "2026-03-05T00:00:00.000Z"
  },
  {
    "name": "Financial Planning Software for Wealth Advisors",
    "contactName": "Tara Evans",
    "company": "Wealth Advisors Group",
    "stage": "New",
    "value": 11000.00,
    "closeDate": "2025-11-30T00:00:00.000Z"
  },
  {
    "name": "Medical Billing Software for MedCare",
    "contactName": "Uma Khan",
    "company": "MedCare Billing Services",
    "stage": "Won",
    "value": 29000.00,
    "closeDate": "2025-09-01T00:00:00.000Z"
  },
  {
    "name": "Legal Tech Platform for Justice Connect",
    "contactName": "Victor Lewis",
    "company": "Justice Connect Legal",
    "stage": "Lost",
    "value": 14000.00,
    "closeDate": "2025-12-15T00:00:00.000Z"
  },
  {
    "name": "Construction Project Management for BuildRight",
    "contactName": "Wendy Clark",
    "company": "BuildRight Construction",
    "stage": "In_Progress",
    "value": 50000.00,
    "closeDate": "2026-04-25T00:00:00.000Z"
  },
  {
    "name": "Education Management System for LearnFast",
    "contactName": "Xavier Young",
    "company": "LearnFast Academy",
    "stage": "New",
    "value": 26000.00,
    "closeDate": "2026-01-15T00:00:00.000Z"
  },
  {
    "name": "Logistics Software for Speedy Delivery",
    "contactName": "Yvonne Hernandez",
    "company": "Speedy Delivery Services",
    "stage": "Won",
    "value": 23000.00,
    "closeDate": "2025-08-28T00:00:00.000Z"
  },
  {
    "name": "Waste Management Optimization for Green City",
    "contactName": "Zoe White",
    "company": "Green City Solutions",
    "stage": "Lost",
    "value": 17000.00,
    "closeDate": "2025-10-30T00:00:00.000Z"
  },
  {
    "name": "Retail Analytics for Shop Smart",
    "contactName": "Alex Johnson",
    "company": "Shop Smart Retail",
    "stage": "In_Progress",
    "value": 31000.00,
    "closeDate": "2026-03-18T00:00:00.000Z"
  },
  {
    "name": "Automotive Software for Drive Tech",
    "contactName": "Brenda Williams",
    "company": "Drive Tech Innovations",
    "stage": "New",
    "value": 19000.00,
    "closeDate": "2025-12-08T00:00:00.000Z"
  },
  {
    "name": "Agriculture Tech Solution for Farm Fresh",
    "contactName": "Chris Davis",
    "company": "Farm Fresh Produce",
    "stage": "Won",
    "value": 38000.00,
    "closeDate": "2025-07-25T00:00:00.000Z"
  },
  {
    "name": "Government IT Consulting for Public Sector",
    "contactName": "Diana Miller",
    "company": "Public Sector Solutions",
    "stage": "Lost",
    "value": 25000.00,
    "closeDate": "2025-09-08T00:00:00.000Z"
  },
  {
    "name": "Non-profit CRM for Helping Hands",
    "contactName": "Ethan Brown",
    "company": "Helping Hands Foundation",
    "stage": "In_Progress",
    "value": 10000.00,
    "closeDate": "2026-02-01T00:00:00.000Z"
  },
  {
    "name": "Sports Analytics Platform for Game Changers",
    "contactName": "Fiona White",
    "company": "Game Changers Sports",
    "stage": "New",
    "value": 22000.00,
    "closeDate": "2025-11-18T00:00:00.000Z"
  },
  {
    "name": "Artifical Intelligence for Visionary Tech",
    "contactName": "George Taylor",
    "company": "Visionary Tech",
    "stage": "Won",
    "value": 65000.00,
    "closeDate": "2025-08-08T00:00:00.000Z"
  },
  {
    "name": "Cyber Threat Intelligence for Sentinel Security",
    "contactName": "Hannah Wilson",
    "company": "Sentinel Security",
    "stage": "Lost",
    "value": 18000.00,
    "closeDate": "2025-10-12T00:00:00.000Z"
  },
  {
    "name": "Smart City Solutions for Urban Future",
    "contactName": "Ian Moore",
    "company": "Urban Future Initiatives",
    "stage": "In_Progress",
    "value": 80000.00,
    "closeDate": "2026-05-20T00:00:00.000Z"
  },
  {
    "name": "Robotics Process Automation for AutoFlow",
    "contactName": "Jessica Green",
    "company": "AutoFlow Automation",
    "stage": "New",
    "value": 30000.00,
    "closeDate": "2026-01-08T00:00:00.000Z"
  },
  {
    "name": "Space Tech Software for Star Systems",
    "contactName": "Kevin Hall",
    "company": "Star Systems Aerospace",
    "stage": "Won",
    "value": 90000.00,
    "closeDate": "2025-07-15T00:00:00.000Z"
  },
  {
    "name": "Environmental Monitoring System for EcoGuard",
    "contactName": "Laura King",
    "company": "EcoGuard Solutions",
    "stage": "Lost",
    "value": 28000.00,
    "closeDate": "2025-11-22T00:00:00.000Z"
  },
  {
    "name": "Food Delivery App for Quick Eats",
    "contactName": "Mark Wright",
    "company": "Quick Eats Delivery",
    "stage": "In_Progress",
    "value": 20000.00,
    "closeDate": "2026-03-08T00:00:00.000Z"
  },
  {
    "name": "Fashion E-commerce for Style Trends",
    "contactName": "Nancy Scott",
    "company": "Style Trends Boutique",
    "stage": "New",
    "value": 16000.00,
    "closeDate": "2025-12-28T00:00:00.000Z"
  },
  {
    "name": "Music Streaming Platform for Sound Wave",
    "contactName": "Oscar Baker",
    "company": "Sound Wave Music",
    "stage": "Won",
    "value": 48000.00,
    "closeDate": "2025-08-02T00:00:00.000Z"
  },
  {
    "name": "Podcast Production Software for Audio Hub",
    "contactName": "Pamela Adams",
    "company": "Audio Hub Productions",
    "stage": "Lost",
    "value": 7000.00,
    "closeDate": "2025-10-01T00:00:00.000Z"
  },
  {
    "name": "Gaming Platform Development for Pixel Play",
    "contactName": "Quinn Carter",
    "company": "Pixel Play Games",
    "stage": "In_Progress",
    "value": 60000.00,
    "closeDate": "2026-04-05T00:00:00.000Z"
  },
  {
    "name": "Travel Booking System for Wanderlust Tours",
    "contactName": "Ryan Roberts",
    "company": "Wanderlust Tours",
    "stage": "New",
    "value": 29000.00,
    "closeDate": "2026-01-02T00:00:00.000Z"
  },
  {
    "name": "Fitness Tracking App for Active Life",
    "contactName": "Sophia Evans",
    "company": "Active Life Fitness",
    "stage": "Won",
    "value": 11000.00,
    "closeDate": "2025-07-08T00:00:00.000Z"
  },
  {
    "name": "Home Automation System for Smart Living",
    "contactName": "Tom Khan",
    "company": "Smart Living Solutions",
    "stage": "Lost",
    "value": 15000.00,
    "closeDate": "2025-11-12T00:00:00.000Z"
  },
  {
    "name": "Education Content Platform for Knowledge Hub",
    "contactName": "Uma Lewis",
    "company": "Knowledge Hub Learning",
    "stage": "In_Progress",
    "value": 33000.00,
    "closeDate": "2026-02-20T00:00:00.000Z"
  },
  {
    "name": "Manufacturing Execution System for ProdFlow",
    "contactName": "Victor Clark",
    "company": "ProdFlow Manufacturing",
    "stage": "New",
    "value": 55000.00,
    "closeDate": "2025-10-28T00:00:00.000Z"
  },
  {
    "name": "Healthcare Integration for Unified Health",
    "contactName": "Zara Young",
    "company": "Unified Health Systems",
    "stage": "Won",
    "value": 75000.00,
    "closeDate": "2025-09-18T00:00:00.000Z"
  },
  {
    "name": "Financial Fraud Detection for Secure Finance",
    "contactName": "Adam Hernandez",
    "company": "Secure Finance Solutions",
    "stage": "Lost",
    "value": 30000.00,
    "closeDate": "2025-12-07T00:00:00.000Z"
  },
  {
    "name": "Supply Chain Visibility for Global Logistics",
    "contactName": "Bella White",
    "company": "Global Logistics Corp.",
    "stage": "In_Progress",
    "value": 48000.00,
    "closeDate": "2026-05-05T00:00:00.000Z"
  },
  {
    "name": "Smart Grid Solutions for Power Grid",
    "contactName": "Caleb Johnson",
    "company": "Power Grid Innovations",
    "stage": "New",
    "value": 40000.00,
    "closeDate": "2026-01-12T00:00:00.000Z"
  },
  {
    "name": "Aerospace Software for Sky High Tech",
    "contactName": "Daisy Williams",
    "company": "Sky High Tech",
    "stage": "Won",
    "value": 100000.00,
    "closeDate": "2025-07-22T00:00:00.000Z"
  },
  {
    "name": "Marine Navigation System for Sea Explorers",
    "contactName": "Eli Davis",
    "company": "Sea Explorers Inc.",
    "stage": "Lost",
    "value": 22000.00,
    "closeDate": "2025-11-08T00:00:00.000Z"
  },
  {
    "name": "Waste Management Software for EcoCycle",
    "contactName": "Fay Miller",
    "company": "EcoCycle Solutions",
    "stage": "In_Progress",
    "value": 16000.00,
    "closeDate": "2026-03-22T00:00:00.000Z"
  },
  {
    "name": "Smart Retail Solutions for Future Shop",
    "contactName": "Gus Brown",
    "company": "Future Shop Retail",
    "stage": "New",
    "value": 28000.00,
    "closeDate": "2025-12-03T00:00:00.000Z"
  },
  {
    "name": "Automated Warehouse System for Swift Logistics",
    "contactName": "Holly Taylor",
    "company": "Swift Logistics",
    "stage": "Won",
    "value": 70000.00,
    "closeDate": "2025-08-18T00:00:00.000Z"
  },
  {
    "name": "Construction Site Monitoring for Site Watch",
    "contactName": "Ivan Wilson",
    "company": "Site Watch Tech",
    "stage": "Lost",
    "value": 19000.00,
    "closeDate": "2025-10-22T00:00:00.000Z"
  },
  {
    "name": "E-health Records System for Digital Clinic",
    "contactName": "Julia Moore",
    "company": "Digital Clinic Solutions",
    "stage": "In_Progress",
    "value": 38000.00,
    "closeDate": "2026-04-15T00:00:00.000Z"
  },
  {
    "name": "Online Learning Management for EduVerse",
    "contactName": "Kyle Green",
    "company": "EduVerse Platform",
    "stage": "New",
    "value": 25000.00,
    "closeDate": "2026-01-28T00:00:00.000Z"
  },
  {
    "name": "Restaurant Management System for Chef's Choice",
    "contactName": "Lily Hall",
    "company": "Chef's Choice Restaurants",
    "stage": "Won",
    "value": 12000.00,
    "closeDate": "2025-07-02T00:00:00.000Z"
  },
  {
    "name": "Hotel Property Management for Grand Stay",
    "contactName": "Max King",
    "company": "Grand Stay Hotels",
    "stage": "Lost",
    "value": 20000.00,
    "closeDate": "2025-11-28T00:00:00.000Z"
  },
  {
    "name": "Gym Membership Portal for Peak Fitness",
    "contactName": "Nora Wright",
    "company": "Peak Fitness Centers",
    "stage": "In_Progress",
    "value": 8500.00,
    "closeDate": "2026-02-10T00:00:00.000Z"
  },
  {
    "name": "Real Estate Listing Platform for Home Finder",
    "contactName": "Owen Scott",
    "company": "Home Finder Realty",
    "stage": "New",
    "value": 17000.00,
    "closeDate": "2025-10-07T00:00:00.000Z"
  },
  {
    "name": "Concert Ticketing System for Live Events",
    "contactName": "Paige Baker",
    "company": "Live Events Co.",
    "stage": "Won",
    "value": 35000.00,
    "closeDate": "2025-09-25T00:00:00.000Z"
  },
  {
    "name": "Logistics Route Optimization for Route Master",
    "contactName": "Cody Adams",
    "company": "Route Master Logistics",
    "stage": "Lost",
    "value": 24000.00,
    "closeDate": "2025-12-12T00:00:00.000Z"
  },
  {
    "name": "Manufacturing Quality Control for QualiTech",
    "contactName": "Dana Nelson",
    "company": "QualiTech Systems",
    "stage": "In_Progress",
    "value": 45000.00,
    "closeDate": "2026-04-08T00:00:00.000Z"
  },
  {
    "name": "Customer Feedback Platform for Voice of Customer",
    "contactName": "Eric Carter",
    "company": "Voice of Customer Inc.",
    "stage": "New",
    "value": 9000.00,
    "closeDate": "2026-01-18T00:00:00.000Z"
  },
  {
    "name": "Energy Grid Monitoring for Power Watch",
    "contactName": "Fay Roberts",
    "company": "Power Watch Utilities",
    "stage": "Won",
    "value": 52000.00,
    "closeDate": "2025-08-12T00:00:00.000Z"
  },
  {
    "name": "Financial Advisory Portal for Invest Smart",
    "contactName": "Gail Evans",
    "company": "Invest Smart Advisors",
    "stage": "Lost",
    "value": 13000.00,
    "closeDate": "2025-10-03T00:00:00.000Z"
  },
  {
    "name": "Medical Research Data Management for BioMed",
    "contactName": "Hugh Khan",
    "company": "BioMed Research",
    "stage": "In_Progress",
    "value": 60000.00,
    "closeDate": "2026-05-08T00:00:00.000Z"
  },
  {
    "name": "Legal Case Management for LawFlow",
    "contactName": "Irene Lewis",
    "company": "LawFlow Solutions",
    "stage": "New",
    "value": 21000.00,
    "closeDate": "2025-12-22T00:00:00.000Z"
  },
  {
    "name": "Construction Safety Management for Safe Site",
    "contactName": "Jack Clark",
    "company": "Safe Site Construction",
    "stage": "Won",
    "value": 18000.00,
    "closeDate": "2025-09-03T00:00:00.000Z"
  },
  {
    "name": "School Administration Software for Campus Hub",
    "contactName": "Kim Young",
    "company": "Campus Hub Education",
    "stage": "Lost",
    "value": 11000.00,
    "closeDate": "2025-11-15T00:00:00.000Z"
  },
  {
    "name": "Courier Service Tracking for Swift Track",
    "contactName": "Leo Hernandez",
    "company": "Swift Track Couriers",
    "stage": "In_Progress",
    "value": 15000.00,
    "closeDate": "2026-03-28T00:00:00.000Z"
  },
  {
    "name": "Smart Waste Collection for Clean City",
    "contactName": "Mona White",
    "company": "Clean City Initiatives",
    "stage": "New",
    "value": 14000.00,
    "closeDate": "2026-01-07T00:00:00.000Z"
  },
  {
    "name": "Retail POS System for Quick Checkout",
    "contactName": "Nick Johnson",
    "company": "Quick Checkout Solutions",
    "stage": "Won",
    "value": 9000.00,
    "closeDate": "2025-07-12T00:00:00.000Z"
  },
  {
    "name": "Vehicle Diagnostics Software for Auto Health",
    "contactName": "Olivia Williams",
    "company": "Auto Health Diagnostics",
    "stage": "Lost",
    "value": 10000.00,
    "closeDate": "2025-10-18T00:00:00.000Z"
  },
  {
    "name": "Farm Management Software for AgriGrow",
    "contactName": "Paul Davis",
    "company": "AgriGrow Solutions",
    "stage": "In_Progress",
    "value": 26000.00,
    "closeDate": "2026-02-25T00:00:00.000Z"
  },
  {
    "name": "Public Sector Data Management for GovData",
    "contactName": "Quinn Miller",
    "company": "GovData Solutions",
    "stage": "New",
    "value": 32000.00,
    "closeDate": "2025-11-02T00:00:00.000Z"
  },
  {
    "name": "Charity Donation Platform for Give Back",
    "contactName": "Rachel Brown",
    "company": "Give Back Charity",
    "stage": "Won",
    "value": 6000.00,
    "closeDate": "2025-09-10T00:00:00.000Z"
  },
  {
    "name": "Sports Event Management for Pro Sports",
    "contactName": "Sam Taylor",
    "company": "Pro Sports Events",
    "stage": "Lost",
    "value": 19000.00,
    "closeDate": "2025-12-05T00:00:00.000Z"
  },
  {
    "name": "Predictive Analytics for Future Trends",
    "contactName": "Tina Wilson",
    "company": "Future Trends Analytics",
    "stage": "In_Progress",
    "value": 40000.00,
    "closeDate": "2026-04-01T00:00:00.000Z"
  },
  {
    "name": "Cybersecurity Training Platform for Secure Minds",
    "contactName": "Umar Moore",
    "company": "Secure Minds Training",
    "stage": "New",
    "value": 10000.00,
    "closeDate": "2026-01-10T00:00:00.000Z"
  },
  {
    "name": "Smart City Traffic Management for Urban Flow",
    "contactName": "Victoria Green",
    "company": "Urban Flow Solutions",
    "stage": "Won",
    "value": 85000.00,
    "closeDate": "2025-07-29T00:00:00.000Z"
  },
  {
    "name": "Robotics for Logistics Automation for Move Fast",
    "contactName": "William Hall",
    "company": "Move Fast Logistics",
    "stage": "Lost",
    "value": 35000.00,
    "closeDate": "2025-11-19T00:00:00.000Z"
  },
  {
    "name": "Aerospace Simulation Software for Flight Sim",
    "contactName": "Xena King",
    "company": "Flight Sim Technologies",
    "stage": "In_Progress",
    "value": 95000.00,
    "closeDate": "2026-03-01T00:00:00.000Z"
  },
  {
    "name": "Environmental Impact Assessment for Green Earth",
    "contactName": "Yara Wright",
    "company": "Green Earth Consulting",
    "stage": "New",
    "value": 24000.00,
    "closeDate": "2025-12-18T00:00:00.000Z"
  },
  {
    "name": "Food Service Management for Taste Buds",
    "contactName": "Zack Scott",
    "company": "Taste Buds Catering",
    "stage": "Won",
    "value": 13000.00,
    "closeDate": "2025-08-09T00:00:00.000Z"
  },
  {
    "name": "Fashion Retail Analytics for Trend Setters",
    "contactName": "Anna Baker",
    "company": "Trend Setters Fashion",
    "stage": "Lost",
    "value": 11000.00,
    "closeDate": "2025-10-04T00:00:00.000Z"
  },
  {
    "name": "Music Production Software for Beat Makers",
    "contactName": "Ben Adams",
    "company": "Beat Makers Studio",
    "stage": "In_Progress",
    "value": 20000.00,
    "closeDate": "2026-04-12T00:00:00.000Z"
  },
  {
    "name": "Podcast Hosting Platform for PodCast Pro",
    "contactName": "Chloe Nelson",
    "company": "PodCast Pro Hosting",
    "stage": "New",
    "value": 8000.00,
    "closeDate": "2026-01-20T00:00:00.000Z"
  },
  {
    "name": "Mobile Gaming Development for Fun Play",
    "contactName": "Daniel Carter",
    "company": "Fun Play Games",
    "stage": "Won",
    "value": 70000.00,
    "closeDate": "2025-07-07T00:00:00.000Z"
  },
  {
    "name": "Travel Agency CRM for Global Journeys",
    "contactName": "Ella Roberts",
    "company": "Global Journeys Travel",
    "stage": "Lost",
    "value": 16000.00,
    "closeDate": "2025-11-25T00:00:00.000Z"
  },
  {
    "name": "Fitness App for Personal Trainers",
    "contactName": "Finn Evans",
    "company": "Personal Trainers Network",
    "stage": "In_Progress",
    "value": 10000.00,
    "closeDate": "2026-03-15T00:00:00.000Z"
  },
  {
    "name": "Smart Home Security for Guardian Homes",
    "contactName": "Gina Khan",
    "company": "Guardian Homes Security",
    "stage": "New",
    "value": 18000.00,
    "closeDate": "2025-12-01T00:00:00.000Z"
  },
  {
    "name": "Online Education Portal for Future Minds",
    "contactName": "Harry Lewis",
    "company": "Future Minds Education",
    "stage": "Won",
    "value": 27000.00,
    "closeDate": "2025-09-05T00:00:00.000Z"
  },
  {
    "name": "Manufacturing Production Planning for PlanRight",
    "contactName": "Isabel Clark",
    "company": "PlanRight Manufacturing",
    "stage": "Lost",
    "value": 40000.00,
    "closeDate": "2025-10-09T00:00:00.000Z"
  },
  {
    "name": "Healthcare Telemedicine Platform for TeleHealth",
    "contactName": "Jake Young",
    "company": "TeleHealth Solutions",
    "stage": "In_Progress",
    "value": 55000.00,
    "closeDate": "2026-04-28T00:00:00.000Z"
  },
  {
    "name": "Financial Risk Management for Risk Guard",
    "contactName": "Kelly Hernandez",
    "company": "Risk Guard Finance",
    "stage": "New",
    "value": 23000.00,
    "closeDate": "2026-01-17T00:00:00.000Z"
  },
  {
    "name": "Supply Chain Analytics for Insightful Logistics",
    "contactName": "Liam White",
    "company": "Insightful Logistics",
    "stage": "Won",
    "value": 39000.00,
    "closeDate": "2025-08-20T00:00:00.000Z"
  },
  {
    "name": "Smart Energy Management for EcoPower",
    "contactName": "Mia Johnson",
    "company": "EcoPower Systems",
    "stage": "Lost",
    "value": 28000.00,
    "closeDate": "2025-11-01T00:00:00.000Z"
  },
  {
    "name": "Aerospace Maintenance Software for SkyCare",
    "contactName": "Noah Williams",
    "company": "SkyCare Aviation",
    "stage": "In_Progress",
    "value": 80000.00,
    "closeDate": "2026-05-10T00:00:00.000Z"
  },
  {
    "name": "Marine Logistics Platform for Ocean Freight",
    "contactName": "Olivia Davis",
    "company": "Ocean Freight Solutions",
    "stage": "New",
    "value": 27000.00,
    "closeDate": "2025-12-10T00:00:00.000Z"
  },
  {
    "name": "Waste Recycling Tracking for Green Cycle",
    "contactName": "Paul Miller",
    "company": "Green Cycle Recycling",
    "stage": "Won",
    "value": 15000.00,
    "closeDate": "2025-07-17T00:00:00.000Z"
  },
  {
    "name": "Smart Retail Inventory for Stock Wise",
    "contactName": "Quinn Brown",
    "company": "Stock Wise Retail",
    "stage": "Lost",
    "value": 9000.00,
    "closeDate": "2025-10-24T00:00:00.000Z"
  },
  {
    "name": "Automated Quality Assurance for Flawless Products",
    "contactName": "Rachel Taylor",
    "company": "Flawless Products Inc.",
    "stage": "In_Progress",
    "value": 30000.00,
    "closeDate": "2026-03-03T00:00:00.000Z"
  },
  {
    "name": "Construction Site Safety for Build Safe",
    "contactName": "Sam Wilson",
    "company": "Build Safe Construction",
    "stage": "New",
    "value": 20000.00,
    "closeDate": "2026-01-04T00:00:00.000Z"
  },
  {
    "name": "E-health Patient Engagement for Patient Pulse",
    "contactName": "Tina Moore",
    "company": "Patient Pulse Health",
    "stage": "Won",
    "value": 42000.00,
    "closeDate": "2025-08-25T00:00:00.000Z"
  },
  {
    "name": "School Management for Future Scholars",
    "contactName": "Umar Green",
    "company": "Future Scholars Academy",
    "stage": "Lost",
    "value": 13000.00,
    "closeDate": "2025-11-06T00:00:00.000Z"
  },
  {
    "name": "Courier Dispatch System for Express Delivery",
    "contactName": "Victoria Hall",
    "company": "Express Delivery Services",
    "stage": "In_Progress",
    "value": 18000.00,
    "closeDate": "2026-04-18T00:00:00.000Z"
  },
  {
    "name": "Smart City Parking Solutions for Park Smart",
    "contactName": "William King",
    "company": "Park Smart Solutions",
    "stage": "New",
    "value": 30000.00,
    "closeDate": "2025-12-25T00:00:00.000Z"
  },
  {
    "name": "Retail Customer Loyalty Program for Loyal Shopper",
    "contactName": "Xena Wright",
    "company": "Loyal Shopper Rewards",
    "stage": "Won",
    "value": 10000.00,
    "closeDate": "2025-07-03T00:00:00.000Z"
  },
  {
    "name": "Vehicle Tracking System for Fleet Monitor",
    "contactName": "Yara Scott",
    "company": "Fleet Monitor Solutions",
    "stage": "Lost",
    "value": 14000.00,
    "closeDate": "2025-10-08T00:00:00.000Z"
  },
  {
    "name": "Farm Irrigation Control for AquaFarm",
    "contactName": "Zoe Baker",
    "company": "AquaFarm Technologies",
    "stage": "In_Progress",
    "value": 22000.00,
    "closeDate": "2026-02-17T00:00:00.000Z"
  },
  {
    "name": "Government Compliance Software for ReguGuard",
    "contactName": "Alex Adams",
    "company": "ReguGuard Compliance",
    "stage": "New",
    "value": 29000.00,
    "closeDate": "2025-11-20T00:00:00.000Z"
  },
  {
    "name": "Charity Fundraising Platform for FundRaise",
    "contactName": "Brenda Nelson",
    "company": "FundRaise Collective",
    "stage": "Won",
    "value": 7500.00,
    "closeDate": "2025-09-15T00:00:00.000Z"
  },
  {
    "name": "Sports League Management for League Pro",
    "contactName": "Chris Carter",
    "company": "League Pro Sports",
    "stage": "Lost",
    "value": 16000.00,
    "closeDate": "2025-12-08T00:00:00.000Z"
  },
  {
    "name": "AI for Customer Segmentation for Market Insight",
    "contactName": "Diana Roberts",
    "company": "Market Insight AI",
    "stage": "In_Progress",
    "value": 38000.00,
    "closeDate": "2026-03-07T00:00:00.000Z"
  },
  {
    "name": "Cybersecurity Incident Response for Rapid Secure",
    "contactName": "Ethan Evans",
    "company": "Rapid Secure Solutions",
    "stage": "New",
    "value": 25000.00,
    "closeDate": "2026-01-14T00:00:00.000Z"
  },
  {
    "name": "Smart City Waste Management for Clean Streets",
    "contactName": "Fiona Khan",
    "company": "Clean Streets Initiative",
    "stage": "Won",
    "value": 20000.00,
    "closeDate": "2025-07-27T00:00:00.000Z"
  },
  {
    "name": "Robotics for Manufacturing for AutoFab",
    "contactName": "George Lewis",
    "company": "AutoFab Robotics",
    "stage": "Lost",
    "value": 50000.00,
    "closeDate": "2025-11-03T00:00:00.000Z"
  },
  {
    "name": "Aerospace Data Analytics for AeroInsight",
    "contactName": "Hannah Clark",
    "company": "AeroInsight Technologies",
    "stage": "In_Progress",
    "value": 70000.00,
    "closeDate": "2026-05-22T00:00:00.000Z"
  },
  {
    "name": "Environmental Compliance Software for Green Regs",
    "contactName": "Ian Young",
    "company": "Green Regs Compliance",
    "stage": "New",
    "value": 15000.00,
    "closeDate": "2025-12-06T00:00:00.000Z"
  },
  {
    "name": "Food Safety Management for Safe Bites",
    "contactName": "Jessica Hernandez",
    "company": "Safe Bites Food Services",
    "stage": "Won",
    "value": 10000.00,
    "closeDate": "2025-08-04T00:00:00.000Z"
  },
  {
    "name": "Fashion Design Software for Style Creator",
    "contactName": "Kevin White",
    "company": "Style Creator Studio",
    "stage": "Lost",
    "value": 12000.00,
    "closeDate": "2025-10-14T00:00:00.000Z"
  },
  {
    "name": "Music Distribution Platform for Global Sound",
    "contactName": "Laura Johnson",
    "company": "Global Sound Distribution",
    "stage": "In_Progress",
    "value": 30000.00,
    "closeDate": "2026-03-20T00:00:00.000Z"
  },
  {
    "name": "Podcast Monetization Platform for PodProfit",
    "contactName": "Mark Williams",
    "company": "PodProfit Solutions",
    "stage": "New",
    "value": 9000.00,
    "closeDate": "2026-01-09T00:00:00.000Z"
  },
  {
    "name": "Mobile Game Analytics for Play Insights",
    "contactName": "Nancy Davis",
    "company": "Play Insights Gaming",
    "stage": "Won",
    "value": 28000.00,
    "closeDate": "2025-07-06T00:00:00.000Z"
  },
  {
    "name": "Travel Destination Management for Explore World",
    "contactName": "Oscar Miller",
    "company": "Explore World Travel",
    "stage": "Lost",
    "value": 19000.00,
    "closeDate": "2025-11-26T00:00:00.000Z"
  },
  {
    "name": "Fitness Coaching Platform for Coach Fit",
    "contactName": "Pamela Brown",
    "company": "Coach Fit Pro",
    "stage": "In_Progress",
    "value": 11000.00,
    "closeDate": "2026-02-12T00:00:00.000Z"
  },
  {
    "name": "Smart Home Energy Monitoring for Power Save",
    "contactName": "Quinn Taylor",
    "company": "Power Save Homes",
    "stage": "New",
    "value": 16000.00,
    "closeDate": "2025-10-02T00:00:00.000Z"
  },
  {
    "name": "Online Course Creation for Creator Hub",
    "contactName": "Rachel Wilson",
    "company": "Creator Hub Education",
    "stage": "Won",
    "value": 24000.00,
    "closeDate": "2025-09-22T00:00:00.000Z"
  },
  {
    "name": "Manufacturing Asset Tracking for Asset Flow",
    "contactName": "Sam Moore",
    "company": "Asset Flow Solutions",
    "stage": "Lost",
    "value": 32000.00,
    "closeDate": "2025-12-09T00:00:00.000Z"
  },
  {
    "name": "Healthcare Data Analytics for Health Insights",
    "contactName": "Tina Green",
    "company": "Health Insights Data",
    "stage": "In_Progress",
    "value": 65000.00,
    "closeDate": "2026-04-03T00:00:00.000Z"
  },
  {
    "name": "Financial Planning AI for Future Wealth",
    "contactName": "Uma Hall",
    "company": "Future Wealth Advisors",
    "stage": "New",
    "value": 20000.00,
    "closeDate": "2026-01-16T00:00:00.000Z"
  },
  {
    "name": "Supply Chain Risk Management for Risk Shield",
    "contactName": "Victor King",
    "company": "Risk Shield Logistics",
    "stage": "Won",
    "value": 45000.00,
    "closeDate": "2025-08-11T00:00:00.000Z"
  },
  {
    "name": "Smart Grid Energy Trading for Grid Exchange",
    "contactName": "Wendy Wright",
    "company": "Grid Exchange Energy",
    "stage": "Lost",
    "value": 55000.00,
    "closeDate": "2025-10-29T00:00:00.000Z"
  },
  {
    "name": "Aerospace Design Software for AeroDesign",
    "contactName": "Xavier Scott",
    "company": "AeroDesign Innovations",
    "stage": "In_Progress",
    "value": 110000.00,
    "closeDate": "2026-05-18T00:00:00.000Z"
  },
  {
    "name": "Marine Logistics Optimization for Port Flow",
    "contactName": "Yvonne Baker",
    "company": "Port Flow Logistics",
    "stage": "New",
    "value": 30000.00,
    "closeDate": "2025-12-13T00:00:00.000Z"
  },
  {
    "name": "Waste-to-Energy Solutions for Power Green",
    "contactName": "Zoe Adams",
    "company": "Power Green Technologies",
    "stage": "Won",
    "value": 60000.00,
    "closeDate": "2025-07-19T00:00:00.000Z"
  },
  {
    "name": "Smart Retail Security for Secure Shop",
    "contactName": "Alex Nelson",
    "company": "Secure Shop Retail",
    "stage": "Lost",
    "value": 13000.00,
    "closeDate": "2025-11-09T00:00:00.000Z"
  },
  {
    "name": "Automated Testing for Quality Code",
    "contactName": "Brenda Carter",
    "company": "Quality Code Solutions",
    "stage": "In_Progress",
    "value": 25000.00,
    "closeDate": "2026-03-26T00:00:00.000Z"
  },
  {
    "name": "Construction Equipment Tracking for Site Assets",
    "contactName": "Chris Roberts",
    "company": "Site Assets Management",
    "stage": "New",
    "value": 17000.00,
    "closeDate": "2026-01-06T00:00:00.000Z"
  },
  {
    "name": "E-health Teleconsultation for DocConnect",
    "contactName": "Diana Evans",
    "company": "DocConnect Telehealth",
    "stage": "Won",
    "value": 30000.00,
    "closeDate": "2025-08-27T00:00:00.000Z"
  },
  {
    "name": "School Bus Tracking for Safe Ride",
    "contactName": "Ethan Khan",
    "company": "Safe Ride Transport",
    "stage": "Lost",
    "value": 9000.00,
    "closeDate": "2025-10-11T00:00:00.000Z"
  },
  {
    "name": "Courier Management System for Fast Track",
    "contactName": "Fiona Lewis",
    "company": "Fast Track Couriers",
    "stage": "In_Progress",
    "value": 16000.00,
    "closeDate": "2026-04-04T00:00:00.000Z"
  },
  {
    "name": "Smart City Public Safety for City Watch",
    "contactName": "George Clark",
    "company": "City Watch Safety",
    "stage": "New",
    "value": 45000.00,
    "closeDate": "2025-12-20T00:00:00.000Z"
  },
  {
    "name": "Retail Supply Chain Optimization for Store Flow",
    "contactName": "Hannah Young",
    "company": "Store Flow Retail",
    "stage": "Won",
    "value": 22000.00,
    "closeDate": "2025-07-09T00:00:00.000Z"
  },
  {
    "name": "Vehicle Fleet Maintenance for AutoCare",
    "contactName": "Ian Hernandez",
    "company": "AutoCare Fleet Services",
    "stage": "Lost",
    "value": 18000.00,
    "closeDate": "2025-11-14T00:00:00.000Z"
  },
  {
    "name": "Farm Crop Monitoring for Crop Insights",
    "contactName": "Jessica White",
    "company": "Crop Insights Agri",
    "stage": "In_Progress",
    "value": 28000.00,
    "closeDate": "2026-02-22T00:00:00.000Z"
  },
  {
    "name": "Government Citizen Services Portal for E-Gov",
    "contactName": "Kevin Johnson",
    "company": "E-Gov Solutions",
    "stage": "New",
    "value": 35000.00,
    "closeDate": "2025-10-17T00:00:00.000Z"
  },
  {
    "name": "Charity Volunteer Management for Volunteer Hub",
    "contactName": "Laura Williams",
    "company": "Volunteer Hub Charity",
    "stage": "Won",
    "value": 8000.00,
    "closeDate": "2025-09-07T00:00:00.000Z"
  },
  {
    "name": "Sports Team Management for Team Play",
    "contactName": "Mark Davis",
    "company": "Team Play Sports",
    "stage": "Lost",
    "value": 15000.00,
    "closeDate": "2025-12-02T00:00:00.000Z"
  },
  {
    "name": "AI for Predictive Maintenance for Proactive Tech",
    "contactName": "Nancy Miller",
    "company": "Proactive Tech Solutions",
    "stage": "In_Progress",
    "value": 50000.00,
    "closeDate": "2026-04-20T00:00:00.000Z"
  },
  {
    "name": "Cybersecurity Threat Detection for Detect Secure",
    "contactName": "Oscar Brown",
    "company": "Detect Secure Systems",
    "stage": "New",
    "value": 28000.00,
    "closeDate": "2026-01-23T00:00:00.000Z"
  },
  {
    "name": "Smart City Energy Management for Urban Power",
    "contactName": "Pamela Taylor",
    "company": "Urban Power Solutions",
    "stage": "Won",
    "value": 70000.00,
    "closeDate": "2025-07-14T00:00:00.000Z"
  },
  {
    "name": "Robotics for Healthcare for MedBot",
    "contactName": "Quinn Wilson",
    "company": "MedBot Robotics",
    "stage": "Lost",
    "value": 40000.00,
    "closeDate": "2025-11-17T00:00:00.000Z"
  },
  {
    "name": "Aerospace Manufacturing Software for SkyBuild",
    "contactName": "Rachel Moore",
    "company": "SkyBuild Aerospace",
    "stage": "In_Progress",
    "value": 90000.00,
    "closeDate": "2026-03-09T00:00:00.000Z"
  },
  {
    "name": "Environmental Data Analysis for Green Stats",
    "contactName": "Sam Green",
    "company": "Green Stats Analytics",
    "stage": "New",
    "value": 19000.00,
    "closeDate": "2025-12-16T00:00:00.000Z"
  },
  {
    "name": "Food Service Ordering System for Order Up",
    "contactName": "Tina Hall",
    "company": "Order Up Food Services",
    "stage": "Won",
    "value": 11000.00,
    "closeDate": "2025-08-01T00:00:00.000Z"
  },
  {
    "name": "Fashion E-commerce Analytics for Style Stats",
    "contactName": "Uma King",
    "company": "Style Stats Fashion",
    "stage": "Lost",
    "value": 10000.00,
    "closeDate": "2025-10-21T00:00:00.000Z"
  },
  {
    "name": "Music Licensing Platform for Tune Rights",
    "contactName": "Victor Wright",
    "company": "Tune Rights Licensing",
    "stage": "In_Progress",
    "value": 25000.00,
    "closeDate": "2026-04-22T00:00:00.000Z"
  },
  {
    "name": "Podcast Analytics for Pod Insights",
    "contactName": "Wendy Scott",
    "company": "Pod Insights Analytics",
    "stage": "New",
    "value": 7000.00,
    "closeDate": "2026-01-29T00:00:00.000Z"
  },
  {
    "name": "Mobile Game Marketing for Game Boost",
    "contactName": "Xavier Baker",
    "company": "Game Boost Marketing",
    "stage": "Won",
    "value": 35000.00,
    "closeDate": "2025-07-11T00:00:00.000Z"
  },
  {
    "name": "Travel Expense Management for Trip Track",
    "contactName": "Yara Adams",
    "company": "Trip Track Expenses",
    "stage": "Lost",
    "value": 14000.00,
    "closeDate": "2025-11-04T00:00:00.000Z"
  },
  {
    "name": "Fitness Wearable Integration for Health Sync",
    "contactName": "Zoe Nelson",
    "company": "Health Sync Wearables",
    "stage": "In_Progress",
    "value": 12000.00,
    "closeDate": "2026-03-12T00:00:00.000Z"
  },
  {
    "name": "Smart Home Energy Optimization for EcoHome",
    "contactName": "Alice Carter",
    "company": "EcoHome Solutions",
    "stage": "New",
    "value": 20000.00,
    "closeDate": "2025-12-29T00:00:00.000Z"
  },
  {
    "name": "Online Course Delivery for LearnStream",
    "contactName": "Bob Roberts",
    "company": "LearnStream Platform",
    "stage": "Won",
    "value": 28000.00,
    "closeDate": "2025-09-28T00:00:00.000Z"
  },
  {
    "name": "Manufacturing Production Monitoring for ProdView",
    "contactName": "Catherine Evans",
    "company": "ProdView Systems",
    "stage": "Lost",
    "value": 48000.00,
    "closeDate": "2025-10-06T00:00:00.000Z"
  },
  {
    "name": "Healthcare Patient Portal for MyHealth",
    "contactName": "David Khan",
    "company": "MyHealth Portal",
    "stage": "In_Progress",
    "value": 60000.00,
    "closeDate": "2026-05-01T00:00:00.000Z"
  },
  {
    "name": "Financial Portfolio Management for Wealth Growth",
    "contactName": "Emily Lewis",
    "company": "Wealth Growth Advisors",
    "stage": "New",
    "value": 26000.00,
    "closeDate": "2026-01-21T00:00:00.000Z"
  },
  {
    "name": "Supply Chain Automation for AutoChain",
    "contactName": "Frank Clark",
    "company": "AutoChain Logistics",
    "stage": "Won",
    "value": 42000.00,
    "closeDate": "2025-08-16T00:00:00.000Z"
  },
  {
    "name": "Smart Grid Cybersecurity for Grid Shield",
    "contactName": "Grace Young",
    "company": "Grid Shield Security",
    "stage": "Lost",
    "value": 30000.00,
    "closeDate": "2025-11-21T00:00:00.000Z"
  },
  {
    "name": "Aerospace Quality Control for AeroSure",
    "contactName": "Henry Hernandez",
    "company": "AeroSure Quality",
    "stage": "In_Progress",
    "value": 75000.00,
    "closeDate": "2026-03-16T00:00:00.000Z"
  },
  {
    "name": "Environmental Data Visualization for EcoView",
    "contactName": "Ivy White",
    "company": "EcoView Analytics",
    "stage": "New",
    "value": 17000.00,
    "closeDate": "2025-12-04T00:00:00.000Z"
  },
  {
    "name": "Food Waste Reduction Software for Zero Waste",
    "contactName": "Jack Johnson",
    "company": "Zero Waste Solutions",
    "stage": "Won",
    "value": 14000.00,
    "closeDate": "2025-07-26T00:00:00.000Z"
  },
  {
    "name": "Fashion E-commerce Optimization for Style Boost",
    "contactName": "Karen Williams",
    "company": "Style Boost E-commerce",
    "stage": "Lost",
    "value": 11000.00,
    "closeDate": "2025-10-19T00:00:00.000Z"
  },
  {
    "name": "Music Royalty Management for RoyalTune",
    "contactName": "Leo Davis",
    "company": "RoyalTune Management",
    "stage": "In_Progress",
    "value": 28000.00,
    "closeDate": "2026-04-06T00:00:00.000Z"
  },
  {
    "name": "Podcast Advertising Platform for AdCast",
    "contactName": "Mia Miller",
    "company": "AdCast Media",
    "stage": "New",
    "value": 9500.00,
    "closeDate": "2026-01-11T00:00:00.000Z"
  },
  {
    "name": "Mobile Game LiveOps for Game Engage",
    "contactName": "Noah Brown",
    "company": "Game Engage Studios",
    "stage": "Won",
    "value": 40000.00,
    "closeDate": "2025-08-03T00:00:00.000Z"
  },
  {
    "name": "Travel Itinerary Builder for Trip Planner",
    "contactName": "Olivia Taylor",
    "company": "Trip Planner Pro",
    "stage": "Lost",
    "value": 16000.00,
    "closeDate": "2025-11-16T00:00:00.000Z"
  },
  {
    "name": "Fitness Challenge Platform for Challenge Fit",
    "contactName": "Paul Wilson",
    "company": "Challenge Fit Community",
    "stage": "In_Progress",
    "value": 13000.00,
    "closeDate": "2026-02-29T00:00:00.000Z"
  },
  {
    "name": "Smart Home Energy Audit for Home Energy",
    "contactName": "Quinn Moore",
    "company": "Home Energy Solutions",
    "stage": "New",
    "value": 21000.00,
    "closeDate": "2025-10-26T00:00:00.000Z"
  },
  {
    "name": "Online Certification Platform for CertiPath",
    "contactName": "Rachel Green",
    "company": "CertiPath Learning",
    "stage": "Won",
    "value": 19000.00,
    "closeDate": "2025-09-02T00:00:00.000Z"
  },
  {
    "name": "Manufacturing Predictive Maintenance for Machine IQ",
    "contactName": "Sam Hall",
    "company": "Machine IQ Systems",
    "stage": "Lost",
    "value": 55000.00,
    "closeDate": "2025-12-11T00:00:00.000Z"
  }

  ];

  for (const deal of deals) {
    await prisma.deal.create({ data: deal });
  }

  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });