import { Injectable } from '@angular/core';
import { Widget, WidgetType } from '../model/model';

@Injectable()
export class WidgetService {

  constructor() { }

  widgets: Widget[] = [
    { '_id': '123', 'widgetType': WidgetType.Heading, 'pageId': '321', 'size': 2, 'text': 'GIZMODO' },
    { '_id': '234', 'widgetType': WidgetType.Heading, 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum' },
    {
      '_id': '345', 'widgetType': WidgetType.Image, 'pageId': '321', 'width': '100%',
      'url': 'http://lorempixel.com/400/200/'
    },
    { '_id': '456', 'widgetType': WidgetType.HTML, 'pageId': '321', 'text': '<p>Lorem ipsum</p>' },
    { '_id': '567', 'widgetType': WidgetType.Heading, 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum' },
    {
      '_id': '678', 'widgetType': WidgetType.YouTube, 'pageId': '321', 'width': '100%',
      'url': 'https://www.youtube.com/embed/AM2Ivdi9c4E'
    },
    { '_id': '789', 'widgetType': WidgetType.HTML, 'pageId': '321', 'text': '<p>Lorem ipsum</p>' }
  ];

  /**
   * Create a new widget
   * @param pageId id of the page in which the widget is to be added
   * @param widget widget object created
   * @returns the created widget object
   */
  createWidget(pageId: string, widget: Widget): Widget {
    let id = Math.floor(Math.random() * 10000);

    // ensure generated ID is unique
    while (this.findWidgetById(id.toString())) {
      id++;
    }

    widget._id = id.toString();
    widget.pageId = pageId;
    this.widgets.push(widget);
    return Object.assign({}, widget);
  }

  /**
    * Find widget by Id
    * @param widgetId id of the widget
    * @returns widget corresponding to the given Id; null if id widget doesn't exit
    */
    findWidgetById(widgetId: string): Widget {
    const widget = this.widgets.find(w => w._id === widgetId);
    return widget ? Object.assign({}, widget) : null;
  }

  /**
    * Find widget by Page Id
    * @param pageId id of the page
    * @returns widgets corresponding to the given Id; null if id widget doesn't exit
    */
    findWidgetsByPageId(pageId: string): Widget[] {
      const widgets = this.widgets.filter(w => w.pageId === pageId);
      return widgets.map(w => Object.assign({}, w));
    }

  /**
   * Update widget by Id
   * @param widgetId Id of the widget to update
   * @param widget updated widget object
   * @returns the updated widget object
   */
  updateWidget(widgetId: string, widget: Widget): Widget {
    const toUpdateIndex = this.widgets.findIndex(w => w._id === widgetId);
    if (toUpdateIndex > 0) {
      this.widgets[toUpdateIndex] = widget;
      return Object.assign({}, widget);
    } else {
      return null;
    }
  }

  /**
   * Delete widget by Id
   * @param widgetId Id of the widget to delete
   * @returns widget that was deleted, null if the id doesn't exist
   */
  deleteWidget(widgetId: string): Widget {
    const toDeleteIndex = this.widgets.findIndex(u => u._id === widgetId);
    const toDelete = this.widgets[toDeleteIndex];
    if (toDelete) {
      this.widgets.splice(toDeleteIndex, 1);
    }
    return toDelete;
  }
}
