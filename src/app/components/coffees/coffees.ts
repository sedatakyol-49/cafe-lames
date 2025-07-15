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
      name: 'Lamés Signature Blend',
      origin: 'Colombia & Ethiopia',
      description: 'Our house blend combines the rich, chocolatey notes of Colombian beans with the bright, floral characteristics of Ethiopian highlands.',
      price: '₺45',
      emoji: '☕',
      aromaNotes: ['Chocolate', 'Citrus', 'Caramel', 'Floral'],
      strength: 4,
      roastLevel: 'Medium'
    },
    {
      name: 'Ethiopian Yirgacheffe',
      origin: 'Yirgacheffe, Ethiopia',
      description: 'A bright and complex single origin with wine-like acidity and distinctive floral and tea-like qualities.',
      price: '₺55',
      emoji: '🌸',
      aromaNotes: ['Floral', 'Tea-like', 'Lemon', 'Bergamot'],
      strength: 3,
      roastLevel: 'Light'
    },
    {
      name: 'Guatemala Antigua',
      origin: 'Antigua, Guatemala',
      description: 'Full-bodied with a rich, smoky flavor profile enhanced by the volcanic soil of the Antigua valley.',
      price: '₺50',
      emoji: '🌋',
      aromaNotes: ['Smoky', 'Chocolate', 'Spice', 'Nutty'],
      strength: 5,
      roastLevel: 'Dark'
    },
    {
      name: 'Brazilian Santos',
      origin: 'São Paulo, Brazil',
      description: 'A smooth, well-balanced coffee with low acidity and sweet, nutty undertones perfect for espresso.',
      price: '₺40',
      emoji: '🥜',
      aromaNotes: ['Nutty', 'Sweet', 'Caramel', 'Vanilla'],
      strength: 3,
      roastLevel: 'Medium'
    },
    {
      name: 'Jamaica Blue Mountain',
      origin: 'Blue Mountains, Jamaica',
      description: 'One of the world\'s most prized coffees, known for its mild flavor and lack of bitterness.',
      price: '₺85',
      emoji: '🏔️',
      aromaNotes: ['Mild', 'Sweet', 'Floral', 'Clean'],
      strength: 2,
      roastLevel: 'Medium-Light'
    },
    {
      name: 'Costa Rican Tarrazú',
      origin: 'Tarrazú, Costa Rica',
      description: 'Bright acidity with a full body, featuring notes of citrus and chocolate with a clean finish.',
      price: '₺48',
      emoji: '🍊',
      aromaNotes: ['Citrus', 'Chocolate', 'Bright', 'Clean'],
      strength: 4,
      roastLevel: 'Medium'
    }
  ];

  brewingMethods: BrewingMethod[] = [
    {
      name: 'Espresso',
      description: 'Intense, concentrated shot perfect for pure coffee lovers',
      icon: '☕'
    },
    {
      name: 'Pour Over',
      description: 'Hand-poured method highlighting unique flavor profiles',
      icon: '💧'
    },
    {
      name: 'French Press',
      description: 'Full immersion brewing for rich, full-bodied coffee',
      icon: '🫖'
    },
    {
      name: 'Cold Brew',
      description: 'Smooth, low-acid coffee brewed slowly with cold water',
      icon: '🧊'
    }
  ];
}
