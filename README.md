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

Varje arbetserfarenhet lagras som ett dokument i MongoDB och innehåller följande fält:

- _id (ObjectId) – unikt id genererat av MongoDB
- companyname (string)
- jobtitle (string)
- location (string)
- startdate (date)
- enddate (date, valfri)
- description (string)
- createdAt / updatedAt (automatiskt via Mongoose)

---

## 🔁 Funktionalitet (CRUD)

Webbtjänsten stödjer följande operationer:

- GET – Hämtar poster
- POST – Skapa ny post
- PUT – Uppdatera post
- DELETE – Ta bort post

Alla svar returneras i JSON-format.

---

## 🔗 API-endpoints
| Metod  | Endpoint                  | Beskrivning                  |
|--------|--------------------------|------------------------------|
| GET    | /workexperience          | Hämtar alla poster           |
| GET    | /workexperience/:id      | Hämtar en specifik post      |
| POST   | /workexperience          | Skapar en ny post            |
| PUT    | /workexperience/:id      | Uppdaterar en post           |
| DELETE | /workexperience/:id      | Raderar en post              |

### Exempel på request body

```json
{
  "companyname": "Jobba AB",
  "jobtitle": "Utvecklare",
  "location": "Sundsvall",
  "startdate": "2022-01-01",
  "enddate": "2025-01-01",
  "description": "Bränner hjärnceller genom att sitta framför en skärm flera timmar i ett streck."
}
```

### Testa endpoint

GET [/workexperience](https://lab3-webbtjanstnosql.onrender.com/workexperience)

---

## ✅ Validering

- Alla obligatoriska fält måste vara ifyllda
- Tomma strängar accepteras inte
- Felaktig data returnerar tydliga felmeddelanden

---

## 🌍 CORS

Webbtjänsten stödjer Cross-Origin Requests (CORS) för att kunna användas från externa klienter.

---

## 📁 Installation (lokalt)

1. Klona repositoryt

```bash
git clone https://github.com/fredrikastjernlof/Lab3_WebbtjanstNoSQL.git
```

2. Installera dependencies

```bash
npm install
```

3. Skapa en `.env`-fil:

```env
PORT=3000
MONGODB_URI=din_connection_string
```

4. Starta utvecklingsservern

```bash
npm run dev
```

eller:

```bash
npm start
```

---

## 🌐 Publicering

Webbtjänsten är publicerad via Render och använder MongoDB Atlas som databas.

[Öppna webbtjänst](https://lab3-webbtjanstnosql.onrender.com)

## 🔗 Extern klient

Denna webbtjänst används av en frontend-applikation:

[Öppna webbplatsen](https://lab3webbplats.netlify.app/)

Frontend-applikationen använder denna webbtjänst via Fetch API för att hämta, skapa, uppdatera och radera data.

---

## ✅🙌 Det här tar jag med mig från uppgiften  

I denna laboration har jag byggt om min webbtjänst så att den använder MongoDB istället för PostgreSQL.

Den största skillnaden var egentligen hur man skriver sina anrop mot databasen. I stället för SQL-frågor använder man Mongoose och arbetar med objekt direkt i JavaScript.

Jag upplevde dock inte att det var någon jättestor skillnad i praktiken – det handlar mest om olika sätt att göra samma sak. API:t och strukturen i övrigt är i stort sett likadana, vilket gjorde det tydligt att man kan byta databasteknik utan att behöva bygga om hela applikationen.
