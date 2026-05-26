import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { LanguageService } from '../../core/language.service';
import { Skill } from '../../core/resume.data';
import { SectionShellComponent } from '../../shared/components/section-shell/section-shell.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SectionShellComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsComponent {
  constructor(readonly languageService: LanguageService) {}

  readonly skills = computed(() => this.languageService.content().skills);
  readonly categories = computed(() => ['All', ...new Set(this.skills().map((skill) => skill.category))]);
  readonly activeCategory = signal<string>('All');
  readonly filteredSkills = computed(() =>
    this.activeCategory() === 'All'
      ? this.skills()
      : this.skills().filter((skill) => skill.category === this.activeCategory())
  );

  categoryLabel(category: string): string {
    return category === 'All'
      ? this.languageService.content().ui.skillAll
      : this.languageService.content().ui.skillCategories[category as Skill['category']];
  }

  setCategory(category: string): void {
    this.activeCategory.set(category);
  }

  trackSkill(_: number, skill: Skill): string {
    return skill.name;
  }
}
