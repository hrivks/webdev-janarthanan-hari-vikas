import { Injectable } from '@angular/core';
import { User } from '../model/model';

@Injectable()
export class UserService {

  constructor() { }
  // list of users
  users: User[] = [
    { _id: '123', username: 'alice', password: 'alice', firstName: 'Alice', lastName: 'Wonder' },
    { _id: '234', username: 'bob', password: 'bob', firstName: 'Bob', lastName: 'Marley' },
    { _id: '345', username: 'charly', password: 'charly', firstName: 'Charly', lastName: 'Garcia' },
    { _id: '456', username: 'jannunzi', password: 'jannunzi', firstName: 'Jose', lastName: 'Annunzi' }
  ];

  api = {
    'createUser': this.createUser,
    'findUserById': this.findUserById,
    'findUserByUsername': this.findUserByUsername,
    'findUserByCredentials': this.findUserByCredentials,
    'updateUser': this.updateUser,
    'deleteUser': this.deleteUser
  };

  /**
   * Create a new user
   * @param user user object to be added to the user list
   * @returns created user object
   */
  createUser(user: User): User {
    let id = Math.floor(Math.random() * 10000);

    // ensure generated ID is unique
    while (this.findUserById(id.toString())) {
      id++;
    }

    user._id = id.toString();
    this.users.push(user);
    return Object.assign({}, user);
  }

  /**
   * Find user by user id
   * @param userId id of the user
   * @returns user with the specifed id; null if id doesn't exist
   */
  findUserById(userId: string): User {
    const user = this.users.find(u => u._id === userId);
    return user ? Object.assign({}, user) : null;
  }

  /**
   * Find user by user name
   * @param username username of the user
   * @returns user with the specifed username; null if id doesn't exist
   */
  findUserByUsername(username: string): User {
    const user = this.users.find(u => u.username === username);
    return user ? Object.assign({}, user) : null;
  }

  /**
   * Find user by credentials
   * @param username username of the user
   * @param password password of the user
   * @returns user with the specifed username; null if id doesn't exist
   */
  findUserByCredentials(username: string, password: string): User {
    const user = this.users.find(u => u.username === username && u.password === password);
    return user ? Object.assign({}, user) : null;
  }

  /**
   * Update user by user id
   * @param {string} userId id of the user
   * @param user updated user object
   * @returns updated user object
   */
  updateUser(userId: string, user: User): User {
    const toUpdateIndex = this.users.findIndex(u => u._id === userId);
    if (toUpdateIndex > -1) {
      this.users[toUpdateIndex] = user;
      return Object.assign({}, user);
    } else {
      return null;
    }
  }

  /**
   * Delete user by user id
   * @param {string} userId id of the user
   * @returns deleted user object
   */
  deleteUser(userId: string): User {
    const toDeleteIndex = this.users.findIndex(u => u._id === userId);
    const toDelete = this.users[toDeleteIndex];
    if (toDelete) {
      this.users.splice(toDeleteIndex, 1);
    }
    return toDelete;
  }
}
