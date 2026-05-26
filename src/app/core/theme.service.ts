import { DOCUMENT } from '@angular/common';
import { inject, Injectable, signal } from '@angular/core';

export type Theme = 'dark' | 'light';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly #document = inject(DOCUMENT);
  readonly theme = signal<Theme>(this.#initialTheme());

  constructor() {
    this.#applyTheme(this.theme());
  }

  toggle(): void {
    const nextTheme: Theme = this.theme() === 'dark' ? 'light' : 'dark';
    this.theme.set(nextTheme);
    this.#applyTheme(nextTheme);
    localStorage.setItem('portfolio-theme', nextTheme);
  }

  #initialTheme(): Theme {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved === 'dark' || saved === 'light') {
      return saved;
    }

    return matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  #applyTheme(theme: Theme): void {
    this.#document.documentElement.dataset['theme'] = theme;
  }
}
