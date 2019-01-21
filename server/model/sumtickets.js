module.exports = function(sequelize, DataTypes) {
    let sumtickets = sequelize.define('sumtickets', {
        code: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        lticket: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            defaultValue: 0
        },
        pticket: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            defaultValue: 0
        },
        point: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            defaultValue: 0
        }

    }, {
        charset: 'utf8',
        collate: 'utf8_general_ci'
    })
    sumtickets.associate = function(model) {
        sumtickets.belongsTo(model.users, {
            foreignKey: {
                unique: true,
                allowNull: false
            },
            onDelete: 'CASCADE'
        })
    }
    return sumtickets
}