import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import { User, Note } from '../models/index.js';

dotenv.config();

const sequelize = new Sequelize(process.env.PG_URI, {
  dialect: 'postgres',
  logging: false, // Set to console.log to see SQL queries
});

// Test the connection and sync models
const initializeDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
    
    // Sync all models with the database
    await sequelize.sync({ alter: true });
    console.log('Database models have been synchronized.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

initializeDatabase();

export default sequelize; 