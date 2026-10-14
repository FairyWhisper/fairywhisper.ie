import 'dotenv/config';
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL);

async function getFacts() {
  const result = await sql.query('SELECT * FROM facts');
  console.log(result.rows);
}

getFacts();
