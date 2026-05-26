import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LanguageService } from '../../core/language.service';
import { SectionShellComponent } from '../../shared/components/section-shell/section-shell.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [SectionShellComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent {
  constructor(readonly languageService: LanguageService) {}
}
