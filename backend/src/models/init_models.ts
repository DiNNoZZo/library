import type { Sequelize } from 'sequelize';
import { User as _User } from './user';
import type { UserAttributes, UserCreationAttributes } from './user';
import { Library as _Library } from './library';
import type { LibraryAttributes, LibraryCreationAttributes } from './library';
import { Book as _Book } from './book';
import type { BookAttributes, BookCreationAttributes } from './book';
import { Loan as _Loan } from './loan';
import type { LoanAttributes, LoanCreationAttributes } from './loan';
import { Session as _Session } from './session';
import type { SessionAttributes, SessionCreationAttributes } from './session';

export {
  _User as User,
  _Library as Library,
  _Book as Book,
  _Loan as Loan,
  _Session as Session,
};

export type {
  UserAttributes,
  UserCreationAttributes,
  LibraryAttributes,
  LibraryCreationAttributes,
  BookAttributes,
  BookCreationAttributes,
  LoanAttributes,
  LoanCreationAttributes,
  SessionAttributes,
  SessionCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const User = _User.initModel(sequelize);
  const Library = _Library.initModel(sequelize);
  const Book = _Book.initModel(sequelize);
  const Loan = _Loan.initModel(sequelize);
  const Session = _Session.initModel(sequelize);

  Book.belongsTo(Library, { foreignKey: 'libraryId' });
  Loan.belongsTo(User, { foreignKey: 'userId' });
  Loan.belongsTo(Book, { foreignKey: 'bookId' });
  Library.hasMany(Book, { foreignKey: 'libraryId' });
  User.hasMany(Loan, { foreignKey: 'userId' });

  return {
    User,
    Library,
    Book,
    Loan,
    Session,
  };
}
 