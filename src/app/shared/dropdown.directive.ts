import { Directive,
        HostListener,
        HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective
{
  @HostBinding('class.open') clickToOpen: boolean = false;

  @HostListener('click') toggleDropdown(eventData: Event)
  {
    this.clickToOpen = !this.clickToOpen;
  }
}
