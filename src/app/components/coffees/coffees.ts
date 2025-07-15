import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Coffee {
  name: string;
  origin: string;
  description: string;
  price: string;
  emoji: string;
  aromaNotes: string[];
  strength: number; // 1-5 scale
  roastLevel: string;
}

interface BrewingMethod {
  name: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-coffees',
  imports: [CommonModule],
  templateUrl: './coffees.html',
  styleUrl: './coffees.scss'
})
export class Coffees {
  
  coffeeMenu: Coffee[] = [
    {
      name: 'Lamés Signature-Mischung',
      origin: 'Kolumbien & Äthiopien',
      description: 'Unsere Hausmischung kombiniert die reichen, schokoladigen Noten kolumbianischer Bohnen mit den hellen, blumigen Eigenschaften äthiopischer Hochländer.',
      price: '₺45',
      emoji: '☕',
      aromaNotes: ['Schokolade', 'Zitrus', 'Karamell', 'Blumig'],
      strength: 4,
      roastLevel: 'Mittel'
    },
    {
      name: 'Äthiopischer Yirgacheffe',
      origin: 'Yirgacheffe, Äthiopien',
      description: 'Ein heller und komplexer Single Origin mit weinähnlicher Säure und ausgeprägten blumigen und teeähnlichen Qualitäten.',
      price: '₺55',
      emoji: '🌸',
      aromaNotes: ['Blumig', 'Teeähnlich', 'Zitrone', 'Bergamotte'],
      strength: 3,
      roastLevel: 'Hell'
    },
    {
      name: 'Guatemala Antigua',
      origin: 'Antigua, Guatemala',
      description: 'Vollmundig mit einem reichen, rauchigen Geschmacksprofil, verstärkt durch die vulkanische Erde des Antigua-Tals.',
      price: '₺50',
      emoji: '🌋',
      aromaNotes: ['Rauchig', 'Schokolade', 'Gewürze', 'Nussig'],
      strength: 5,
      roastLevel: 'Dunkel'
    },
    {
      name: 'Brasilianischer Santos',
      origin: 'São Paulo, Brasilien',
      description: 'Ein glatter, ausgewogener Kaffee mit geringer Säure und süßen, nussigen Untertönen, perfekt für Espresso.',
      price: '₺40',
      emoji: '🥜',
      aromaNotes: ['Nussig', 'Süß', 'Karamell', 'Vanille'],
      strength: 3,
      roastLevel: 'Mittel'
    },
    {
      name: 'Jamaica Blue Mountain',
      origin: 'Blue Mountains, Jamaika',
      description: 'Einer der wertvollsten Kaffees der Welt, bekannt für seinen milden Geschmack und das Fehlen von Bitterkeit.',
      price: '₺85',
      emoji: '🏔️',
      aromaNotes: ['Mild', 'Süß', 'Blumig', 'Sauber'],
      strength: 2,
      roastLevel: 'Mittel-Hell'
    },
    {
      name: 'Costa-ricanischer Tarrazú',
      origin: 'Tarrazú, Costa Rica',
      description: 'Helle Säure mit vollem Körper, mit Noten von Zitrus und Schokolade und einem sauberen Abgang.',
      price: '₺48',
      emoji: '🍊',
      aromaNotes: ['Zitrus', 'Schokolade', 'Hell', 'Sauber'],
      strength: 4,
      roastLevel: 'Mittel'
    }
  ];

  brewingMethods: BrewingMethod[] = [
    {
      name: 'Espresso',
      description: 'Intensiver, konzentrierter Schuss, perfekt für pure Kaffeeliebhaber',
      icon: '☕'
    },
    {
      name: 'Pour Over',
      description: 'Handgegossene Methode, die einzigartige Geschmacksprofile hervorhebt',
      icon: '💧'
    },
    {
      name: 'French Press',
      description: 'Vollständige Immersionsbrühung für reichen, vollmundigen Kaffee',
      icon: '🫖'
    },
    {
      name: 'Cold Brew',
      description: 'Glatter, säurearmer Kaffee, langsam mit kaltem Wasser gebrüht',
      icon: '🧊'
    }
  ];
}
