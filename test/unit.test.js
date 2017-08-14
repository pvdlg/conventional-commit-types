import test from 'ava';
import emojiRegex from 'emoji-regex/text';
import {length} from 'stringz';
import {types, aliases} from '../index';

/**
 * AVA macro that verifies that each objec in `object` has the property `prop`.
 *
 * @method hasProperty
 * @param {Object} t AVA assertion librarie
 * @param {string} object object to verify
 * @param {string} prop property to verify
 */
function hasProperty(t, object, prop) {
  for (const obj in object) {
    if (Object.prototype.hasOwnProperty.call(object, obj)) {
      t.true(Object.prototype.hasOwnProperty.call(object[obj], prop));
    }
  }
}

/**
 * AVA macro that verifies that each objec in `object` has a valid emoji in the property `prop`.
 *
 * @method hasValidEmoji
 * @param {Object} t AVA assertion librarie
 * @param {string} object object to verify
 * @param {string} prop property to verify
 */
function hasValidEmoji(t, object) {
  for (const obj in object) {
    if (Object.prototype.hasOwnProperty.call(object, obj)) {
      t.true(emojiRegex({exact: true}).test(object[obj].emoji));
      t.is(length(object[obj].emoji), 1);
    }
  }
}

test('index.json has the property types', t => {
  t.truthy(types);
});

test('index.json has the property aliases', t => {
  t.truthy(aliases);
});

test('Each type has the property title', hasProperty, types, 'title');

test('Each type has the property description', hasProperty, types, 'description');

test('Each type has the property emoji', hasProperty, types, 'emoji');

test('Each alias has the property title', hasProperty, aliases, 'title');

test('Each alias has the property description', hasProperty, aliases, 'description');

test('Each alias has the property emoji', hasProperty, aliases, 'emoji');

test('Each alias has the property type', hasProperty, aliases, 'type');

test('Each alias emoji property has a value containig 1 emoji', hasValidEmoji, aliases);

test('Each type emoji property has a value containig 1 emoji', hasValidEmoji, types);

test('Each alias`s type property has a value that exists in types', t => {
  for (const alias in aliases) {
    if (Object.prototype.hasOwnProperty.call(aliases, alias)) {
      t.true(Object.prototype.hasOwnProperty.call(types, aliases[alias].type));
    }
  }
});
