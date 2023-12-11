import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-animals-animal', 'Unit | Model | i-i-s-animals-animal', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-animals-animal',
    'model:i-i-s-animals-burrow',
    'model:i-i-s-animals-country',
    'model:i-i-s-animals-forest',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
