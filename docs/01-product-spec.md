# 📋 IBIAS Product Specification (MVP)

## 1. Product Positioning
**Tagline:** Your AI E-commerce Analyst.
**Target User:** SMB Store Owners ($100k-$5M revenue) who are overwhelmed by data and need clear direction.
**Value Proposition:** "Connect your store, and in 60 seconds, get a prioritized list of actions to grow revenue, powered by AI."

## 2. Core User Flow (MVP)
1.  **Landing Page:** User sees value prop → Clicks "Get Started".
2.  **Auth:** Sign up via Email or Google (Supabase Auth).
3.  **Onboarding (Crucial):**
    *   User *MUST* connect a store to proceed.
    *   **Option A:** Connect Shopify (OAuth/Token).
    *   **Option B:** Connect WooCommerce (API Keys).
    *   *(Demo Mode available for testing, but production users must connect).*
4.  **Data Sync:** System pulls last 30 days of Orders, Products, Customers.
5.  **The "Value Moment":**
    *   User lands on Dashboard.
    *   **AI Insight Card** loads at the top: "Here is your weekly growth summary."
    *   User sees 3 key charts (Revenue, AOV, Conversion) populated with *their* real data.

## 3. Features Scope (Milestone 1)

### ✅ In Scope (MVP)
*   **Authentication:** Supabase Auth (Email + Google).
*   **Store Integration:**
    *   **Shopify:** Fetch Orders, Products, Customers (Read-only).
    *   **WooCommerce:** Fetch Orders, Products, Customers (Read-only).
*   **Dashboard (Trezo-based):**
    *   **Header:** Store Name, Date Range Picker.
    *   **AI Section:** "Weekly Growth Brief" (Summary, Insights, Actions, Risks).
    *   **Metrics Grid:** Revenue, Orders, AOV, Net Profit (Estimated).
    *   **Charts:** Revenue Trend (Last 30 days), Top Selling Products.
*   **AI Engine:**
    *   **Real Integration:** OpenAI GPT-4o (or similar).
    *   **Input:** Aggregated JSON of store metrics (No PII).
    *   **Output:** Structured JSON (Summary, Insights, Actions).
    *   **Fallback:** Cached data or "Insufficient Data" message.
*   **Settings:**
    *   Manage Store Connection (Disconnect/Reconnect).
    *   User Profile.

### ❌ Out of Scope (Post-MVP)
*   **Paid Subscriptions:** Stripe is infra-only; no paywall for MVP.
*   **Complex Admin Logs:** Basic user list only.
*   **Other Integrations:** Magento, GA4, Ads (UI Placeholders only).
*   **Deep Historical Data:** Only syncing last 30-90 days for MVP speed.
*   **Editing Data:** Read-only mode.

## 4. Data Model Overview
*   **Users:** Supabase Auth + `public.profiles`.
*   **Stores:** `public.stores` (One user can have 1 store for MVP).
*   **Integrations:** `public.integrations` (Store tokens/keys).
*   **Metrics:** `public.daily_metrics` (Aggregated stats: date, revenue, orders).
*   **AI_Insights:** `public.ai_insights` (Cached AI responses).

## 5. AI System Overview
*   **Trigger:** On Dashboard load (with cache expiry of 24h) or manual "Refresh Analysis".
*   **Privacy:** No customer names/emails sent to LLM. Only numbers.
*   **Prompt Logic:** "You are a growth analyst. Analyze this JSON snapshot. Return JSON."

## 6. Compliance & Security
*   **RLS:** Strict Row Level Security (Users can only see their own store).
*   **Secrets:** API Keys stored in Supabase Vault (or encrypted columns).
*   **Audit:** Minimal tracking (Sign up, Sync).
