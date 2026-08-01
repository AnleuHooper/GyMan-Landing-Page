import { createClient } from '@supabase/supabase-js';
import fs from 'fs';

const envConfig = fs.readFileSync('.env', 'utf-8');
const envVars = {};
envConfig.split('\n').forEach(line => {
  const [key, value] = line.split('=');
  if (key && value) {
    envVars[key.trim()] = value.trim();
  }
});

const supabaseUrl = envVars.NEXT_PUBLIC_SUPABASE_URL || envVars.VITE_SUPABASE_URL;
const supabaseAnonKey = envVars.NEXT_PUBLIC_SUPABASE_ANON_KEY || envVars.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Faltan las variables de entorno de Supabase.");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function main() {
  console.log("Desactivando promociones de julio en branch_memberships...");
  const { data, error } = await supabase
    .from('branch_memberships')
    .update({ is_active: false })
    .ilike('name', '%Julio%');

  if (error) {
    console.error("Error al actualizar Supabase:", error);
  } else {
    console.log("Promociones de julio desactivadas correctamente en Supabase.");
  }
}

main();
