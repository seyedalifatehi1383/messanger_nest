import { Injectable } from '@nestjs/common';
import { createPool, Pool } from 'mysql2/promise';

@Injectable()
export class DatabaseService {
  private readonly pool: Pool;

  constructor() {
    this.pool = createPool({
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'messenger',
      connectionLimit: 100, // adjust as needed
    });
  }

  async query(sql: string, values?: any[]): Promise<any> {
    const connection = await this.pool.getConnection();
    try {
      const [rows] = await connection.query(sql, values);
      return rows;
    } finally {
      connection.release();
    }
  }
}
