import { createClient } from "@supabase/supabase-js";
import { useSession } from "next-auth/react";

export const useSupabase = () => {
  const { data: session } = useSession();
  const { supabaseAccessToken } = session;

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      global: {
        headers: {
          Authorization: `Bearer ${supabaseAccessToken}`,
        },
      },
    }
  );

  return supabase;
};

export const fetchData = async (supabase) => {
  const { data, error } = await supabase.from("users").select("*");
  console.log(data, error);
};
