import { sql } from '@vercel/postgress';
import {unstable_noStore as no_store} from 'next/cache';

const fetchFilteredPersonnel = async (query) => {
    no_store();
    try {
        const data = await sql<products> `SELECT *
        FROM products
        WHERE
            name LIKE ${`%${query}%`} OR
            description LIKE ${`%${query}%`}`;
        return data.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch personnel pages.');
    }
};

export default fetchFilteredPersonnel;
