module.exports = function(sequelize, DataTypes) {
    let soulfriends = sequelize.define('soulfriends', {
        s_code: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        userid: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        s_friend: {
            type: DataTypes.STRING(255),
            allowNull: false,

        },
        categorie: {
            type: DataTypes.STRING(255),
            allowNull: false
        }

    }, {
        charset: 'utf8',
        collate: 'utf8_general_ci'
    })

    return soulfriends
}