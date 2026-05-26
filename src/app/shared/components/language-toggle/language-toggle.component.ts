import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '../../../core/language.service';

@Component({
  selector: 'app-language-toggle',
  standalone: true,
  template: `
    <button class="language-toggle" type="button" (click)="languageService.toggle()" [attr.aria-label]="label">
      <span>{{ languageService.language() === 'en' ? 'FA' : 'EN' }}</span>
    </button>
  `,
  styleUrl: './language-toggle.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LanguageToggleComponent {
  readonly languageService = inject(LanguageService);

  get label(): string {
    return this.languageService.language() === 'en' ? 'Switch to Persian' : 'تغییر زبان به انگلیسی';
  }
}
