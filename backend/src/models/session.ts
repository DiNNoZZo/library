import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface SessionAttributes {
  sid: string;
  expires?: Date;
  data?: string;
  createdAt: Date;
  updatedAt: Date;
}

export type SessionPk = 'sid';
export type SessionId = Session[SessionPk];
export type SessionOptionalAttributes = 'expires' | 'data' | 'createdAt' | 'updatedAt';
export type SessionCreationAttributes = Optional<SessionAttributes, SessionOptionalAttributes>;

export class Session extends Model<SessionAttributes, SessionCreationAttributes> implements SessionAttributes {
  sid!: string;
  expires?: Date;
  data?: string;
  createdAt!: Date;
  updatedAt!: Date;

  static initModel(sequelize: Sequelize.Sequelize): typeof Session {
    return sequelize.define(
      'Session',
      {
        sid: {
          type: DataTypes.STRING(255),
          allowNull: false,
          primaryKey: true,
        },
        expires: {
          type: DataTypes.DATE,
          allowNull: true,
        },
        data: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
      },
      {
        tableName: 'sessions',
        timestamps: true,
        indexes: [
          {
            name: 'PRIMARY',
            unique: true,
            using: 'BTREE',
            fields: [{ name: 'sid' }],
          },
        ],
      },
    ) as typeof Session;
  }
}