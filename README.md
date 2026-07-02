# Silim Café Web Platform

## Project Meaning
The **Silim Café Website Project** is a high-performance, single-page web platform designed to establish a modern digital presence for Silim Café[cite: 1]. The primary goal is to capture the cafe’s distinct aesthetic—blending a minimalist, moody, monochromatic theme (blacks, whites, and greys) with its identity as a welcoming local coffee hub and study spot for students and coffee enthusiasts[cite: 1]. 

By bypassing heavy backend infrastructure, this platform prioritizes blazing-fast mobile performance, local SEO optimization, and immediate accessibility[cite: 1]. It serves as a digital storefront bridging the gap between the physical cafe experience in Imus, Cavite, and online customer convenience[cite: 1].

---

## Project Scope

### In-Scope (Core Deliverables)
*   **Responsive Landing Page:** A mobile-first UI designed using a dark, high-contrast monochromatic color palette tailored for smartphones, tablets, and desktops[cite: 1].
*   **Interactive Digital Menu:** An easily navigable menu section structured by categories (Hot Drinks, Cold Drinks, Pastries, and Meals)[cite: 1]. The layout pulls data dynamically from a local structured script file for frictionless adjustments.
*   **Third-Party Delivery Integration:** Streamlined, high-visibility Call-to-Action (CTA) elements routing users directly to Silim Café’s existing Foodpanda storefront for ordering and fulfillment[cite: 1].
*   **Location & Info Hub:** An embedded interactive Google Map, clear displays of operating hours, contact details, and redirection links to official Facebook and Instagram profiles[cite: 1].
*   **Local SEO Optimization:** Structured meta-tagging and fast static site generation to rank high on search engines when locals look for study spots or coffee shops[cite: 1].

### Out-of-Scope (Phase 1 Exclusions)
*   Custom e-commerce cart, native checkout systems, or dedicated delivery tracking.
*   Custom administrative login dashboards or remote backend database integrations[cite: 1].
*   Seat reservation, table-booking matrices, or calendar scheduling components[cite: 1].

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose & Justification |
| :--- | :--- | :--- |
| **Frontend Framework** | **Next.js** | Pre-renders application pages into static HTML (SSG), matching user demands for ultra-fast loading times on mobile devices and offering massive local SEO advantages[cite: 1]. |
| **Styling Engine** | **Tailwind CSS** | A utility-first CSS framework that facilitates swift building of custom, mobile-first designs[cite: 1] without bulky stylesheet files. |
| **Data Engine** | **Local JSON/JS** | Menu items, pricing tiers, and operating timelines are managed inside a dedicated code module, preventing maintenance overhead and keeping the site decoupled from a server. |
| **Hosting & CI/CD** | **Vercel** | Out-of-the-box hosting architecture optimized for Next.js, delivering instant site loading via a global Content Delivery Network (CDN)[cite: 1]. |

---
