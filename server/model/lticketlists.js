module.exports = function(sequelize, DataTypes) {
    let lticketlists = sequelize.define('lticketlists', {
        postcode: {
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
    lticketlists.associate = function(model) {

        lticketlists.belongsTo(model.users)
    }
    return lticketlists
}