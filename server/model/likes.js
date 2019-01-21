module.exports = function(sequelize, DataTypes) {
    let likes = sequelize.define('likes', {
        lcode: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        postid: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        userid: {
            type: DataTypes.STRING(255),
            allowNull: false
        },

    }, {
        charset: 'utf8',
        collate: 'utf8_general_ci'
    })
    likes.associate = function(model) {
        likes.belongsTo(model.posts)

    };
    return likes
}