# SafeClouds Platform (Formerly Clear Skies)

> **THIS PLATFORM IS UNDER MAINTENANCE AT THE MOMENT**

SafeClouds is a real-time environmental monitoring and flood-prediction web application built with **Next.js 15**. It correlates live meteorological metrics with historical river discharge percentiles to deliver early flood warnings and actionable weather insights for any global location.

🔗 **Live Platform:** [https://safeclouds.vercel.app](https://safeclouds.vercel.app)

## Key Features

* **Real-Time Weather Telemetry:** Integrates with OpenWeatherMap to fetch live temperature and precipitation data, handling dynamic optional properties like zero-precipitation intervals safely.
* **Predictive Flood Analysis:** Connects with the Open-Meteo Flood API to evaluate river discharge metrics ($p_{75}$ and median baselines) over a 10-day window.
* **Server Action Architecture:** Utilizes robust server-side data fetching and error propagation workflows to process user input securely.
* **Responsive UI & Styling:** Styled with Tailwind CSS for high-contrast environmental status alerts and risk assessment tiers.

## Tech Stack

* **Framework:** Next.js 15 (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **APIs:** Open-Meteo Flood API, OpenWeatherMap API, Maps.co Geocoding

## Getting Started

First, clone the repository and install dependencies:

```bash
git clone https://github.com/syntaxdesigns/safeclouds.git
cd safeclouds
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the platform locally, or visit the live deployment at [https://safeclouds.vercel.app](https://safeclouds.vercel.app).