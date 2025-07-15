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
    title: 'Städtische Rhythmen',
    artist: 'Elena Marchetti',
    description: 'Eine fesselnde Erkundung des Stadtlebens durch abstrakten Expressionismus, bei der lebendige Farben und dynamische Pinselstriche den Puls der modernen städtischen Existenz einfangen.',
    opening: '15. Januar 2024',
    duration: '15. Januar - 30. März 2024',
    emoji: '🎨'
  };

  artworks: Artwork[] = [
    {
      title: 'Morgengebräu',
      artist: 'Sarah Chen',
      medium: 'Öl auf Leinwand',
      price: '₺2,500',
      emoji: '🌅'
    },
    {
      title: 'Kaffee-Träume',
      artist: 'Marcus Rodriguez',
      medium: 'Digitale Kunst',
      price: '₺1,800',
      emoji: '☕'
    },
    {
      title: 'Dampf & Geschichten',
      artist: 'Aisha Patel',
      medium: 'Aquarell',
      price: '₺2,200',
      emoji: '💭'
    },
    {
      title: 'Café-Gespräche',
      artist: 'David Kim',
      medium: 'Fotografie',
      price: '₺1,500',
      emoji: '📸'
    },
    {
      title: 'Bohnen-Ballett',
      artist: 'Luna Martinez',
      medium: 'Skulptur',
      price: '₺3,200',
      emoji: '🎭'
    },
    {
      title: 'Geröstete Reflexionen',
      artist: 'James Wilson',
      medium: 'Mischtechnik',
      price: '₺2,800',
      emoji: '🪞'
    },
    {
      title: 'Espresso-Emotionen',
      artist: 'Maria Santos',
      medium: 'Acryl',
      price: '₺2,100',
      emoji: '💫'
    },
    {
      title: 'Die perfekte Tasse',
      artist: 'Ahmed Hassan',
      medium: 'Kohlezeichnung',
      price: '₺1,600',
      emoji: '🎯'
    }
  ];

  upcomingEvents: Event[] = [
    {
      title: 'Poesie & Kaffee Abend',
      type: 'Literarische Veranstaltung',
      description: 'Begleiten Sie uns zu einem intimen Abend mit gesprochener Poesie, gepaart mit unseren besten Single-Origin-Mischungen.',
      day: '15',
      month: 'Feb',
      time: '19:00 - 21:00',
      ticketInfo: 'Freier Eintritt',
      icon: '📖'
    },
    {
      title: 'Lokale Künstler Präsentation',
      type: 'Kunstausstellung',
      description: 'Entdecken Sie aufstrebendes Talent aus Kölns lebendiger Kunstszene in unserer monatlichen Präsentation.',
      day: '22',
      month: 'Feb',
      time: '18:00 - 22:00',
      ticketInfo: 'Freier Eintritt',
      icon: '🎨'
    },
    {
      title: 'Kaffee-Verkostungs-Workshop',
      type: 'Bildungsveranstaltung',
      description: 'Lernen Sie die Kunst der Kaffeeverkostung mit unserem Barista-Meister. Beinhaltet die Verkostung von 6 verschiedenen Ursprungsländern.',
      day: '1',
      month: 'Mär',
      time: '14:00 - 16:00',
      ticketInfo: '₺150 pro Person',
      icon: '☕'
    },
    {
      title: 'Jazz & Java Sessions',
      type: 'Musikaufführung',
      description: 'Sanfte Jazz-Aufführungen jeden ersten Freitag im Monat. Heute mit dem Köln Jazz Trio.',
      day: '8',
      month: 'Mär',
      time: '20:00 - 23:00',
      ticketInfo: '₺100 Eintritt + Getränk',
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
