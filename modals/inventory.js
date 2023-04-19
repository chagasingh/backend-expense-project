const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Item = sequelize.define('item',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    amount :{
        type:Sequelize.DOUBLE,
        allowNull:false
    },
    name :{
        type:Sequelize.STRING,
        allowNull:false
    },
    description :{
        type:Sequelize.STRING,
        allowNull:false
    },
    quantity :{
        type:Sequelize.INTEGER,
        allowNull:false
    }
});

module.exports = Item;