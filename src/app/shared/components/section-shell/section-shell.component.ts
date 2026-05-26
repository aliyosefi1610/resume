import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RevealDirective } from '../../../core/reveal.directive';

@Component({
  selector: 'app-section-shell',
  standalone: true,
  imports: [RevealDirective],
  template: `
    <section class="section" [id]="id()" appReveal>
      <div class="section-heading">
        <span class="eyebrow">{{ eyebrow() }}</span>
        <h2>{{ title() }}</h2>
        <p>{{ description() }}</p>
      </div>
      <ng-content />
    </section>
  `,
  styleUrl: './section-shell.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionShellComponent {
  readonly id = input.required<string>();
  readonly eyebrow = input.required<string>();
  readonly title = input.required<string>();
  readonly description = input.required<string>();
}
