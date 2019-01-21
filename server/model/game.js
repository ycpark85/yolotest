module.exports = function(sequelize, DataTypes) {
    let game = sequelize.define('game', {
        code: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        userid: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: true


        },
        matnum: {
            type: DataTypes.INTEGER(255),
            allowNull: false
        },
        gate: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        gender: {
            type: DataTypes.STRING(255),
            allowNull: false
        }


    }, {
        charset: 'utf8',
        collate: 'utf8_general_ci'
    })
    return game
}