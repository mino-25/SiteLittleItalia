import './slider/slider.css';
import './menu.css';
import EmblaCarousel from './slider/EmblaCarousel';

import entree1 from '../Menu/Asset/entrée1.jpg';
import entree2 from '../Menu/Asset/entrée2.jpg';
import entree3 from './Asset/tapas.jpg';
import pizza from './Asset/pizza.jpg';
import pate1 from './Asset/tagliatelle.jpg';
import pate2 from './Asset/gruppomimo_maccheroni.jpg';
import gnocchi from './Asset/gnocchi.jpg'
import dessert1 from './Asset/tiramisu.jpeg'
import dessert2 from './Asset/panna-cota.jpg'
import dessert3 from './Asset/meringue.jpg'
import dessert4 from './Asset/dessert6.webp'

export default function NewMenu() {
    const OPTIONS = {}
    const slides_entrees = [entree1, entree2, entree3];
    const slides_plats = [ pizza, pate1, pate2, gnocchi];
    const slides_desserts = [dessert1, dessert2, dessert3, dessert4];

  return (
    <div className="menu">
      <h2>Menu</h2>
      <p>Voici le menu du restaurant</p>
      <h3>Entrées</h3>
      <EmblaCarousel slides={slides_entrees} options={OPTIONS} />
      <h3>Plats</h3>
      <EmblaCarousel slides={slides_plats} options={OPTIONS} />
      <h3>Desserts</h3>
      <EmblaCarousel slides={slides_desserts} options={OPTIONS} />
    </div>
    
  );
}