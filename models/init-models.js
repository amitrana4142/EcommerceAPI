var DataTypes = require("sequelize").DataTypes;
var _addresses = require("./addresses");
var _categories = require("./categories");
var _products = require("./products");
var _stores = require("./stores");
var _users = require("./users");

function initModels(sequelize) {
  var addresses = _addresses(sequelize, DataTypes);
  var categories = _categories(sequelize, DataTypes);
  var products = _products(sequelize, DataTypes);
  var stores = _stores(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  products.belongsTo(categories, { as: "category", foreignKey: "categoryId"});
  categories.hasMany(products, { as: "products", foreignKey: "categoryId"});
  products.belongsTo(stores, { as: "store", foreignKey: "storeId"});
  stores.hasMany(products, { as: "products", foreignKey: "storeId"});

  return {
    addresses,
    categories,
    products,
    stores,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
