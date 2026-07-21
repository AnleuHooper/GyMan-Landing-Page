import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const supabaseUrl  = 'https://wnhnpnlbembafqafukqy.supabase.co';
const supabaseKey  = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InduaG5wbmxiZW1iYWZxYWZ1a3F5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE4OTk2MTAsImV4cCI6MjA4NzQ3NTYxMH0.xkanseIRlDnTagl0N4jIundz8JRNRWG7hYjsD8BoNRE';

export const supabase = createClient(supabaseUrl, supabaseKey);
