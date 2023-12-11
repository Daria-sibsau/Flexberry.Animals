import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as BurrowMixin
} from '../mixins/regenerated/models/i-i-s-animals-burrow';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(BurrowMixin, Validations, {
});

defineProjections(Model);

export default Model;
