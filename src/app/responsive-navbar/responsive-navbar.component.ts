import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {SwPush} from '@angular/service-worker';
import { NewsletterServiceService } from '../newsletter-service.service';

@Component({
  selector: 'app-responsive-navbar',
  templateUrl: './responsive-navbar.component.html',
  styleUrls: ['./responsive-navbar.component.css']
})
export class ResponsiveNavbarComponent implements OnInit, OnDestroy {

  /*Object for small screen media like Mobile*/
  mobileQuery: MediaQueryList;

  navitemlist = Array(5).fill(0).map((_, i) => `Nav Item ${ i + 1 }`);

  fillercontent = Array(5).fill(0).map(() => `This is navigation filler content`);

  private mobileQueryListener: () => void;
  private title = 'Browser push notifications!';

  readonly VAPID_Public_key = 'BFcDWeydBhewKVWwv1wRXlCuC9wA8vhEz3r2s6VIPn8LslVf7HqDpAErHe2JCNRPHW3HjPjMNyTNsOllRGRxAKY';

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,
              private swPush: SwPush, private newsletterService: NewsletterServiceService) {

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
  }

  ngOnInit() {
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }

  notify() {
    let data: Array <any> = [];
    data.push({
      'title': 'Approval',
      'alertContent': 'First alert'
    });
    data.push({
      'title': 'Request',
      'alertContent': 'Second alert'
    });
    data.push({
      'title': 'Leave Application',
      'alertContent': 'Third alert'
    });
    data.push({
      'title': 'Approval',
      'alertContent': 'Fourth alert'
    });
    data.push({
      'title': 'TO do task',
      'alertContent': 'Fift alert'
    });
    this.newsletterService.generateNotification(data);
  }



}
