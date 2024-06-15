import { Model, DataTypes, Optional, Sequelize } from 'sequelize';

export interface LibraryAttributes {
  id: number;
  name: string;
  location: string;
  createdAt: Date;
  updatedAt: Date;
}

export type LibraryCreationAttributes = Optional<LibraryAttributes, 'id'>;

export class Library extends Model<LibraryAttributes, LibraryCreationAttributes> implements LibraryAttributes {
  public id!: number;
  public name!: string;
  public location!: string;
  public createdAt!: Date;
  public updatedAt!: Date;

  static initModel(sequelize: Sequelize): typeof Library {
    return Library.init(
      {
        id: {
          type: DataTypes.INTEGER.UNSIGNED,
          autoIncrement: true,
          primaryKey: true,
          field: 'id',
        },
        name: {
          type: new DataTypes.STRING(128),
          allowNull: false,
          field: 'name',
        },
        location: {
          type: new DataTypes.STRING(128),
          allowNull: false,
          field: 'location',
        },
        createdAt: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: DataTypes.NOW,
          field: 'created_at',
        },
        updatedAt: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: DataTypes.NOW,
          field: 'updated_at',
        },
      },
      {
        sequelize,
        tableName: 'libraries',
        timestamps: true,
      }
    );
  }
}
