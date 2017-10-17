/** Common properties of all model objects */
export interface IAppEntity {
    _id: string;
}

/** Models a User object */
export class User implements IAppEntity {
    _id: string;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email?: string;
}

/** Models a website that is created by a User */
export class Website implements IAppEntity {
    _id: string;
    name: string;
    developerId: string;
    description?: string;
}

/** Models a page in a website */
export class Page implements IAppEntity {
    _id: string;
    name: string;
    websiteId: string;
    title?: string;
    description?: string;
}

/** Types of supported widgets */
export enum WidgetType {
    Heading, Image, Html, YouTube
}

/** Represents a widget in a page */
export class Widget implements IAppEntity {
    _id: string;
    widgetType: WidgetType;
    pageId: string;
    size?: number;
    text?: string;
    width?: string;
    url?: string;
}

