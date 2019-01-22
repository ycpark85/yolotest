module.exports = function(sequelize, DataTypes) {
    let moimjoins = sequelize.define('moimjoins', {
        moimcode: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        position: {
            type: DataTypes.STRING(255),
            allowNull: true
        }



    }, {
        charset: 'utf8',
        collate: 'utf8_general_ci'
    })
    moimjoins.associate = function(model) {
        moimjoins.belongsTo(model.moims)
        moimjoins.belongsTo(model.profile)
        moimjoins.belongsTo(model.admin_contents)


    }

    return moimjoins;
};