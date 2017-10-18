export class AppConstants {
    public static EVENTS = {
        addFooterLink: 'addFooterLink',
        clearFooterLink: 'clearFooterLink',
        showAlert: 'showAlert',
        showLoader: 'showLoader'
    };

    public static ENDPOINT = {
        // root: '/', // for prod
        root: 'http://localhost:3100/',
        // baseUrl: '/api', // for prod
        baseUrl: 'http://localhost:3100/api' // for local
    };
}
