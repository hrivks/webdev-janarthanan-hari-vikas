import { Directive, ElementRef, AfterViewInit } from '@angular/core';
declare var jQuery: any;
@Directive({
  selector: '[appSortable]'
})
export class SortableDirective implements AfterViewInit {

  constructor(private el: ElementRef) { }

  ngAfterViewInit() {
    this.makeSortable();
  }

  private makeSortable() {
    jQuery(this.el.nativeElement).sortable({
      axis: 'y',
      placeholder: 'ui-state-highlight',
      start: (event, ui) => {
        jQuery(ui.placeholder).height(jQuery(ui.item).height());
        console.log('Start Index: ' + ui.item.index());
      },
      stop: (event, ui) => {
        console.log('End Index: ' + ui.item.index());
      }
    });
  }
}
