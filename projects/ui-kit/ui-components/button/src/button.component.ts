import { someIcons } from '@some-icon-library';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ButtonTypes, ButtonShapes, ButtonSizes, ButtonColors } from './types';

@Component({
  selector: 'ui-button',
  template: `<button
    type="button"
    (click)="onClick.emit($event)"
    [class]="classes"
  >
    <ng-template [ngIf]="icon !== undefined && iconPlacement === 'left'">
      <amp-icon [name]="icon"></amp-icon>
    </ng-template>

    {{ label }}

    <ng-template [ngIf]="icon && iconPlacement === 'right'">
      <amp-icon [name]="icon"></amp-icon>
    </ng-template>
  </button>`,
  styles: [],
})
export class ButtonComponent {
  /**
   * What is the color of the button?
   */
  @Input()
  color: ButtonColors = 'neutral';

  /**
   * Which button type are we using for the button?
   */
  @Input()
  type: ButtonTypes = 'neutral';

  /**
   * Which button shape to apply?
   */
  @Input()
  shape: ButtonShapes = 'neutral';

  /**
   * How large should the button be?
   */
  @Input()
  size: ButtonSizes = 'neutral';

  /**
   * What is the loading state of the button?
   */
  @Input()
  loading: boolean = false;

  /**
   * Should the button be disabled?
   */
  @Input()
  disabled: boolean = false;

  /**
   * What is the label for the button
   */
  @Input()
  label: string = '';

  /**
   * Give the SVG name to display a SVG
   */
  @Input()
  icon?: someIcons;

  /**
   * SVG placement
   */
  @Input()
  iconPlacement: 'left' | 'right' = 'left';

  /**
   * Optional click handler
   */
  @Output()
  onClick = new EventEmitter<Event>();

  /**
   * These class constants are set so Tailwind will pick them up properly.
   */
  private btnColorClass: Record<ButtonColors, string> = {
    neutral: '',
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    accent: 'btn-accent',
    info: 'btn-info',
    success: 'btn-success',
    error: 'btn-error',
    warning: 'btn-warning',
  };

  private btnShapeClass: Record<ButtonShapes, string> = {
    neutral: '',
    circle: 'btn-circle',
    square: 'btn-square',
  };

  private btnTypeClass: Record<ButtonTypes, string> = {
    neutral: '',
    outline: 'btn-outline',
    ghost: 'btn-ghost',
    link: 'btn-link',
  };

  private btnSizeClass: Record<ButtonSizes, string> = {
    neutral: '',
    xs: 'btn-xs',
    sm: 'btn-sm',
    md: 'btn-md',
    lg: 'btn-lg',
    wide: 'btn-wide',
    block: 'btn-block',
  };

  constructor() {
    if (!this.icon && !this.label) {
      this.label = 'Button';
    }
  }

  public get classes(): string[] {
    const btnClasses = ['btn'];

    // Initialize all button classes
    if (this.color !== 'neutral') {
      btnClasses.push(this.btnColorClass[this.color]);
    }

    if (this.type !== 'neutral') {
      btnClasses.push(this.btnTypeClass[this.type]);
    }

    if (this.shape !== 'neutral') {
      btnClasses.push(this.btnShapeClass[this.shape]);
    }

    if (this.size !== 'neutral') {
      btnClasses.push(this.btnSizeClass[this.size]);
    }

    if (this.disabled) {
      btnClasses.push('btn-disabled');
    }

    if (this.loading) {
      btnClasses.push('loading');
    }

    if (this.icon && this.label) {
      btnClasses.push('gap-2');
    }

    return btnClasses;
  }
}
