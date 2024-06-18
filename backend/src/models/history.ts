import { Model, DataTypes, Optional, Sequelize } from 'sequelize';

export interface HistoryAttributes {
  id: number;
  userId: number;
  action: 'borrowed' | 'returned';
  bookId: number;
  timestamp: Date;
}

export type HistoryCreationAttributes = Optional<HistoryAttributes, 'id'>;

export class History extends Model<HistoryAttributes, HistoryCreationAttributes> implements HistoryAttributes {
  public id!: number;
  public userId!: number;
  public action!: 'borrowed' | 'returned';
  public bookId!: number;
  public timestamp!: Date;

  static initModel(sequelize: Sequelize): typeof History {
    return History.init(
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
        action: {
          type: new DataTypes.ENUM('borrowed', 'returned'),
          allowNull: false,
          field: 'action',
        },
        bookId: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
          field: 'book_id',
        },
        timestamp: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: DataTypes.NOW,
          field: 'timestamp',
        },
      },
      {
        sequelize,
        tableName: 'histories',
        timestamps: true,
        createdAt: false,
        updatedAt: false,
      }
    );
  }
}
