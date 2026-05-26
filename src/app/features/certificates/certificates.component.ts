import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LanguageService } from '../../core/language.service';
import { SectionShellComponent } from '../../shared/components/section-shell/section-shell.component';

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [SectionShellComponent],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CertificatesComponent {
  constructor(readonly languageService: LanguageService) {}
}
