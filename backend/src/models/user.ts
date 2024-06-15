import { Model, DataTypes, Optional, Sequelize } from 'sequelize';

export interface UserAttributes {
  id: number;
  username: string;
  password: string;
  role: 'student' | 'librarian';
  registeredAt: Date;
}

export type UserCreationAttributes = Optional<UserAttributes, 'id' | 'registeredAt'>;

export class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id!: number;
  public username!: string;
  public password!: string;
  public role!: 'student' | 'librarian';
  public registeredAt!: Date;

  static initModel(sequelize: Sequelize): typeof User {
    return User.init(
      {
        id: {
          type: DataTypes.INTEGER.UNSIGNED,
          autoIncrement: true,
          primaryKey: true,
          field: 'id',
        },
        username: {
          type: new DataTypes.STRING(128),
          allowNull: false,
          unique: true,
          field: 'username',
        },
        password: {
          type: new DataTypes.STRING(128),
          allowNull: false,
          field: 'password',
        },
        role: {
          type: new DataTypes.ENUM('student', 'librarian'),
          allowNull: false,
          field: 'role',
        },
        registeredAt: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: DataTypes.NOW,
          field: 'registered_at',
        },
      },
      {
        sequelize,
        tableName: 'users',
        timestamps: true,
        createdAt: false,
        updatedAt: false,
      }
    );
  }
}
