import { createClient } from "@supabase/supabase-js"

function createServiceClient() {
    return createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE, {
        auth: { persistSession: true, storage: sessionStorage }
      })
}

export {
    createServiceClient
}