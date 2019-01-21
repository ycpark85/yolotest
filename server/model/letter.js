module.exports = function(sequelize, DataTypes) {
    let letter = sequelize.define('letter', {
        lecode: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        sendid: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        receptid: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        content: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        color: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        confirm: {
            type: DataTypes.INTEGER(11),
            defaultValue: 0
        },
        block: {
            type: DataTypes.INTEGER(11),
            defaultValue: 0
        }

    }, {
        charset: 'utf8',
        collate: 'utf8_general_ci'
    })
    letter.associate = function(model) {

        letter.belongsTo(model.profile)
    }
    return letter
}