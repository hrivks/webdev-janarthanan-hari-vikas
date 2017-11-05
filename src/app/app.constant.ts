import { environment } from '../environments/environment';

export class AppConstants {
    public static EVENTS = {
        addFooterLink: 'addFooterLink',
        clearFooterLink: 'clearFooterLink',
        showAlert: 'showAlert',
        showLoader: 'showLoader'
    };

    public static ENDPOINT = {
        root: environment.baseUrl + '/',
        baseUrl: environment.baseUrl + '/api'
    };
}
