import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Exhibition {
  title: string;
  artist: string;
  description: string;
  opening: string;
  duration: string;
  emoji: string;
}

interface Artwork {
  title: string;
  artist: string;
  medium: string;
  price: string;
  emoji: string;
}

interface Event {
  title: string;
  type: string;
  description: string;
  day: string;
  month: string;
  time: string;
  ticketInfo: string;
  icon: string;
}

@Component({
  selector: 'app-art-events',
  imports: [CommonModule],
  templateUrl: './art-events.html',
  styleUrl: './art-events.scss'
})
export class ArtEvents {
  @ViewChild('galleryTrack') galleryTrack!: ElementRef;

  currentExhibition: Exhibition = {
    title: 'Urban Rhythms',
    artist: 'Elena Marchetti',
    description: 'A captivating exploration of city life through abstract expressionism, where vibrant colors and dynamic brushstrokes capture the pulse of modern urban existence.',
    opening: 'January 15, 2024',
    duration: 'January 15 - March 30, 2024',
    emoji: '🎨'
  };

  artworks: Artwork[] = [
    {
      title: 'Morning Brew',
      artist: 'Sarah Chen',
      medium: 'Oil on Canvas',
      price: '₺2,500',
      emoji: '🌅'
    },
    {
      title: 'Coffee Dreams',
      artist: 'Marcus Rodriguez',
      medium: 'Digital Art',
      price: '₺1,800',
      emoji: '☕'
    },
    {
      title: 'Steam & Stories',
      artist: 'Aisha Patel',
      medium: 'Watercolor',
      price: '₺2,200',
      emoji: '💭'
    },
    {
      title: 'Café Conversations',
      artist: 'David Kim',
      medium: 'Photography',
      price: '₺1,500',
      emoji: '📸'
    },
    {
      title: 'Bean Ballet',
      artist: 'Luna Martinez',
      medium: 'Sculpture',
      price: '₺3,200',
      emoji: '🎭'
    },
    {
      title: 'Roasted Reflections',
      artist: 'James Wilson',
      medium: 'Mixed Media',
      price: '₺2,800',
      emoji: '🪞'
    },
    {
      title: 'Espresso Emotions',
      artist: 'Maria Santos',
      medium: 'Acrylic',
      price: '₺2,100',
      emoji: '💫'
    },
    {
      title: 'The Perfect Cup',
      artist: 'Ahmed Hassan',
      medium: 'Charcoal Drawing',
      price: '₺1,600',
      emoji: '🎯'
    }
  ];

  upcomingEvents: Event[] = [
    {
      title: 'Poetry & Coffee Evening',
      type: 'Literary Event',
      description: 'Join us for an intimate evening of spoken word poetry paired with our finest single-origin blends.',
      day: '15',
      month: 'Feb',
      time: '7:00 PM - 9:00 PM',
      ticketInfo: 'Free Entry',
      icon: '📖'
    },
    {
      title: 'Local Artists Showcase',
      type: 'Art Exhibition',
      description: 'Discover emerging talent from Istanbul\'s vibrant art scene in our monthly showcase.',
      day: '22',
      month: 'Feb',
      time: '6:00 PM - 10:00 PM',
      ticketInfo: 'Free Entry',
      icon: '🎨'
    },
    {
      title: 'Coffee Cupping Workshop',
      type: 'Educational',
      description: 'Learn the art of coffee tasting with our master barista. Includes tasting of 6 different origins.',
      day: '1',
      month: 'Mar',
      time: '2:00 PM - 4:00 PM',
      ticketInfo: '₺150 per person',
      icon: '☕'
    },
    {
      title: 'Jazz & Java Sessions',
      type: 'Music Performance',
      description: 'Smooth jazz performances every first Friday of the month. Tonight featuring the Istanbul Trio.',
      day: '8',
      month: 'Mar',
      time: '8:00 PM - 11:00 PM',
      ticketInfo: '₺100 entry + drink',
      icon: '🎷'
    }
  ];

  scrollGallery(direction: 'left' | 'right') {
    if (!this.galleryTrack) return;
    
    const track = this.galleryTrack.nativeElement;
    const cardWidth = 320; // Card width + gap
    const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
    
    track.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  }
}
