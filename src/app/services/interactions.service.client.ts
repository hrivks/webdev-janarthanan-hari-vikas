import { Injectable } from '@angular/core';

@Injectable()
export class InteractionsService {

  // properties
  private callbacks = new Map<string, ((data?: any) => void)[]>();

  api = {
    'registerCallback': this.registerCallback,
    'fireCallback': this.fireCallback
  };

  constructor() { }

  /**
   * Register callback for a specific event
   * @param name name of the event to subscribe to
   * @param callback callback function to be invoked with the event occurs
   */
  registerCallback(name: string, callback: (data?: any) => void) {
    if (!this.callbacks[name]) {
      this.callbacks[name] = [];
    }
    this.callbacks[name].push(callback);

  }

  /**
   * Invoke all registered callback for the specified event
   * @param name name of the event
   */
  fireCallback(name: string, data?: any) {
    if (this.callbacks[name]) {
      this.callbacks[name].forEach(element => {
        try {
          element(data);
        } catch (ex) {
          console.log('Error invoking callback function for event ' + name);
        }
      });
    }
  }

  /**
   * Show alert
   * @param text alert text
   * @param type alert type. bootstrap context classes are supported
   * @param autoClose auto close after a delay
   */
  showAlert(text: string, type?: string, autoClose?: boolean) {
    this.fireCallback('showAlert', { text: text, type: type, autoClose: autoClose });
  }

  /**
   * Register callback to show alert
   * @param callback callback to invoke for showing alert
   */
  registerAlertCallback(callback: (d?) => void) {
    this.registerCallback('showAlert', callback);
  }

}
