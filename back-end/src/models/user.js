const UserSchema = (sequelize, DataTypes) => {
  const UserTable = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    balance: DataTypes.INTEGER,
    created: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, {
    tableName: 'users',
    underscored: true,
    timestamps: true,
    createdAt: 'created',
    updatedAt: 'updated',
  });

  return UserTable;
}

module.exports = UserSchema;