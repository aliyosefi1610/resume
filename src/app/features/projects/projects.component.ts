import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LanguageService } from '../../core/language.service';
import { SectionShellComponent } from '../../shared/components/section-shell/section-shell.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SectionShellComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent {
  constructor(readonly languageService: LanguageService) {}
}
