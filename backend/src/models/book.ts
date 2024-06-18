// src/models/Book.ts
import { Model, DataTypes, Optional, Sequelize } from 'sequelize';
import {Library} from './library';

export interface BookAttributes {
  id: number;
  title: string;
  author: string;
  isbn: string;
  libraryId: number;
  createdAt: Date;
  updatedAt: Date;
  quantity: number;
}

export type BookCreationAttributes = Optional<BookAttributes, 'id'>;

export class Book extends Model<BookAttributes, BookCreationAttributes> implements BookAttributes {
  public id!: number;
  public title!: string;
  public author!: string;
  public isbn!: string;
  public libraryId!: number;
  public createdAt!: Date;
  public updatedAt!: Date;
  public quantity!: number;

  static initModel(sequelize: Sequelize): typeof Book {
    return Book.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          field: 'id',
        },
        title: {
          type: new DataTypes.STRING(255),
          allowNull: false,
          field: 'title',
        },
        author: {
          type: new DataTypes.STRING(255),
          allowNull: false,
          field: 'author',
        },
        isbn: {
          type: new DataTypes.STRING(128),
          allowNull: false,
          field: 'isbn',
        },
        libraryId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: Library,
            key: 'id',
          },
          field: 'library_id',
        },
        quantity: {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 1,
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
        tableName: 'books',
        timestamps: true,
      }
    );
  }
}
