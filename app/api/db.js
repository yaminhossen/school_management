// const dbConfig = require("../config/dbConfig");

const { Sequelize, DataTypes } = require('sequelize');
const dbConfig = require('../../configs/db.config.js');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,

        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
)


sequelize.authenticate()
    .then(() => {
        console.log('connected..');
    })
    .catch(err => {
        console.log('Error' + err);
    })

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

// db.products = require('./product/model/model.js')(sequelize, DataTypes)

// user
db.user_Designations = require('./user/user_designations/model/model.js')(sequelize, DataTypes)
db.user_infos = require('./user/user_infos/model/model.js')(sequelize, DataTypes)
db.user_work_departments = require('./user/user_work_departments/model/model.js')(sequelize, DataTypes)
db.user_work_users = require('./user/user_work_users/model/model.js')(sequelize, DataTypes)
db.user_works = require('./user/user_works/model/model.js')(sequelize, DataTypes)
db.users = require('./user/users/model/model.js')(sequelize, DataTypes)





db.sequelize.sync({ force: false })
    .then(() => {
        console.log('yes sequelize re-sync done!');
    })




module.exports = db