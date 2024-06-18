import { Model, DataTypes, Optional, Sequelize } from 'sequelize';
import { ROLE } from '../types';

export interface UserAttributes {
  id: number;
  libraryId: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: ROLE;
  registeredAt: Date;
  updatedAt: Date;
}

export type UserCreationAttributes = Optional<UserAttributes, 'id' | 'registeredAt' | 'updatedAt'>;

export class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id!: number;
  public libraryId!: number;
  public firstName!: string;
  public lastName!: string;
  public password!: string;
  public email!: string;
  public role!: ROLE;
  public registeredAt!: Date;
  public updatedAt!: Date;

  static initModel(sequelize: Sequelize): typeof User {
    return User.init(
      {
        id: {
          type: DataTypes.INTEGER.UNSIGNED,
          autoIncrement: true,
          primaryKey: true,
          field: 'id',
        },
        libraryId: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: true,
          field: 'library_id',
        },
        firstName: {
          type: new DataTypes.STRING(128),
          allowNull: false,
          field: 'first_name',
        },
        lastName: {
          type: new DataTypes.STRING(128),
          allowNull: false,
          field: 'last_name',
        },
        email: {
          type: new DataTypes.STRING(128),
          allowNull: false,
          unique: true,
          field: 'email',
        },
        password: {
          type: new DataTypes.STRING(128),
          allowNull: false,
          field: 'password',
        },
        role: {
          type: new DataTypes.ENUM('superadmin', 'admin', 'student'),
          allowNull: false,
          field: 'role',
        },
        registeredAt: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: DataTypes.NOW,
          field: 'registered_at',
        },
        updatedAt: {
          type: DataTypes.DATE,
          allowNull: true,
          defaultValue: DataTypes.NOW,
          field: 'updated_at',
        },
      },
      {
        sequelize,
        tableName: 'users',
        timestamps: true,
        createdAt: false,
      }
    );
  }
}
