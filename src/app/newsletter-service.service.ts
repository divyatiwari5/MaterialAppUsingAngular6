import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {PushNotificationModule} from 'ng-push-notification';

@Injectable({
  providedIn: 'root'
})
export class NewsletterServiceService {

  public permission: Permission;

  constructor() {
    this.permission = this.isSupported() ? 'default' : 'denied';
  }

  public isSupported(): boolean {
    return 'Notification' in Window;
  }

  requestPermission(): void {
    let self = this;
    if ('Notification' in Window) {
      Notification.requestPermission(function (status) {
        return self.permission = status;
      });
    }
  }

  create(title: string, options ?: PushNotification): any {
    let self = this;
    return new Observable(function (obs) {
      if (!('Notification' in Window)) {
        console.log('NOtification not available in this environment0');
        obs.complete();
      }
      if (self.permission !== 'granted') {
        console.log('Permission not granted by user');
        obs.complete();
      }
      let _notify = new Notification(title, options);
      _notify.onshow = function (e) {
        return obs.next({
          notification: _notify,
          event: e
        });
      };
      _notify.onclick = function (e) {
        return obs.next({
          notification: _notify,
          event: e
        });
      };
      _notify.onerror = function (e) {
        return obs.error({
          notification: _notify,
          event: e
        });
      };
      _notify.onclose = function () {
        return obs.complete();
      };
    });
  }

  generateNotification(source: Array<any>): void {
    let self = this;
    source.forEach((item) => {
      let options = {
        body: item.alertContent,
        icon: '../assets/icon-72x72.png'
      };
      let notify = self.create(item.title, options).subscribe();
    });
  }
}

  export declare type Permission = 'denied' | 'granted' | 'default';
  export interface PushNotification {
  body ?: string;
  icon ?: string;
  tag ?: string;
  data ?: any;
  renotify ?: boolean;
  silent ?: boolean;
  sound ?: string;
  noscreen ?: boolean;
  sticky ?: boolean;
  dir ?: 'auto' | 'ltr' | 'rtl';
  lang ?: string;
  vibrate ?: number[];
}
