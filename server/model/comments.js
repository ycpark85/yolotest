module.exports = function(sequelize, DataTypes) {
    let comments = sequelize.define('comments', {
        code: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        comments: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },

    }, {
        charset: 'utf8',
        collate: 'utf8_general_ci'
    })
    comments.associate = function(model) {
        comments.belongsTo(model.posts)
        comments.belongsTo(model.profile)
    };
    return comments
}