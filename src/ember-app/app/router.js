import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-animals-animal-l');
  this.route('i-i-s-animals-animal-e',
  { path: 'i-i-s-animals-animal-e/:id' });
  this.route('i-i-s-animals-animal-e.new',
  { path: 'i-i-s-animals-animal-e/new' });
  this.route('i-i-s-animals-country-l');
  this.route('i-i-s-animals-country-e',
  { path: 'i-i-s-animals-country-e/:id' });
  this.route('i-i-s-animals-country-e.new',
  { path: 'i-i-s-animals-country-e/new' });
  this.route('i-i-s-animals-forest-l');
  this.route('i-i-s-animals-forest-e',
  { path: 'i-i-s-animals-forest-e/:id' });
  this.route('i-i-s-animals-forest-e.new',
  { path: 'i-i-s-animals-forest-e/new' });
});

export default Router;
