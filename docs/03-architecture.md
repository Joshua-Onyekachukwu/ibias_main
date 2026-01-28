# 🏗️ Technical Architecture

## 1. Tech Stack
*   **Frontend:** Next.js 14 (App Router)
*   **Styling:** Tailwind CSS (using Trezo template design system)
*   **Database:** Supabase (PostgreSQL)
*   **Auth:** Supabase Auth
*   **AI:** OpenAI API (GPT-4o)
*   **Hosting:** Vercel (Frontend/API) + Supabase (DB/Edge)

## 2. Integration Strategy
### Shopify
*   **Method:** Admin API (REST/GraphQL).
*   **Auth:** Private Access Token (MVP) or OAuth (Later).
*   **Scope:** `read_orders`, `read_products`, `read_customers`.

### WooCommerce
*   **Method:** REST API V3.
*   **Auth:** Consumer Key + Consumer Secret.
*   **Scope:** `read` only.

## 3. Data Flow
1.  **User Login** → Supabase Auth.
2.  **Connect Store** → Keys saved to `integrations` table (Encrypted).
3.  **Sync Data (Server Action)**:
    *   Read Keys.
    *   Fetch External API (Shopify/Woo).
    *   Transform to unified format.
    *   Upsert to `daily_metrics`.
4.  **AI Analysis (Server Action)**:
    *   Read `daily_metrics`.
    *   Aggregate (Sum revenue, count orders).
    *   Send to OpenAI.
    *   Save response to `ai_insights`.
5.  **View Dashboard**:
    *   Client fetches `daily_metrics` + `ai_insights`.

## 4. Security Principles
*   **RLS (Row Level Security):**
    *   `profiles` → Users can only read/edit their own.
    *   `stores` → Users can only see stores linked to their `user_id`.
    *   `integrations` → NEVER exposed to client. Only accessible via Server Actions/Edge Functions.
*   **API Keys:**
    *   OpenAI Key → Env Variable (Server-side only).
    *   Store Keys → Database (Encrypted columns recommended).
