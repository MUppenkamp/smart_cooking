'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('app_user', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      first_name: {
        type: 'VARCHAR',
      },
      last_name: {
        type: 'VARCHAR',
      },
      password: {
        type: 'VARCHAR',
      },
      mail: {
        type: 'VARCHAR',
        unique: true,
      },
      picture: {
        type: 'VARCHAR',
      }
    });
    await queryInterface.createTable('recipe_week', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'app_user',
          key: 'id',
        }
      },
      start_date: {
        type: Sequelize.DATE,
      },
      end_date: {
        type: Sequelize.DATE,
      }
    });
    await queryInterface.createTable('difficulty', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: 'VARCHAR',
        unique: true,
      },
      icon: {
        type: 'VARCHAR'
      }
    });
    await queryInterface.createTable('recipe', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: 'VARCHAR'
      },
      duration: {
        type: Sequelize.INTEGER,
      },
      difficulty_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'difficulty',
          key: 'id',
        }
      },
      description: {
        type: 'VARCHAR',
      },
      calorific_value: {
        type: Sequelize.INTEGER,
      },
      protein: {
        type: Sequelize.INTEGER,
      },
      fat: {
        type: Sequelize.INTEGER,
      },
      carbohydrates: {
        type: Sequelize.INTEGER,
      },
      portion: {
        type: Sequelize.INTEGER,
      },
      picture: {
        type: 'VARCHAR',
      }
    });
    await queryInterface.createTable('user_2_recipe', {
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'app_user',
          key: 'id',
        }
      },
      recipe_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'recipe',
          key: 'id',
        }
      },
      is_favorite: {
        type: Sequelize.BOOLEAN,
      },
      is_own: {
        type: Sequelize.BOOLEAN,
      }
    });
    await queryInterface.createTable('recipe_week_day', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      recipe_week_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'recipe_week',
          key: 'id',
        }
      },
      day_date: {
        type: Sequelize.DATE,
      },
      recipe_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'recipe',
          key: 'id',
        }
      }
    });
    await queryInterface.createTable('quantity_unit', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: 'VARCHAR',
        unique: true,
      }
    });
    await queryInterface.createTable('recipe_ingredient', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      recipe_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'recipe',
          key: 'id',
        }
      },
      name: {
        type: 'VARCHAR',
      },
      quantity: {
        type: Sequelize.INTEGER,
      },
      quantity_unit_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'quantity_unit',
          key: 'id',
        }
      }
    });
    await queryInterface.createTable('recipe_week_day_shopping_list', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      is_checked: {
        type: Sequelize.BOOLEAN,
      },
      recipe_week_day_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'recipe_week_day',
          key: 'id',
        }
      },
      recipe_ingredient: {
        type: Sequelize.INTEGER,
        references: {
          model: 'recipe_ingredient',
          key: 'id',
        }
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('recipe_week_day_shopping_list');
    await queryInterface.dropTable('recipe_ingredient');
    await queryInterface.dropTable('quantity_unit');
    await queryInterface.dropTable('recipe_week_day');
    await queryInterface.dropTable('user_2_recipe');
    await queryInterface.dropTable('recipe');
    await queryInterface.dropTable('difficulty');
    await queryInterface.dropTable('recipe_week');
    await queryInterface.dropTable('app_user');
  }
};
