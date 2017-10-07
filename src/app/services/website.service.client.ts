import { Injectable } from '@angular/core';
import { Website } from '../model/model';

@Injectable()
export class WebsiteService {

  constructor() { }

  websites: Website[] = [
    { '_id': '123', 'name': 'Facebook', 'developerId': '456', 'description': 'Lorem' },
    { '_id': '234', 'name': 'Tweeter', 'developerId': '456', 'description': 'Lorem' },
    { '_id': '456', 'name': 'Gizmodo', 'developerId': '456', 'description': 'Lorem' },
    { '_id': '890', 'name': 'Go', 'developerId': '123', 'description': 'Lorem' },
    { '_id': '567', 'name': 'Tic Tac Toe', 'developerId': '123', 'description': 'Lorem' },
    { '_id': '678', 'name': 'Checkers', 'developerId': '123', 'description': 'Lorem' },
    { '_id': '789', 'name': 'Chess', 'developerId': '234', 'description': 'Lorem' }
  ];

  /**
   * Create a new website
   * @param userId id of the user who created the website
   * @param website website object created by the user
   * @returns the created website object
   */
  createWebsite(userId: string, website: Website): Website {
    let id = Math.floor(Math.random() * 10000);

    // ensure generated ID is unique
    while (this.findWebsiteById(id.toString())) {
      id++;
    }

    website._id = id.toString();
    this.websites.push(website);
    return website;
  }

  /**
   * Find website by Id
   * @param websiteId id of the website
   * @returns Website corresponding to the given Id; null if id websites doesn't exit
   */
  findWebsiteById(websiteId: string): Website {
    return this.websites.find(u => u._id === websiteId);
  }

  /**
   * Get all websites created by a user
   * @param userId id of the user who developed the website
   * @returns list of websites created by the specified user
   */
  findWebsitesByUser(userId: string): Website[] {
    return this.websites.filter(w => w.developerId === userId);
  }

  /**
   * Update website by Id
   * @param websiteId Id of the website to update
   * @param website updated website object
   * @returns the updated website object
   */
  updateWebsite(websiteId: string, website: Website): Website {
    const toUpdateIndex = this.websites.findIndex(w => w._id === websiteId);
    if (toUpdateIndex > 0) {
      this.websites[toUpdateIndex] = website;
      return website;
    } else {
      return null;
    }
  }

  /**
   * Delete webstie by Id
   * @param websiteId Id of the website to delete
   * @returns website that was deleted, null if the id doesn't exist
   */
  deleteWebsite(websiteId: string): Website {
    const toDeleteIndex = this.websites.findIndex(u => u._id === websiteId);
    const toDelete = this.websites[toDeleteIndex];
    if (toDelete) {
      this.websites.splice(toDeleteIndex, 1);
    }
    return toDelete;
  }

}
