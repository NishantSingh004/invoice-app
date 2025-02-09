import { Component } from '@angular/core';
import { ScrollAnimationDirective } from '../directives/scroll-animation.directive';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cta-banner',
  standalone: true,
  imports: [ScrollAnimationDirective, RouterLink],
  templateUrl: './cta-banner.component.html',
  styleUrl: './cta-banner.component.css',
})
export class CtaBannerComponent {}
