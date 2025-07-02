# OrB Z Website

**OrB Z** is the official website for the OrB Z desktop app – a real-time copyright detection service for streamers. It helps creators stay compliant by flagging copyrighted music, logos, and video content before takedowns occur. This site is the central hub for user account management, pricing, plan purchases, downloads, and platform updates.

---

## 🚀 Tech Stack

- **Next.js** (React Framework)
- **Tailwind CSS v4** (Styling)
- **TypeScript** (Preferred for type safety)
- **PostgreSQL** (User & Token Storage)
- **JWT** (Secure Auth)
- **Stripe** (Payments)
- **GraphQL API** (Desktop App Integration)
- **Vercel** (Deployment Platform)
- **Intercom / Crisp** (Live Support)
- **Google Analytics / Plausible** (Tracking)

---

## 📦 Functional Scope

### 🧩 Core Website Architecture
- Server-Side Rendering (SSR) and Static Site Generation (SSG) for SEO-critical pages
- Responsive design, optimized for Google PageSpeed and SEO
- Hosted with support for env variables, rollbacks, and preview builds

### 🔐 Authentication & Account
- Email/password-based auth with secure JWT sessions
- Email verification, password reset, session persistence
- Role and plan-tier claims encoded in JWT

### 💳 Plans & Billing
- Dynamic pricing from backend
- Stripe-based secure checkout with support for gift/promo codes
- Dashboard for managing plans, billing history, and API token
- Audit logging of all subscription activity

### 🔑 Token Management
- `user_tokens` table linked to PostgreSQL
- Securely generated API tokens with tier metadata
- Token revocation, regeneration, and expiry notifications
- Sync with backend GraphQL API

### 📥 Downloads & Versioning
- Latest version download for Windows/macOS/Linux
- Auth-based download access
- Version changelogs (features, fixes, security)
- Gift code redemption for unlocks

### 🌐 Site Navigation & UX
- Sticky top navbar with CTA buttons
- Persistent responsive footer
- Smooth animations and mobile-first design

### 💬 Engagement & Support
- Video demos, testimonials, and benefits on homepage
- Dynamic FAQ and contact form with notifications
- Integrated live chat and admin-to-user announcements
- Email marketing & campaign triggers

### 🔍 SEO, Analytics & Compliance
- Meta tags, OpenGraph, Twitter Cards, sitemap.xml
- GDPR/CCPA compliance and cookie consent
- Analytics via GA, Plausible, or Fathom

---

## 🛠️ Dev Setup

```bash
# 1. Install dependencies
npm install

# 2. Setup environment variables
cp .env.example .env.local

# 3. Run development server
npm run dev
````

---

## 🧪 Testing

* End-to-end: Cypress / Playwright
* Unit tests: Jest + React Testing Library

---

## ✅ Deployment

* Deployed on [Vercel](https://vercel.com)
* CI/CD auto-deploys from main branch
* Preview URLs for PRs

---

## 📌 Roadmap (Optional)

* [ ] Add AI-powered documentation and onboarding tour
* [ ] Admin dashboard for full user management
* [ ] Affiliate & referral system

---

## 📝 License

This project is proprietary and subject to OrB Z's terms of service.

