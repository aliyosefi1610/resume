import { AfterViewInit, Directive, ElementRef, inject, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appReveal]',
  standalone: true
})
export class RevealDirective implements AfterViewInit, OnDestroy {
  readonly #element = inject(ElementRef<HTMLElement>);
  #observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    this.#element.nativeElement.classList.add('reveal');

    this.#observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.#element.nativeElement.classList.add('is-visible');
          this.#observer?.disconnect();
        }
      },
      { threshold: 0.16 }
    );

    this.#observer.observe(this.#element.nativeElement);
  }

  ngOnDestroy(): void {
    this.#observer?.disconnect();
  }
}
