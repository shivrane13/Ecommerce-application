import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ybrniuujdfbcmcywhxfw.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlicm5pdXVqZGZiY21jeXdoeGZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc3MDY4NDYsImV4cCI6MjA1MzI4Mjg0Nn0.H9S6Fl6IWirEbDECqoBHq0lH6kh2qOJmR7a_RNAJIdE";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
