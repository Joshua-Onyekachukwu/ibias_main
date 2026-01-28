import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import DashboardLayoutProvider from '@/components/Dashboard/Layout/DashboardLayoutProvider'

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/auth/signin')
  }

  const { data: profile } = await supabase
    .from('user_profiles')
    .select('*')
    .eq('id', user.id)
    .single()

  // Ensure onboarding is completed
  if (!profile?.onboarding_completed) {
    redirect('/onboarding')
  }

  return (
    <DashboardLayoutProvider>
      {children}
    </DashboardLayoutProvider>
  )
}
