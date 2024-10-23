import { sql } from '@vercel/postgres';
import { unstable_noStore as no_store } from 'next/cache';

const fetchFilteredPersonnel = async (query) => {
    no_store();
    try {
        const data = await sql
        `SELECT *
        FROM personnel
        WHERE
            first_name LIKE ${`%${query}%`} OR
            last_name LIKE ${`%${query}%`} OR
            rank LIKE ${`%${query}%`}`;
        return data.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch personnel pages.');
    }
};

export default fetchFilteredPersonnel;
