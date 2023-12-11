import {
  defineNamespace,
  defineProjections,
  Model as AnimalMixin
} from '../mixins/regenerated/models/i-i-s-animals-animal';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(AnimalMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
