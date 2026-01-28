'use server'

import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

export async function connectStore(prevState: unknown, formData: FormData) {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/auth/signin')
  }

  const platform = formData.get('platform') as string
  const storeName = formData.get('store_name') as string
  const storeUrl = formData.get('store_url') as string

  // 1. Create store connection
  const { error: connectionError } = await supabase
    .from('store_connections')
    .insert({
      user_id: user.id,
      platform,
      store_name: storeName,
      store_url: storeUrl,
      status: 'connected', // Simulating connection for now
      is_active: true,
    })

  if (connectionError) {
    return { error: connectionError.message }
  }

  // 2. Update user profile
  const { error: profileError } = await supabase
    .from('user_profiles')
    .update({ onboarding_completed: true })
    .eq('id', user.id)

  if (profileError) {
    return { error: 'Failed to update profile status' }
  }

  revalidatePath('/dashboard')
  redirect('/dashboard')
  return { error: '' }
}
