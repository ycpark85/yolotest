module.exports = function(sequelize, DataTypes) {
    let conlikes = sequelize.define('conlikes', {
        conl_code: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        }


    }, {
        charset: 'utf8',
        collate: 'utf8_general_ci'
    })
    conlikes.associate = function(model) {
        conlikes.belongsTo(model.admin_contents)
        conlikes.belongsTo(model.profile)

    };
    return conlikes
}