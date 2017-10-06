import { Injectable } from '@angular/core';

@Injectable()
export class WidgetService {

  constructor() { }

  users = [
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
   */
  createUser(user: any) {
    user._id = Math.floor(Math.random() * 1000).toString();

    // ensure generated ID is unique
    while (this.findUserById(user._id)) {
      user._id++;
    }

    this.users.push(user);
    return user;
  }

  /**
   * Find user by user id
   * @param userId id of the user
   */
  findUserById(userId: string) {
    return this.users.find(u => u._id === userId);
  }

  /**
   * Find user by user name
   * @param username username of the user
   */
  findUserByUsername(username: string) {
    return this.users.find(u => u.username === username);
  }

  /**
   * Find user by credentials
   * @param username username of the user
   * @param password password of the user
   */
  findUserByCredentials(username: string, password: string) {
    return this.users.find(u => u.username === username && u.password === password);
  }

  /**
   * Update user by user id
   * @param {string} userId id of the user
   * @param {any} user updated user object
   * @returns {any} updated user object
   */
  updateUser(userId: string, user) {
    const toUpdateIndex = this.users.findIndex(u => u._id === userId);
    const toUpdate = this.users[toUpdateIndex];
    if (toUpdate) {
      for (const key in user) {
        if (user.hasOwnProperty(key)) {
          toUpdate[key] = user[key];
        }
      }
    }
    return toUpdate;
  }

  /**
   * Delete user by user id
   * @param {string} userId id of the user
   * @returns {any} deleted user object
   */
  deleteUser(userId: string) {
    const toDeleteIndex = this.users.findIndex(u => u._id === userId);
    const toDelete = this.users[toDeleteIndex];
    if (toDelete) {
      this.users.splice(toDeleteIndex, 1);
    }
    return toDelete;
  }
}
