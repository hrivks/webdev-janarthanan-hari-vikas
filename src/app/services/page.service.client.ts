import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Page } from '../model/model';
import { AppConstants } from '../app.constant';

@Injectable()
export class PageService {

  api = {
    'createPage': this.createPage,
    'findPageById': this.findPageById,
    'findPageBywebsiteId': this.findPagesBywebsiteId,
    'updatePage': this.updatePage,
    'deletePage': this.deletePage
  };

  endpoint = {
    'createPage': AppConstants.ENDPOINT.baseUrl + '/website/{websiteId}/page',
    'findPagesBywebsiteId': AppConstants.ENDPOINT.baseUrl + '/website/{websiteId}/page',
    'findPageById': AppConstants.ENDPOINT.baseUrl + '/page/{pageId}',
    'updatePage': AppConstants.ENDPOINT.baseUrl + '/page/{pageId}',
    'deletePage': AppConstants.ENDPOINT.baseUrl + '/page/{pageId}'
  };

  constructor(private http: HttpClient) { }

  /**
   * Create a new page
   * @param userId id of the user who created the page
   * @param page page object created by the user
   * @returns Observable that resolves to the created page object
   */
  createPage(websiteId: string, page: Page): Observable<Page> {
    const url = this.endpoint.createPage.replace('{websiteId}', websiteId);
    return this.http.post<Page>(url, page);
  }

  /**
    * Find page by Id
    * @param pageId id of the page
    * @returns Observable that resolves to page corresponding to the given Id; null if id page doesn't exit
    */
  findPageById(pageId: string): Observable<Page> {
    const url = this.endpoint.findPageById.replace('{pageId}', pageId);
    return this.http.get<Page>(url);
  }

  /**
   * Get all pages in the website specified by website id
   * @param websiteId id of the website
   * @returns Observable that resolves to list of pages in the website specified by the given id
   */
  findPagesBywebsiteId(websiteId: string): Observable<Page[]> {
    const url = this.endpoint.findPagesBywebsiteId.replace('{websiteId}', websiteId);
    return this.http.get<Page[]>(url);
  }

  /**
   * Update page by Id
   * @param pageId Id of the page to update
   * @param page updated page object
   * @returns Observable that resolves to the updated page object
   */
  updatePage(pageId: string, page: Page): Observable<Page> {
    const url = this.endpoint.updatePage.replace('{pageId}', pageId);
    return this.http.put<Page>(url, page);
  }

  /**
   * Delete page by Id
   * @param pageId Id of the page to delete
   * @returns Observable that resolves to page that was deleted, null if the id doesn't exist
   */
  deletePage(pageId: string): Observable<Page> {
    const url = this.endpoint.deletePage.replace('{pageId}', pageId);
    return this.http.delete<Page>(url);
  }
}
