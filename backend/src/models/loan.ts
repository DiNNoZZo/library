// src/models/Loan.ts
import { Model, DataTypes, Optional, Sequelize } from 'sequelize';
import {User} from './user';
import {Book} from './book';

export interface LoanAttributes {
  id: number;
  bookId: number;
  userId: number;
  borrowedAt: Date;
  returnedAt?: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

export type LoanCreationAttributes = Optional<LoanAttributes, 'id' | 'returnedAt'>;

export class Loan extends Model<LoanAttributes, LoanCreationAttributes> implements LoanAttributes {
  public id!: number;
  public bookId!: number;
  public userId!: number;
  public borrowedAt!: Date;
  public returnedAt!: Date | null;
  public createdAt!: Date;
  public updatedAt!: Date;

  static initModel(sequelize: Sequelize): typeof Loan {
    return Loan.init(
      {
        id: {
          type: DataTypes.INTEGER.UNSIGNED,
          autoIncrement: true,
          primaryKey: true,
          field: 'id',
        },
        bookId: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
          references: {
            model: Book,
            key: 'id',
          },
          field: 'book_id',
        },
        userId: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
          references: {
            model: User,
            key: 'id',
          },
          field: 'user_id',
        },
        borrowedAt: {
          type: DataTypes.DATE,
          allowNull: false,
          field: 'borrowed_at',
        },
        returnedAt: {
          type: DataTypes.DATE,
          allowNull: true,
          field: 'returned_at',
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
        tableName: 'loans',
        timestamps: true,
      }
    );
  }
}
