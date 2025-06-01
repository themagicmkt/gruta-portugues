import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://konsgaaypofyafcdniru.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtvbnNnYWF5cG9meWFmY2RuaXJ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg3MzIzNTUsImV4cCI6MjA2NDMwODM1NX0.LEISN5lc0GjrUpKI6a-ohmsZA-KX_V-7camGdIYMwpk";

export const supabase = createClient(supabaseUrl, supabaseKey);