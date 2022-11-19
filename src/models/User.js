module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('User', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      displayName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    
    {
      timestamps: false, // remove a obrigatoriedade de utilizar os campos `createdAt` e `updatedAt`
      tableName: 'users',
      underscored: true,
    }
  )
  
  Users.associate = (models) => {
    Users.hasMany(models.BlogPost,
      { 
        foreignKey: 'userId',
        as: 'user'
      });
  };

  return Users;
}