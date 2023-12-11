import {
  defineNamespace,
  defineProjections,
  Model as BurrowMixin
} from '../mixins/regenerated/models/i-i-s-animals-burrow';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(BurrowMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
