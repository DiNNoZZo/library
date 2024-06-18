import type { Sequelize } from 'sequelize';
import { User as _User } from './user';
import type { UserAttributes, UserCreationAttributes } from './user';
import { Library as _Library } from './library';
import type { LibraryAttributes, LibraryCreationAttributes } from './library';
import { Book as _Book } from './book';
import type { BookAttributes, BookCreationAttributes } from './book';
import { Borrowing as _Borrowing } from './borrowing';
import type { BorrowingAttributes, BorrowingCreationAttributes } from './borrowing';
import { History as _History } from './history';
import type { HistoryAttributes, HistoryCreationAttributes } from './history';

export {
  _User as User,
  _Library as Library,
  _Book as Book,
  _Borrowing as Borrowing,
  _History as History,
};

export type {
  UserAttributes,
  UserCreationAttributes,
  LibraryAttributes,
  LibraryCreationAttributes,
  BookAttributes,
  BookCreationAttributes,
  BorrowingAttributes,
  BorrowingCreationAttributes,
  HistoryAttributes,
  HistoryCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const User = _User.initModel(sequelize);
  const Library = _Library.initModel(sequelize);
  const Book = _Book.initModel(sequelize);
  const Borrowing = _Borrowing.initModel(sequelize);
  const History = _History.initModel(sequelize);

  Book.belongsTo(Library, { foreignKey: 'libraryId' });
  Borrowing.belongsTo(User, { foreignKey: 'userId' });
  Borrowing.belongsTo(Book, { foreignKey: 'bookId' });
  History.belongsTo(User, { foreignKey: 'userId' });
  History.belongsTo(Book, { foreignKey: 'bookId' });
  Library.hasMany(Book, { foreignKey: 'libraryId' });
  User.hasMany(Borrowing, { foreignKey: 'userId' });
  User.hasMany(History, { foreignKey: 'userId' });

  return {
    User,
    Library,
    Book,
    Borrowing,
    History,
  };
}
