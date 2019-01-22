module.exports = function(sequelize, DataTypes) {
    let moims = sequelize.define('moims', {
        moimcode: {
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
        text: {
            type: DataTypes.STRING,
            allowNull: false
        },
        minage: {
            type: DataTypes.STRING,
            allowNull: false
        },
        maxage: {
            type: DataTypes.STRING,
            allowNull: false
        },
        month: {
            type: DataTypes.STRING,
            allowNull: false
        },
        day: {
            type: DataTypes.STRING,
            allowNull: false
        }


    }, {
        charset: 'utf8',
        collate: 'utf8_general_ci'
    })
    moims.associate = function(model) {
        moims.belongsTo(model.admin_contents)

        moims.hasMany(model.moimjoins, {
            foreignkey: 'moimcode',
            onDelete: 'cascade'
        })
        moims.hasMany(model.joincoments, {
            foreignkey: 'moimcode',
            onDelete: 'cascade'
        })
    }

    return moims;
};