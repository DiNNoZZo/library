import { Model, DataTypes, Optional, Sequelize } from 'sequelize';

export interface BorrowingAttributes {
  id: number;
  userId: number;
  bookId: number;
  borrowedAt: Date;
  returnedAt: Date | null;
}

export type BorrowingCreationAttributes = Optional<BorrowingAttributes, 'id' | 'returnedAt'>;

export class Borrowing extends Model<BorrowingAttributes, BorrowingCreationAttributes> implements BorrowingAttributes {
  public id!: number;
  public userId!: number;
  public bookId!: number;
  public borrowedAt!: Date;
  public returnedAt!: Date | null;

  static initModel(sequelize: Sequelize): typeof Borrowing {
    return Borrowing.init(
      {
        id: {
          type: DataTypes.INTEGER.UNSIGNED,
          autoIncrement: true,
          primaryKey: true,
          field: 'id',
        },
        userId: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
          field: 'user_id',
        },
        bookId: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
          field: 'book_id',
        },
        borrowedAt: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: DataTypes.NOW,
          field: 'borrowed_at',
        },
        returnedAt: {
          type: DataTypes.DATE,
          allowNull: true,
          field: 'returned_at',
        },
      },
      {
        sequelize,
        tableName: 'borrowings',
        timestamps: true,
        createdAt: false,
        updatedAt: false,
      }
    );
  }
}
