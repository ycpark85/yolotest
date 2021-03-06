module.exports = function(sequelize, DataTypes) {
    let pticketlists = sequelize.define('pticketlists', {
        code: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        class: {
            type: DataTypes.STRING(255),
                allowNull: false
        },
        useid: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        ticketcount: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        },

    }, {
        charset: 'utf8',
        collate: 'utf8_general_ci'
    })
    pticketlists.associate = function(model) {

        pticketlists.belongsTo(model.users)
    }
    return pticketlists
}