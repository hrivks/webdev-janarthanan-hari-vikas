import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Website } from '../model/model';
import { AppConstants } from '../app.constant';

@Injectable()
export class WebsiteService {

  constructor(private http: HttpClient) { }

  api = {
    'createWebsite': this.createWebsite,
    'findWebsiteById': this.findWebsiteById,
    'findWebsitesByUser': this.findWebsitesByUser,
    'updateWebsite': this.updateWebsite,
    'deleteWebsite': this.deleteWebsite
  };

  endpoint = {
    'createWebsite': AppConstants.ENDPOINT.baseUrl + '/user/{userId}/website',
    'findWebsitesByUser':  AppConstants.ENDPOINT.baseUrl + '/user/{userId}/website',
    'findWebsitesById':  AppConstants.ENDPOINT.baseUrl + '/website/{websiteId}',
    'updateWebsite':  AppConstants.ENDPOINT.baseUrl + '/website/{websiteId}',
    'deleteWebsite':  AppConstants.ENDPOINT.baseUrl + '/website/{websiteId}'
  };


  /**
   * Create a new website
   * @param userId id of the user who created the website
   * @param website website object created by the user
   * @returns an observable that resolves to the created website object
   */
  createWebsite(userId: string, website: Website): Observable<Website> {
    const url = this.endpoint.createWebsite.replace('{userId}', userId);
    return this.http.post<Website>(url, website);
  }

  /**
   * Find website by Id
   * @param websiteId id of the website
   * @returns an observable that resolves to Website corresponding to the given Id; null if id websites doesn't exit
   */
  findWebsiteById(websiteId: string): Observable<Website> {
    const url = this.endpoint.findWebsitesById.replace('{websiteId}', websiteId);
    return this.http.get<Website>(url);
  }

  /**
   * Get all websites created by a user
   * @param userId id of the user who developed the website
   * @returns an observable that resolves to list of websites created by the specified user
   */
  findWebsitesByUser(userId: string): Observable<Website[]> {
    const url = this.endpoint.findWebsitesByUser.replace('{userId}', userId);
    return this.http.get<Website[]>(url);
  }

  /**
   * Update website by Id
   * @param websiteId Id of the website to update
   * @param website updated website object
   * @returns an observable that resolves to the updated website object
   */
  updateWebsite(websiteId: string, website: Website): Observable<Website> {
    const url = this.endpoint.updateWebsite.replace('{websiteId}', websiteId);
    return this.http.put<Website>(url, website);
  }

  /**
   * Delete webstie by Id
   * @param websiteId Id of the website to delete
   * @returns an observable that resolves to website that was deleted, null if the id doesn't exist
   */
  deleteWebsite(websiteId: string): Observable<Website> {
    const url = this.endpoint.deleteWebsite.replace('{websiteId}', websiteId);
    return this.http.delete<Website>(url);
  }
}
