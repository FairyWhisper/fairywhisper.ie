import { neon } from '@neondatabase/serverless';
import 'dotenv/config';


const sql = neon(process.env.DATABASE_URL);

async function addFact(text) {
  await sql.query('INSERT INTO facts (fact) VALUES ($1)', [text]);
  console.log('Fact added:', text);
}

addFact("This is my first fact!");
