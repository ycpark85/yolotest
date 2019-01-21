module.exports = function(sequelize, DataTypes) {
    let company = sequelize.define('company', {
        companycode: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        adress: {
            type: DataTypes.STRING,
            allowNull: false
        },

        img: {
            type: DataTypes.STRING,
            allowNull: true
        }



    }, {
        charset: 'utf8',
        collate: 'utf8_general_ci'
    })
    company.associate = function(model) {
        company.hasMany(model.admin_contents)
    }

    return company;
};