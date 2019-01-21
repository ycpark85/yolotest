module.exports = function(sequelize, DataTypes) {
    let admin_contents = sequelize.define('admin_contents', {
        habi_code: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        adress: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tag: {
            type: DataTypes.STRING,
            allowNull: false
        },
        exp: {
            type: DataTypes.STRING,
            allowNull: false
        },
        video: {
            type: DataTypes.STRING,
            allowNull: false
        }



    }, {
        charset: 'utf8',
        collate: 'utf8_general_ci'
    })
    admin_contents.associate = function(model) {
        admin_contents.belongsTo(model.company)
        admin_contents.hasMany(model.conlikes)
    }

    return admin_contents;
};