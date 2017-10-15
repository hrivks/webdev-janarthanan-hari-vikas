
/**
 * Models a Website object
 * @constructor
 */
function Website() {
    
}

/**
 * Models a page object
 * @constructor
 */
function Page() {
    this._id;
    this.name;
    this.websiteId;
    this.title;
    this.description;
}


/**
 * Models a Widget object
 * @constructor
 */
function Widget() {
    this._id;
    this.widgetType;
    this.pageId;
    this.size;
    this.text;
    this.width;
    this.url;
}

module.exports = {
    User: User,
    Website: Website,
    Page: Page,
    Widget: Widget
};