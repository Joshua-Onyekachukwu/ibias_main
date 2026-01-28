# IBIAS Dashboard Architecture & Execution Plan

**Role:** Lead Product Designer & Frontend Architect  
**Status:** Planning Phase (Dashboard Structure & UX)  
**Objective:** Define the definitive structure, purpose, and flow of the IBIAS dashboard before implementation.

---

## 1. Dashboard Pages (Sidebar Structure)

The sidebar will follow this hierarchy to guide the user from "High-level Pulse" to "Deep Dives" to "Actions".

1.  **Overview** (formerly eCommerce/Dashboard)
2.  **Analytics** (Web & Traffic)
3.  **Store Analysis** (Product & Inventory)
4.  **Revenue** (Financials & Sales)
5.  **CRM** (Customer Intelligence)
6.  **AI Insights** (Intelligence Feed)
7.  **Recommendations** (Action Center)
8.  **Billing**
9.  **Settings**

---

## 2. Page-by-Page Breakdown

### 1. Overview
*   **Purpose:** The "Morning Coffee" page. A high-level pulse check of the business health.
*   **Primary Action:** Quickly scan key metrics and jump to critical alerts.
*   **Key Components:**
    *   **KPI Cards:** Today's Revenue, Orders, Traffic, AI Alert Count.
    *   **Trend Chart:** 7-day Revenue vs. Target.
    *   **Critical Alerts:** "Inventory Low", "Spike in Returns".
    *   **Recent Activity Feed:** Latest orders or system actions.
*   **Workflow:** User logs in -> Checks Overview -> Sees "Revenue Down" alert -> Clicks to AI Insights.

### 2. Analytics (Traffic & User Behavior)
*   **Purpose:** Understand *who* is visiting and *how* they behave (Web Analytics).
*   **Primary Action:** Analyze traffic sources and conversion funnels.
*   **Key Components:**
    *   **Real-time Visitors:** Active users on site.
    *   **Traffic Sources:** Organic, Paid, Social (Table/Pie).
    *   **Session Data:** Bounce Rate, Avg. Duration.
    *   **Device/Browser Stats:** Mobile vs Desktop.
*   **Workflow:** Marketing team checks this to validate campaign performance.

### 3. Store Analysis (Merchandising)
*   **Purpose:** Deep dive into Product Performance and Inventory health.
*   **Primary Action:** Identify top/worst performing products and inventory bottlenecks.
*   **Key Components:**
    *   **Product Leaderboard:** Top selling items by volume/margin.
    *   **Slow Movers:** Products with high views but low sales.
    *   **Stock Alerts:** Low stock, Dead stock.
    *   **Return Rate Analysis:** Products with high return rates.
*   **Workflow:** Merchandiser checks this to plan restocking or clearance sales.

### 4. Revenue (Financials)
*   **Purpose:** The CFO view. Pure financial performance and transaction logs.
*   **Primary Action:** Review P&L, margins, and download reports.
*   **Key Components:**
    *   **Gross vs Net Revenue:** Chart.
    *   **Profit Margins:** Overall and per category.
    *   **Expenses Breakdown:** Ads, COGS, Shipping.
    *   **Transaction Table:** Detailed ledger of all financial movements.
*   **Workflow:** Finance checks this for monthly reporting.

### 5. CRM (Customer Intelligence)
*   **Purpose:** Understand the customer base, loyalty, and churn.
*   **Primary Action:** Segment customers and view individual profiles.
*   **Key Components:**
    *   **Customer Segments:** VIP, At-Risk, New, Churned.
    *   **LTV (Lifetime Value) Analysis:** Chart.
    *   **Retention Rate:** Cohort analysis.
    *   **Recent Registrations:** List.
*   **Workflow:** Support/Marketing checks this to target specific user groups.

### 6. AI Insights
*   **Purpose:** The "Brain". Passive, analytical observation of patterns and anomalies.
*   **Nature:** Read-Only / Informational.
*   **Key Components:**
    *   **Insight Stream:** Timeline of generated insights (e.g., "Conversion rate dropped 15% on Mobile").
    *   **Anomaly Detection:** Highlighted spikes or drops in data.
    *   **Predictive Trends:** Forecasted revenue for next month.
*   **Relationship:** Feeds directly into **Recommendations**. An insight identifies a problem; a Recommendation proposes a fix.

### 7. Recommendations (Action Center)
*   **Purpose:** The "Hands". Project management system for store optimization.
*   **Nature:** Interactive / Task-based.
*   **Key Components:**
    *   **Kanban/Task Board:** Columns for New, In Progress, Completed, Ignored.
    *   **Action Cards:** Each card contains:
        *   **Problem:** Linked from AI Insights.
        *   **Suggested Action:** "Increase ad spend on Product X" or "Send email to Segment Y".
        *   **Expected Impact:** "Estimated +$500 revenue".
        *   **Feedback Loop:** User rates suggestion (Helpful/Not Helpful).
*   **Workflow:** User reviews New Recommendations -> Moves accepted ones to In Progress -> Marks as Done upon completion.

### 8. Billing
*   **Purpose:** Manage IBIAS subscription.
*   **Primary Action:** Upgrade plan, download invoices, update payment method.

### 9. Settings
*   **Purpose:** Configuration.
*   **Primary Action:** Manage connected stores (Shopify/WooCommerce), User Profile, Notifications.

---

## 3. Core Logic: AI Insights vs. Recommendations

| Feature | **AI Insights** | **Recommendations** |
| :--- | :--- | :--- |
| **Role** | **Observer (Analyst)** | **Manager (Project Manager)** |
| **Input** | Raw Data (Sales, Traffic, CRM) | Processed Insights |
| **Output** | Observations, Patterns, Anomalies | Actionable Tasks, Strategies |
| **User Interaction** | **Passive:** Read, Filter, Drill-down | **Active:** Accept, Reject, Track, Complete |
| **Example** | "Traffic from Instagram is down 40%." | "Launch a Retargeting Ad on Instagram. (Est. cost: $50)" |
| **Data Structure** | Log / Stream | Task / Ticket (Status: Open, In Progress, Done) |

**The Flow:**
1.  **Data Ingestion:** IBIAS pulls data from Store.
2.  **Analysis:** AI detects "Cart Abandonment is high". -> **Creates Insight**.
3.  **Strategy:** AI determines "Sending an email recovery campaign usually fixes this". -> **Creates Recommendation**.
4.  **Action:** User sees Recommendation in "Action Center", clicks "Start", and marks as "In Progress".

---

## 4. Development Order (Strict)

1.  **Phase 1: Structure & Navigation (Current)**
    *   Renaming pages to match this plan.
    *   Updating Sidebar logic.
    *   Creating Layout shells for all 9 pages.
    *   **Validation Checkpoint.**

2.  **Phase 2: Page UI Implementation**
    *   Building the static UI for each page using "Trezo" components (rebranded to IBIAS).
    *   Ensuring the "Recommendations" Kanban/Task UI is solid.
    *   **Validation Checkpoint.**

3.  **Phase 3: Data & Logic**
    *   Connecting Supabase.
    *   Fetching real data.
    *   Implementing the "Insight -> Recommendation" logic flow.

---

**Next Immediate Action:** Rename "Sales" to "Revenue", ensure all 9 pages exist in the sidebar, and update the Layout shells.
