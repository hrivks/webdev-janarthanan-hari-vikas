import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Widget, WidgetType } from '../model/model';
import { AppConstants } from '../app.constant';

@Injectable()
export class WidgetService {

  api = {
    'createWidget': this.createWidget,
    'findWidgetById': this.findWidgetById,
    'findWidgetsByPageId': this.findWidgetsByPageId,
    'updateWidget': this.updateWidget,
    'deleteWidget': this.deleteWidget,
    'reorderWidget': this.reorderWidget,
    'uploadImage': this.uploadImage
  };

  endpoint = {
    'createWidget': AppConstants.ENDPOINT.baseUrl + '/page/{pageId}/widget',
    'findWidgetsByPageId': AppConstants.ENDPOINT.baseUrl + '/page/{pageId}/widget',
    'findWidgetById': AppConstants.ENDPOINT.baseUrl + '/widget/{widgetId}',
    'updateWidget': AppConstants.ENDPOINT.baseUrl + '/widget/{widgetId}',
    'deleteWidget': AppConstants.ENDPOINT.baseUrl + '/widget/{widgetId}',
    'reorderWidget': AppConstants.ENDPOINT.baseUrl + '/page/{pageId}/widget?initial={initial}&final={final}',
    'uploadImage': AppConstants.ENDPOINT.baseUrl + '/upload'
  };

  constructor(private http: HttpClient) { }

  /**
   * Create a new widget
   * @param pageId id of the page in which the widget is to be added
   * @param widget widget object created
   * @returns Observable that resolves to the created widget object
   */
  createWidget(pageId: string, widget: Widget): Observable<Widget> {
    const url = this.endpoint.createWidget.replace('{pageId}', pageId);
    widget.widgetType = WidgetType[widget.widgetType].toString();
    return this.http.post<Widget>(url, widget);
  }

  /**
    * Find widget by Id
    * @param widgetId id of the widget
    * @returns Observable that resolves to widget corresponding to the given Id; null if id widget doesn't exit
    */
  findWidgetById(widgetId: string): Observable<Widget> {
    const url = this.endpoint.findWidgetById.replace('{widgetId}', widgetId);
    return this.http.get<Widget>(url);
  }

  /**
    * Find widget by Page Id
    * @param pageId id of the page
    * @returns Observable that resolves to widgets corresponding to the given Id; null if id widget doesn't exit
    */
  findWidgetsByPageId(pageId: string): Observable<Widget[]> {
    const url = this.endpoint.findWidgetsByPageId.replace('{pageId}', pageId);
    return this.http.get<Widget[]>(url);
  }

  /**
   * Update widget by Id
   * @param widgetId Id of the widget to update
   * @param widget updated widget object
   * @returns Observable that resolves to the updated widget object
   */
  updateWidget(widgetId: string, widget: Widget): Observable<Widget> {
    const url = this.endpoint.updateWidget.replace('{widgetId}', widgetId);
    return this.http.put<Widget>(url, widget);
  }

  /**
   * Update widget position
   * @param pageId Id of the page in which the widget is to be updated
   * @param widget widget whose order is to be changed
   * @param initial initial position of the widget
   * @param final final position of the widget
   */
  reorderWidget(pageId: string, widget: Widget, initial: number, final: number): Observable<Widget[]> {
    const url = this.endpoint.reorderWidget
      .replace('{pageId}', pageId)
      .replace('{initial}', initial.toString())
      .replace('{final}', final.toString());
    return this.http.put<Widget[]>(url, widget);
  }

  /**
   * Delete widget by Id
   * @param widgetId Id of the widget to delete
   * @returns Observable that resolves to widget that was deleted, null if the id doesn't exist
   */
  deleteWidget(widgetId: string): Observable<Widget> {
    const url = this.endpoint.deleteWidget.replace('{widgetId}', widgetId);
    return this.http.delete<Widget>(url);
  }

  uploadImage(formData: FormData): Observable<{file: string}> {
    const url = this.endpoint.uploadImage;
    return this.http.post<{file: string}>(url, formData);
  }

}
