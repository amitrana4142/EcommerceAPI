const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('products', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    product_image: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    price: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    THC: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CBD: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    storeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'stores',
        key: 'id'
      }
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'categories',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'products',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "products_storeId_foreign_idx",
        using: "BTREE",
        fields: [
          { name: "storeId" },
        ]
      },
      {
        name: "products_categoryId_foreign_idx",
        using: "BTREE",
        fields: [
          { name: "categoryId" },
        ]
      },
    ]
  });
};
