# Headless WordPress Frontend

Dies ist ein Next.js-Frontend, das deine Inhalte via WordPress REST API lädt.  
Einsatzbereit für Coolify/Docker und lokale Entwicklung.

## 🚀 Quickstart

### 1. Klonen & installieren

```bash
git clone https://github.com/superkalle/headlesswp25.git
cd headlesswp25
npm install
```

### 2. Umgebungsvariablen

Lege eine `.env.local` Datei an:

```bash
cp .env.example .env.local
```

Trage deine WordPress-API-URL ein.

### 3. Starten

_Lokal:_

```bash
npm run dev
```

_Docker:_

```bash
docker-compose up --build
```

### 4. Deployment

Coolify erkennt das `Dockerfile` automatisch.

---

## 🔗 Projektstruktur

- `/src/pages/` – Seitenstruktur (z. B. Startseite, Blog)
- `/src/components/` – Wiederverwendbare UI-Komponenten
- `/src/lib/wordpress.ts` – Verbindung zur WordPress-API

---

## 📝 Anpassungen

- Für eigene Routen, Seiten, Styles und Komponenten erweitern.
- Die Datei `wordpress.ts` anpassen, falls du eigene Endpunkte brauchst.

---
