import { DataTypes } from 'sequelize';
import sequelize from '../db/index.js';

// Define User model
const User = sequelize.define('User', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  }
});

// Define Note model
const Note = sequelize.define('Note', {
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  }
});

// Define associations
User.hasMany(Note, { foreignKey: 'userId' });
Note.belongsTo(User, { foreignKey: 'userId' });

export { User, Note }; 