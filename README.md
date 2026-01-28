# IBIAS - AI E-commerce Analyst

Your autonomous e-commerce growth analyst. IBIAS connects to your store, analyzes your data, and provides actionable insights to grow your revenue.

## Tech Stack

- **Frontend**: Next.js 15 (App Router), Tailwind CSS v4, ShadCN UI
- **Backend**: Supabase (Auth, Database, Storage)
- **State Management**: React 19 Server Actions & useActionState
- **Icons**: Material Symbols, Remix Icon

## Getting Started

### Prerequisites

- Node.js 18+
- Supabase account and project

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Joshua-Onyekachukwu/ibias_main.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in `apps/web` with your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

## Project Structure

- `apps/web`: Main frontend (Landing, Auth, Dashboard)
- `supabase/migrations`: Database schema and triggers
