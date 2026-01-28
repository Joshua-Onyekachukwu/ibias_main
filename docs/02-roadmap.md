# 🗺️ IBIAS Development Roadmap

**Build Order:** Linear & Dependency-based.
**Complexity Legend:** 🟢 Low, 🟡 Medium, 🔴 High.

## 🏁 Phase 1: Foundation & Cleanup (Week 1)
*Goal: Initialize project, clean Trezo template, setup Supabase.*

*   [ ] **1.1 Project Init:**
    *   Verify Next.js + Tailwind config.
    *   Clean `src/app`: Move unused Trezo demos to `_examples` folder.
    *   Create clean `src/app/(dashboard)` layout.
*   [ ] **1.2 Supabase Setup:**
    *   Init local Supabase project.
    *   Define Schema: `profiles`, `stores`, `integrations`.
    *   Setup Auth (Google + Email).
    *   Implement RLS policies.
*   [ ] **1.3 Landing Page (Trezo Adaptation):**
    *   Adapt Trezo landing template.
    *   Update copy to "AI E-commerce Analyst".
    *   Wire "Get Started" to `/auth/signup`.

## 🔐 Phase 2: Auth & Onboarding (Week 2)
*Goal: User can sign up and is FORCED to connect a store.*

*   [ ] **2.1 Auth Pages:**
    *   Login / Signup / Forgot Password.
    *   Protected Route Middleware (redirect unauth to login).
*   [ ] **2.2 Onboarding Flow:**
    *   Step 1: Welcome.
    *   Step 2: "Connect Your Store" (The Gatekeeper).
    *   UI Cards for Shopify & WooCommerce.
*   [ ] **2.3 Store Integration Logic (The Hard Part):**
    *   **Shopify:** Build OAuth callback route or Token Input form.
    *   **WooCommerce:** Build API Key Input form.
    *   **Verification:** Test connection on submit.
    *   **Storage:** Save credentials securely (Supabase).

## 📊 Phase 3: Data Sync & Dashboard (Week 3)
*Goal: Pull real data and show it on the UI.*

*   [ ] **3.1 Data Sync Engine (Backend):**
    *   Create Supabase Edge Function (or Next.js API route) `sync-store-data`.
    *   Fetch Logic: Last 30 days Revenue, Orders.
    *   Save to `daily_metrics` table.
*   [ ] **3.2 Dashboard UI (Trezo):**
    *   **Header:** Date picker (functional).
    *   **KPI Cards:** Connect to `daily_metrics`.
    *   **Chart:** Recharts/ApexCharts wired to real data.
    *   **Empty States:** "Syncing your data..." skeletons.

## 🤖 Phase 4: AI Intelligence (Week 4)
*Goal: Generate the "Value Moment".*

*   [ ] **4.1 AI Backend:**
    *   Endpoint: `generate-insight`.
    *   Logic: Fetch last 30d metrics → Format JSON → Call OpenAI.
    *   **Prompt Engineering:** Implement the "Analyst" persona prompt.
    *   **Validation:** Ensure JSON output is valid.
*   [ ] **4.2 AI Frontend:**
    *   Design "Growth Brief" card (Top of Dashboard).
    *   Display: Summary, Key Insights (Bullet points), Actions (Checklist).
    *   Loading State: "AI is analyzing your store..." animation.

## 🛡️ Phase 5: Security & Polish (Week 5)
*Goal: Production readiness.*

*   [ ] **5.1 Security Review:**
    *   Audit RLS policies (Verify isolation).
    *   Check API Key storage.
*   [ ] **5.2 Error Handling:**
    *   Handle "Shopify API Down".
    *   Handle "OpenAI Rate Limit".
    *   Fallback UI for failed AI.
*   [ ] **5.3 Admin:**
    *   Simple User Table (Who signed up, Store Type, Last Sync).

## 🚀 Phase 6: Launch
*   [ ] Deploy to Vercel.
*   [ ] Connect Custom Domain.
*   [ ] Invite Beta Users.
