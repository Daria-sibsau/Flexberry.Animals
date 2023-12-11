import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-animals-forest', 'Unit | Serializer | i-i-s-animals-forest', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-animals-forest',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
