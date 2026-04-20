-- Allow public (anonymous) users to read family tree data.
-- Keep write operations restricted to authenticated admin/editor roles.

alter table public.persons enable row level security;
alter table public.relationships enable row level security;

drop policy if exists "Enable read access for authenticated users" on public.persons;
create policy "Enable read access for anon and authenticated users"
on public.persons
for select
to anon, authenticated
using (true);

drop policy if exists "Enable read access for authenticated users" on public.relationships;
create policy "Enable read access for anon and authenticated users"
on public.relationships
for select
to anon, authenticated
using (true);
