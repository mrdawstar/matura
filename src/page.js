import { Header, Hero } from './components/hero.js';
import { Story, Program, Value, Teacher, SocialProof } from './components/story.js';
import { Offer, FAQ, Footer } from './components/offer.js';
export function renderPage() { return Header() + '<main id="main">' + Hero() + Story() + Program() + Value() + Teacher() + SocialProof() + Offer() + FAQ() + '</main>' + Footer(); }
