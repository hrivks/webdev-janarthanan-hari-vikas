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
      this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.widget.url);
    }
  }

}
