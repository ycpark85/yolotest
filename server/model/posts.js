module.exports = function(sequelize, DataTypes) {
    let posts = sequelize.define('posts', {
        postcode: {
            type: DataTypes.STRING(255),
            primaryKey: true,
            allowNull: false
        },
        userid: {
            type: DataTypes.STRING(255),
            allowNull: false

        },
        mainimg: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        postimg: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        contents: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        hashtag: {
            type: DataTypes.STRING(255),
            allowNull: true
        }

    }, {
        charset: 'utf8',
        collate: 'utf8_general_ci'
    })
    posts.associate = function(model) {
        posts.hasMany(model.comments, {
            foreignkey: 'postcode',
            onDelete: 'cascade'
        })
        posts.hasMany(model.likes, {
            foreignkey: 'postcode',
            onDelete: 'cascade'
        })
        posts.belongsTo(model.profile)
    }
    return posts
}