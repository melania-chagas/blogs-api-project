module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
      },
      published:{ 
        type: DataTypes.DATE,
        defaultValue: new Date(),
      },
      updated:{ 
        type: DataTypes.DATE,
        defaultValue: new Date(),
      },
    },

    {
      timestamps: false, // remove a obrigatoriedade de utilizar os campos `createdAt` e `updatedAt`
      tableName: 'blog_posts',
      underscored: true,
    }
  )

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User,
      { 
        foreignKey: 'userId',
        as: 'user',
      });
  };

  return BlogPost;
}