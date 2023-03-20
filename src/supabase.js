import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ydnqtfqkfumrnvzfbhfh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlkbnF0ZnFrZnVtcm52emZiaGZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg3MjQ0NTksImV4cCI6MTk5NDMwMDQ1OX0.xjZZ_AMcFPe4pQ76I-IoRwdZLlVVoSSo3Ydb5cXbsro";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
