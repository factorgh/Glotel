
import { createClient } from '@supabase/supabase-js'

const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFmbGpvY25pc2prbWpnbnFocnVlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE2Mjk0ODUsImV4cCI6MjAwNzIwNTQ4NX0._4vbIcQjUSZMimcXZ2r3_MTZXFq0mZvHgJvqvcLPzYU"
export const supabaseUrl = 'https://afljocnisjkmjgnqhrue.supabase.co'
const supabaseKey = API_KEY;
const supabase = createClient(supabaseUrl, supabaseKey)


export default supabase;