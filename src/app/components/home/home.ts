import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { trigger, state, style, transition, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('slideInLeft', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-50px)' }),
        animate('600ms 200ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ]),
    trigger('slideInRight', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(50px)' }),
        animate('600ms 400ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ]),
    trigger('bounce', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('1000ms 1500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('staggerAnimation', [
      transition(':enter', [
        query(':scope > *', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger('100ms', [
            animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class Home implements OnInit {
  
  // Animation arrays for visual elements
  floatingElements = Array(6).fill(0);
  steamLines = Array(3).fill(0);
  coffeBeans = Array(5).fill(0);

  // Features data
  features = [
    {
      icon: '☕',
      title: 'Handwerklicher Kaffee',
      description: 'Fachmännisch aus den besten Bohnen zubereitet, erzählt jede Tasse eine einzigartige Geschichte von Geschmack und Leidenschaft.'
    },
    {
      icon: '🎨',
      title: 'Kunstgalerie',
      description: 'Unsere Wände erwachen mit wechselnden Ausstellungen lokaler und internationaler Künstler zum Leben.'
    },
    {
      icon: '🌱',
      title: 'Nachhaltigkeit',
      description: 'Verpflichtet zu ethischer Beschaffung und umweltfreundlichen Praktiken, die unseren Planeten schützen.'
    }
  ];

  // Coffee showcase data
  showcaseCoffees = [
    {
      emoji: '☕',
      name: 'Signature-Mischung',
      description: 'Reich, vollmundig mit Noten von Schokolade und Karamell'
    },
    {
      emoji: '🌰',
      name: 'Single Origin',
      description: 'Reine, unvermischte Aromen aus bestimmten Regionen'
    },
    {
      emoji: '🥛',
      name: 'Spezialgetränke',
      description: 'Kreative Lattes und innovative Kaffee-Cocktails'
    }
  ];

  // Art pieces preview
  artPieces = [
    {
      emoji: '🖼️',
      title: 'Städtische Träume',
      artist: 'Sarah Mitchell'
    },
    {
      emoji: '🎭',
      title: 'Kaffee-Geschichten',
      artist: 'Marcus Chen'
    },
    {
      emoji: '🌿',
      title: 'Natürliche Harmonie',
      artist: 'Elena Rodriguez'
    },
    {
      emoji: '🌟',
      title: 'Abstrakte Gefühle',
      artist: 'David Kim'
    }
  ];

  ngOnInit() {
    // Add scroll-triggered animations
    this.observeElements();
  }

  private observeElements() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all animatable elements
    setTimeout(() => {
      const elements = document.querySelectorAll('.feature-card, .coffee-card, .art-piece');
      elements.forEach(el => observer.observe(el));
    }, 100);
  }
}
