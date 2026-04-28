# 📌 Laboration 3 – NoSQL-databaser

## 🧾 Beskrivning

Detta repository innehåller del 1 av Laboration 3 i kursen Backend-baserad webbutveckling.  
Uppgiften går ut på att skapa en REST-baserad webbtjänst med hjälp av Node.js och Express, kopplad till en NoSQL-databas.

Webbtjänsten hanterar arbetserfarenheter och möjliggör fullständig CRUD-funktionalitet.

---

## 🎯 Syfte

Syftet med uppgiften är att:

- Förstå hur webbtjänster fungerar
- Skapa ett REST API med Node.js och Express
- Arbeta med en NoSQL-databas (MongoDB)
- Returnera och hantera data i JSON-format

---

## 🛠️ Tekniker

Projektet är byggt med:

- Node.js
- Express
- MongoDB Atlas
- Mongoose
- CORS
- dotenv

---

## 📦 Datamodell

Varje arbetserfarenhet innehåller följande fält:

- companyname (string)
- jobtitle (string)
- location (string)
- startdate (date)
- enddate (date, valfri)
- description (string)
- createdAt / updatedAt (automatiskt via Mongoose)

---

## 🔗 API-endpoints

### Hämta alla poster
GET /workexperience

### Hämta en specifik post
GET /workexperience/:id

### Skapa ny post
POST /workexperience

Body (JSON):
{
  "companyname": "Jobba AB",
  "jobtitle": "Utvecklare",
  "location": "Sundsvall",
  "startdate": "2022-01-01",
  "enddate": 2025-01-01,
  "description": "Bränner hjärnceller genom att sitta framför en skärm flera timmar i ett streck."
}

### Uppdatera post
PUT /workexperience/:id

### Radera post
DELETE /workexperience/:id

---

## ⚠️ Validering

- Alla obligatoriska fält måste vara ifyllda
- Tomma strängar accepteras inte
- Felaktig data returnerar tydliga felmeddelanden

---

## 🌐 Publicering

Webbtjänsten är publicerad via Render och använder MongoDB Atlas som databas.

[Öppna webbtjänst]()

---

## 📁 Installation (lokalt)

1. Klona repositoryt
git clone <repo-url>

2. Installera beroenden
npm install

3. Skapa en `.env`-fil:
PORT=3000
MONGODB_URI=din_connection_string

4. Starta servern
npm run dev

---

## ✅🙌 Det här tar jag med mig från uppgiften  

I denna laboration har jag byggt om min webbtjänst så att den använder MongoDB istället för PostgreSQL.

Den största skillnaden var egentligen hur man skriver sina anrop mot databasen. I stället för SQL-frågor använder man Mongoose och arbetar med objekt direkt i JavaScript.

Jag upplevde dock inte att det var någon jättestor skillnad i praktiken – det handlar mest om olika sätt att göra samma sak. API:t och strukturen i övrigt är i stort sett likadana, vilket gjorde det tydligt att man kan byta databasteknik utan att behöva bygga om hela applikationen.
