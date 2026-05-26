import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GraphicCursorComponent } from './shared/components/graphic-cursor/graphic-cursor.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GraphicCursorComponent],
  template: `
    <router-outlet />
    <app-graphic-cursor />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {}
