import { DOCUMENT } from '@angular/common';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { Language, RESUME_CONTENT } from './resume.data';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  readonly #document = inject(DOCUMENT);
  readonly language = signal<Language>(this.#initialLanguage());
  readonly content = computed(() => RESUME_CONTENT[this.language()]);
  readonly isRtl = computed(() => this.language() === 'fa');

  constructor() {
    effect(() => {
      const language = this.language();
      this.#document.documentElement.lang = language;
      this.#document.documentElement.dir = language === 'fa' ? 'rtl' : 'ltr';
      localStorage.setItem('portfolio-language', language);
    });
  }

  toggle(): void {
    this.language.set(this.language() === 'en' ? 'fa' : 'en');
  }

  #initialLanguage(): Language {
    const saved = localStorage.getItem('portfolio-language');
    return saved === 'fa' || saved === 'en' ? saved : 'en';
  }
}
