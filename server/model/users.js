module.exports = function(sequelize, DataTypes) {
    let users = sequelize.define('users', {
        u_id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: true


        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        gender: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        birth: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        agree: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        }


    }, {
        charset: 'utf8',
        collate: 'utf8_general_ci'
    })
    users.associate = function(model) {
        users.hasOne(model.sumtickets)
        users.hasMany(model.pticketlists)
        users.hasMany(model.lticketlists)
    };
    return users
}