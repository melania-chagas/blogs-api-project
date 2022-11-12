module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },

    },
    
    {
      timestamps: false, // remove a obrigatoriedade de utilizar os campos `createdAt` e `updatedAt`
      tableName: 'posts_categories',
      underscored: true,
    }
  )
  
  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(
        models.Category, {
          foreignKey: 'categoryId',
          through: PostCategory,
          otherKey: 'postId',
        }
      )

    models.Category.belongsToMany(
      models.BlogPost, {
        foreignKey: 'postId',
        through: PostCategory,
        otherKey: 'categoryId',
      }
    )
  
  };


  return PostCategory;
}