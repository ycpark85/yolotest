module.exports = function(sequelize, DataTypes) {
    let profile = sequelize.define('profile', {
        u_id: {
            type: DataTypes.INTEGER(11),
            unique: true,
            autoIncrement: true,
            allowNull: false
        },
        userid: {
            type: DataTypes.STRING(255),
            allowNull: false,
            primaryKey: true,


        },
        nickname: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        image: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        blood: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        locate: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        job: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        marred: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        love: {
            type: DataTypes.STRING(255),
            allowNull: false
        },

        charecter: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        interest: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        apear: {
            type: DataTypes.STRING(255),
            allowNull: false
        }
    }, {
        charset: 'utf8',
        collate: 'utf8_general_ci'
    })
    profile.associate = function(model) {
        profile.hasMany(model.comments)
        profile.hasMany(model.conlikes)
        profile.hasMany(model.letter)
        profile.hasMany(model.posts)
        profile.hasMany(model.interfriends)
        profile.hasMany(model.addfriends)
        profile.hasMany(model.friends)
        profile.hasMany(model.invitefris)
    };
    return profile
}