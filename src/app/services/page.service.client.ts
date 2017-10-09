import { Injectable } from '@angular/core';
import { Page } from '../model/model';

@Injectable()
export class PageService {

  constructor() { }

  pages: Page[] = [
    { '_id': '321', 'name': 'Post 1', 'websiteId': '456', 'description': 'Lorem' },
    { '_id': '432', 'name': 'Post 2', 'websiteId': '456', 'description': 'Lorem' },
    { '_id': '543', 'name': 'Post 3', 'websiteId': '456', 'description': 'Lorem' },
    { '_id': '555', 'name': 'Post 4', 'websiteId': '789', 'description': 'Lorem' },
    { '_id': '666', 'name': 'Post 5', 'websiteId': '789', 'description': 'Lorem Epsum 2' },
    { '_id': '777', 'name': 'Post 6', 'websiteId': '789', 'description': 'Lorem Epsum' }
  ];

  /**
   * Create a new page
   * @param userId id of the user who created the page
   * @param page page object created by the user
   * @returns the created page object
   */
  createPage(websiteId: string, page: Page): Page {
    let id = Math.floor(Math.random() * 10000);

    // ensure generated ID is unique
    while (this.findPageById(id.toString())) {
      id++;
    }

    page._id = id.toString();
    page.websiteId = websiteId;
    this.pages.push(page);
    return Object.assign({}, page);
  }

  /**
    * Find page by Id
    * @param pageId id of the page
    * @returns page corresponding to the given Id; null if id page doesn't exit
    */
  findPageById(pageId: string): Page {
    const page = this.pages.find(p => p._id === pageId);
    return page ? Object.assign({}, page) : null;
  }

  /**
   * Get all pages in the website specified by website id
   * @param websiteId id of the website
   * @returns {Page[]} list of pages in the website specified by the given id
   */
  findPageBywebsiteId(websiteId: string): Page[] {
    const pages = this.pages.filter(p => p.websiteId === websiteId);
    return pages;
  }

  /**
   * Update page by Id
   * @param pageId Id of the page to update
   * @param page updated page object
   * @returns the updated page object
   */
  updatePage(pageId: string, page: Page): Page {
    const toUpdateIndex = this.pages.findIndex(p => p._id === pageId);
    if (toUpdateIndex > -1) {
      this.pages[toUpdateIndex] = page;
      return Object.assign({}, page);
    } else {
      return null;
    }
  }

  /**
   * Delete page by Id
   * @param pageId Id of the page to delete
   * @returns page that was deleted, null if the id doesn't exist
   */
  deletePage(pageId: string): Page {
    const toDeleteIndex = this.pages.findIndex(u => u._id === pageId);
    const toDelete = this.pages[toDeleteIndex];
    if (toDelete) {
      this.pages.splice(toDeleteIndex, 1);
    }
    return toDelete;
  }
}
