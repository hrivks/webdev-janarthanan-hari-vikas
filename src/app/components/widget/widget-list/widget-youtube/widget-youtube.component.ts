import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Widget } from '../../../../model/model';

@Component({
  selector: 'app-widget-youtube',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['./widget-youtube.component.css']
})
export class WidgetYoutubeComponent implements OnInit {

  // properties
  @Input() widget: Widget;
  safeUrl: SafeResourceUrl;

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
    if (this.widget.url) {
      if (this.widget.url.indexOf('/embed/') === -1) {
        let videoId = this.widget.url.split('/').filter((e) => e.length > 0).reverse()[0];
        // in case of direct YouTube url, get the id from query string
        videoId = videoId.split('v=').reverse()[0];
        this.widget.url = 'https://www.youtube.com/embed/' + videoId;
      }
      this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.widget.url);
    }
  }

}
