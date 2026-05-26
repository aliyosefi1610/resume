import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LanguageService } from '../../core/language.service';
import { SectionShellComponent } from '../../shared/components/section-shell/section-shell.component';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [SectionShellComponent],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EducationComponent {
  constructor(readonly languageService: LanguageService) {}
}
