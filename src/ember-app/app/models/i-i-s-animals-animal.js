import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as AnimalMixin
} from '../mixins/regenerated/models/i-i-s-animals-animal';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(AnimalMixin, Validations, {
});

defineProjections(Model);

export default Model;
