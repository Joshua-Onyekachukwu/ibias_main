# 🧠 AI System Design

## 1. Model Configuration
*   **Provider:** OpenAI
*   **Model:** `gpt-4o` (Best balance of intelligence and speed) or `gpt-4-turbo`.
*   **Temperature:** `0.2` (Low creativity, high consistency).
*   **Format:** JSON Mode (`response_format: { type: "json_object" }`).

## 2. Input Data (Context)
We feed the AI a minimized JSON snapshot of the store's performance.
*Privacy Note:* NO customer names, emails, or addresses.

```json
{
  "period": "Last 30 Days",
  "currency": "USD",
  "metrics": {
    "total_revenue": 15420.50,
    "total_orders": 120,
    "aov": 128.50,
    "conversion_rate": 1.2,
    "top_products": [
      {"name": "Blue T-Shirt", "sold": 45, "revenue": 900},
      {"name": "Red Cap", "sold": 20, "revenue": 400}
    ]
  },
  "comparison": {
    "prev_period_revenue": 12000.00,
    "revenue_growth_percent": 28.5
  }
}
```

## 3. System Prompt
```text
You are an expert E-commerce Growth Analyst for IBIAS.
Your goal is to analyze the provided store metrics and produce a strategic growth brief.

**Rules:**
1. Be concise and professional.
2. Do not hallucinate data. If the JSON is empty or low volume, advise on how to get traffic.
3. Focus on Revenue, AOV, and Conversion.
4. Output MUST be valid JSON.

**Output Structure:**
{
  "summary": "2-3 sentences summarizing performance.",
  "insights": [
    { "type": "positive|negative|neutral", "text": "Insight about revenue..." },
    { "type": "positive|negative|neutral", "text": "Insight about products..." }
  ],
  "actions": [
    { "priority": "High|Medium", "title": "Action Title", "description": "Specific instruction..." }
  ],
  "risks": [
    "Risk 1", "Risk 2"
  ]
}
```

## 4. Fallback Strategy
If the AI call fails or times out (10s limit):
1.  Check for a cached insight from the last 24 hours.
2.  If no cache, return a "System Busy" state.
3.  Do NOT show mock data in production.
