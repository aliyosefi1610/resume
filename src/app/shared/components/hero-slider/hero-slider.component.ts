import { isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  PLATFORM_ID,
  computed,
  inject,
  signal
} from '@angular/core';
import { LanguageService } from '../../../core/language.service';

@Component({
  selector: 'app-hero-slider',
  standalone: true,
  templateUrl: './hero-slider.component.html',
  styleUrl: './hero-slider.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroSliderComponent {
  readonly languageService = inject(LanguageService);
  readonly #destroyRef = inject(DestroyRef);
  readonly #platformId = inject(PLATFORM_ID);

  readonly activeIndex = signal(0);
  readonly isPaused = signal(false);
  readonly parallaxX = signal(0);
  readonly parallaxY = signal(0);
  readonly slides = computed(() => this.languageService.content().heroSlides);
  readonly activeSlide = computed(() => this.slides()[this.activeIndex()]!);
  readonly parallaxStyle = computed(
    () => `--parallax-x: ${this.parallaxX()}px; --parallax-y: ${this.parallaxY()}px; --slide-accent: ${this.activeSlide().accent}`
  );

  readonly #primaryTargets = ['#projects', '#experience', '#skills'];
  readonly #secondaryTargets = ['assets/resume/ali-yousefi-cv-2025.pdf', '#contact', '#contact'];

  constructor() {
    if (isPlatformBrowser(this.#platformId) && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const interval = window.setInterval(() => {
        if (!this.isPaused()) {
          this.next();
        }
      }, 6500);

      this.#destroyRef.onDestroy(() => window.clearInterval(interval));
    }
  }

  next(): void {
    this.activeIndex.update((index) => (index + 1) % this.slides().length);
  }

  previous(): void {
    this.activeIndex.update((index) => (index - 1 + this.slides().length) % this.slides().length);
  }

  goTo(index: number): void {
    this.activeIndex.set(index);
  }

  updateParallax(event: MouseEvent): void {
    if (!isPlatformBrowser(this.#platformId) || !matchMedia('(pointer: fine)').matches) {
      return;
    }

    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    this.parallaxX.set(Number((x * 18).toFixed(2)));
    this.parallaxY.set(Number((y * 12).toFixed(2)));
  }

  resetParallax(): void {
    this.parallaxX.set(0);
    this.parallaxY.set(0);
    this.isPaused.set(false);
  }

  primaryHref(index: number): string {
    return this.#primaryTargets[index] ?? '#projects';
  }

  secondaryHref(index: number): string {
    return this.#secondaryTargets[index] ?? '#contact';
  }

  isDownload(index: number): boolean {
    return index === 0;
  }
}
