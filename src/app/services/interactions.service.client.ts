import { Injectable } from '@angular/core';

@Injectable()
export class InteractionsService {

  // properties
  private callbacks = new Map<string, (() => void)[]>();

  constructor() { }

  /**
   * Register callback for a specific event
   * @param name name of the event to subscribe to
   * @param callback callback function to be invoked with the event occurs
   */
  registerCallback(name: string, callback: () => void) {
    if (!this.callbacks[name]) {
      this.callbacks[name] = [];
    }
    this.callbacks[name].push(callback);

  }

  /**
   * Invoke all registered callback for the specified event
   * @param name name of the event
   */
  fireCallback(name: string) {
    if (this.callbacks[name]) {
      this.callbacks[name].forEach(element => {
        try {
          element();
        } catch (ex) {
          console.log('Error invoking callback function for event ' + name);
        }
      });
    }
  }
}
