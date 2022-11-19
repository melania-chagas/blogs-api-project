const { BlogPost, Category, User } = require('../models');

const statusCodes = require('../helpers/statusCodes');

const { OK, NotFound } = statusCodes;

const { PostNotExist } = require('../helpers/errorMessages');

/* https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/0ca77b1d-4770-4646-8368-167d2305e763/day/94e113d7-6a86-4536-a1d3-08f55f557811/lesson/8f287e0e-5c70-4df4-be95-7c631ef2bf57 */

const serviceGetAllPosts = async () => {
  const result = await BlogPost.findAll({
    include: [{
      model: Category,
      as: 'categories',
    }, {
      model: User,
      as: 'user',
      attributes: {
        exclude: ['password'],
      },
    },
  ],
  });

  return {
    statusCode: OK,
    message: result.map(({ dataValues }) => dataValues),
  };
};

const serviceGetPostById = async (id) => {
  const [post] = await BlogPost.findAll({
    where: { id },
    include: [{ model: Category, as: 'categories' },
    { model: User, as: 'user', attributes: { exclude: ['password'] },
    }],
  });

  if (!post) {
    return {
      statusCode: NotFound,
      message: {
        message: PostNotExist,
      },
    };
  }

  return {
    statusCode: OK,
    message: post,
  };
};

module.exports = {
  serviceGetAllPosts,
  serviceGetPostById,
};