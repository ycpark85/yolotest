module.exports = function(sequelize, DataTypes) {
    let admin_cash = sequelize.define('admin_cash', {
        cash_code: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        cash_cate: {
            type: DataTypes.INTEGER(11),
            defalutValue: 1
        },
        chash_info: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        cash: {
            type: DataTypes.INTEGER(11),
            defalutValue: 0
        }


    }, {
        charset: 'utf8',
        collate: 'utf8_general_ci'
    })

    return admin_cash
}