import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  PLATFORM_ID,
  Renderer2,
  ViewChild,
  inject
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-graphic-cursor',
  standalone: true,
  template: `
    <div #cursor class="graphic-cursor" aria-hidden="true">
      <span class="cursor-core"></span>
    </div>
    <div #halo class="cursor-halo" aria-hidden="true"></div>
  `,
  styleUrl: './graphic-cursor.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GraphicCursorComponent implements AfterViewInit {
  @ViewChild('cursor', { static: true }) private readonly cursor?: ElementRef<HTMLElement>;
  @ViewChild('halo', { static: true }) private readonly halo?: ElementRef<HTMLElement>;

  readonly #destroyRef = inject(DestroyRef);
  readonly #platformId = inject(PLATFORM_ID);
  readonly #renderer = inject(Renderer2);

  #x = 0;
  #y = 0;
  #haloX = 0;
  #haloY = 0;
  #frame = 0;

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.#platformId) || !matchMedia('(pointer: fine)').matches) {
      return;
    }

    const cursor = this.cursor?.nativeElement;
    const halo = this.halo?.nativeElement;
    if (!cursor || !halo) {
      return;
    }

    const move = (event: PointerEvent) => {
      this.#x = event.clientX;
      this.#y = event.clientY;
      this.#renderer.addClass(cursor, 'is-visible');
      this.#renderer.addClass(halo, 'is-visible');
      this.#animate(cursor, halo);
    };

    const down = () => this.#renderer.addClass(halo, 'is-pressed');
    const up = () => this.#renderer.removeClass(halo, 'is-pressed');
    const over = (event: Event) => {
      const target = event.target;
      if (target instanceof Element && target.closest('a, button, .glass')) {
        this.#renderer.addClass(halo, 'is-active');
      }
    };
    const out = () => this.#renderer.removeClass(halo, 'is-active');

    window.addEventListener('pointermove', move, { passive: true });
    window.addEventListener('pointerdown', down, { passive: true });
    window.addEventListener('pointerup', up, { passive: true });
    document.addEventListener('mouseover', over, { passive: true });
    document.addEventListener('mouseout', out, { passive: true });

    this.#destroyRef.onDestroy(() => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerdown', down);
      window.removeEventListener('pointerup', up);
      document.removeEventListener('mouseover', over);
      document.removeEventListener('mouseout', out);
      cancelAnimationFrame(this.#frame);
    });
  }

  #animate(cursor: HTMLElement, halo: HTMLElement): void {
    if (this.#frame) {
      return;
    }

    const tick = () => {
      this.#haloX += (this.#x - this.#haloX) * 0.18;
      this.#haloY += (this.#y - this.#haloY) * 0.18;

      cursor.style.transform = `translate3d(${this.#x}px, ${this.#y}px, 0)`;
      halo.style.transform = `translate3d(${this.#haloX}px, ${this.#haloY}px, 0)`;

      const distance = Math.abs(this.#x - this.#haloX) + Math.abs(this.#y - this.#haloY);
      this.#frame = distance > 0.5 ? requestAnimationFrame(tick) : 0;
    };

    this.#frame = requestAnimationFrame(tick);
  }
}
