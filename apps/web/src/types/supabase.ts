export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      user_profiles: {
        Row: {
          id: string
          company_id: string | null
          full_name: string | null
          avatar_url: string | null
          role: string | null
          created_at: string
          updated_at: string
          onboarding_completed: boolean | null
        }
        Insert: {
          id: string
          company_id?: string | null
          full_name?: string | null
          avatar_url?: string | null
          role?: string | null
          created_at?: string
          updated_at?: string
          onboarding_completed?: boolean | null
        }
        Update: {
          id?: string
          company_id?: string | null
          full_name?: string | null
          avatar_url?: string | null
          role?: string | null
          created_at?: string
          updated_at?: string
          onboarding_completed?: boolean | null
        }
      }
      store_connections: {
        Row: {
          id: string
          user_id: string | null
          platform: string | null
          store_name: string | null
          store_url: string | null
          status: string | null
          is_active: boolean | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id?: string | null
          platform?: string | null
          store_name?: string | null
          store_url?: string | null
          status?: string | null
          is_active?: boolean | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string | null
          platform?: string | null
          store_name?: string | null
          store_url?: string | null
          status?: string | null
          is_active?: boolean | null
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
