import { Directive, ElementRef, AfterViewInit, Output, EventEmitter } from '@angular/core';
declare var jQuery: any;
@Directive({
  selector: '[appSortable]'
})
export class SortableDirective implements AfterViewInit {

  // properties
  @Output() onSort = new EventEmitter();
  private initialPosition: number;
  private finalPosition: number;

  constructor(private el: ElementRef) { }

  ngAfterViewInit() {
    this.makeSortable();
  }

  /**
   * Make the attached dom element sortable
   */
  private makeSortable() {
    jQuery(this.el.nativeElement).sortable({
      axis: 'y',
      placeholder: 'ui-state-highlight',
      start: (event, ui) => {
        jQuery(ui.placeholder).height(jQuery(ui.item).height());
        this.initialPosition = ui.item.index();
      },
      stop: (event, ui) => {
        this.finalPosition = ui.item.index();
        this.onSort.emit({
          initial: this.initialPosition,
          final: this.finalPosition
        });
      }
    });
  }
}
