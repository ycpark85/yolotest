module.exports = function(sequelize, DataTypes) {
    let invitefris = sequelize.define('invitefris', {
        fcode: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        userid: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        targetid: {
            type: DataTypes.STRING(255),
            allowNull: false,

        },

    }, {
        charset: 'utf8',
        collate: 'utf8_general_ci'
    })
    invitefris.associate = function(model) {

        invitefris.belongsTo(model.profile)
    }
    return invitefris
}