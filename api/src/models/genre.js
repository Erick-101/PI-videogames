const { DataTypes} = require ("sequelize");

module.exports=(Sequelize)=>{
    Sequelize.define("post",{
        id : {
            type:DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        
        },
    });
};