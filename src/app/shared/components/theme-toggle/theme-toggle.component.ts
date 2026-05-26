import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '../../../core/language.service';
import { ThemeService } from '../../../core/theme.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  template: `
    <button class="theme-toggle" type="button" (click)="themeService.toggle()" [attr.aria-label]="label">
      <span>
        {{ themeService.theme() === 'dark' ? languageService.content().ui.themeLight : languageService.content().ui.themeDark }}
      </span>
    </button>
  `,
  styleUrl: './theme-toggle.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemeToggleComponent {
  readonly themeService = inject(ThemeService);
  readonly languageService = inject(LanguageService);

  get label(): string {
    return this.themeService.theme() === 'dark'
      ? this.languageService.content().ui.themeSwitchLight
      : this.languageService.content().ui.themeSwitchDark;
  }
}
