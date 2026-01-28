# IBIAS Test Persona

Use these details to test the end-to-end flow of the IBIAS dashboard.

## 1. Sign Up / Sign In
**URL:** http://localhost:3000/auth/signup (or /auth/signin)

- **Email:** `olivia@ibias.ai`
- **Password:** `Test1234!`
- **Name:** Olivia John

## 2. Onboarding (Connect Store)
**URL:** http://localhost:3000/onboarding

- **Platform:** Shopify
- **Store Name:** `Olivia's Fashion Store`
- **Store URL:** `https://olivias-fashion.myshopify.com`

## 3. Dashboard Navigation
Once logged in, verify these pages:

- **Dashboard:** http://localhost:3000/dashboard
- **Revenue:** http://localhost:3000/dashboard/revenue
- **CRM:** http://localhost:3000/dashboard/crm
- **Analytics:** http://localhost:3000/dashboard/analytics
- **Store Analysis:** http://localhost:3000/dashboard/store-analysis
- **AI Insights:** http://localhost:3000/dashboard/ai-insights
- **Recommendations:** http://localhost:3000/dashboard/recommendations
- **Billings:** http://localhost:3000/dashboard/billings
- **Settings:** http://localhost:3000/dashboard/settings

## 4. Key Actions to Test
1.  **Check Notifications:** Go to Settings -> Notifications and toggle the "New Recommendations" checkbox.
2.  **View Task Board:** Go to Recommendations and check the Kanban board.
3.  **View AI Feed:** Go to AI Insights and filter by "High Priority".
