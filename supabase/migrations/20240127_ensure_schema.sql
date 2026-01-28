create table if not exists public.user_profiles (
  id uuid references auth.users not null primary key,
  company_id uuid,
  full_name text,
  avatar_url text,
  role text,
  onboarding_completed boolean default false,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.user_profiles enable row level security;

do $$
begin
  if not exists (select from pg_policies where tablename = 'user_profiles' and policyname = 'Users can view their own profile') then
    create policy "Users can view their own profile" on public.user_profiles for select using (auth.uid() = id);
  end if;
  if not exists (select from pg_policies where tablename = 'user_profiles' and policyname = 'Users can update their own profile') then
    create policy "Users can update their own profile" on public.user_profiles for update using (auth.uid() = id);
  end if;
  if not exists (select from pg_policies where tablename = 'user_profiles' and policyname = 'Users can insert their own profile') then
    create policy "Users can insert their own profile" on public.user_profiles for insert with check (auth.uid() = id);
  end if;
end
$$;

create table if not exists public.store_connections (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users not null,
  platform text not null,
  store_name text,
  store_url text,
  status text default 'disconnected',
  is_active boolean default true,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.store_connections enable row level security;

do $$
begin
  if not exists (select from pg_policies where tablename = 'store_connections' and policyname = 'Users can view their own connections') then
    create policy "Users can view their own connections" on public.store_connections for select using (auth.uid() = user_id);
  end if;
  if not exists (select from pg_policies where tablename = 'store_connections' and policyname = 'Users can insert their own connections') then
    create policy "Users can insert their own connections" on public.store_connections for insert with check (auth.uid() = user_id);
  end if;
  if not exists (select from pg_policies where tablename = 'store_connections' and policyname = 'Users can update their own connections') then
    create policy "Users can update their own connections" on public.store_connections for update using (auth.uid() = user_id);
  end if;
end
$$;

create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.user_profiles (id, full_name, avatar_url)
  values (new.id, new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'avatar_url')
  on conflict (id) do nothing;
  return new;
end;
$$ language plpgsql security definer;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
