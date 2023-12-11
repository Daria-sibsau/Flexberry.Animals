import {
  defineNamespace,
  defineProjections,
  Model as ForestMixin
} from '../mixins/regenerated/models/i-i-s-animals-forest';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ForestMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
