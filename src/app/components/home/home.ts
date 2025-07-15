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
      title: 'Artisan Coffee',
      description: 'Expertly crafted from the finest beans, each cup tells a unique story of flavor and passion.'
    },
    {
      icon: '🎨',
      title: 'Art Gallery',
      description: 'Our walls come alive with rotating exhibitions featuring local and international artists.'
    },
    {
      icon: '🌱',
      title: 'Sustainability',
      description: 'Committed to ethical sourcing and eco-friendly practices that protect our planet.'
    }
  ];

  // Coffee showcase data
  showcaseCoffees = [
    {
      emoji: '☕',
      name: 'Signature Blend',
      description: 'Rich, full-bodied with notes of chocolate and caramel'
    },
    {
      emoji: '🌰',
      name: 'Single Origin',
      description: 'Pure, unblended flavors from specific regions'
    },
    {
      emoji: '🥛',
      name: 'Specialty Drinks',
      description: 'Creative lattes and innovative coffee cocktails'
    }
  ];

  // Art pieces preview
  artPieces = [
    {
      emoji: '🖼️',
      title: 'Urban Dreams',
      artist: 'Sarah Mitchell'
    },
    {
      emoji: '🎭',
      title: 'Coffee Stories',
      artist: 'Marcus Chen'
    },
    {
      emoji: '🌿',
      title: 'Natural Harmony',
      artist: 'Elena Rodriguez'
    },
    {
      emoji: '🌟',
      title: 'Abstract Feelings',
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
