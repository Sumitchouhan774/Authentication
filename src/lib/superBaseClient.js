// lib/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qtwfbfngdrnensjuembx.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF0d2ZiZm5nZHJuZW5zanVlbWJ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQzNDgzNzgsImV4cCI6MjA1OTkyNDM3OH0.-9YIOB-4EacPdMLxq1mVD6yK-0DgjPXEqyq_Oc_JI-0'

export const supabase = createClient(supabaseUrl, supabaseKey)