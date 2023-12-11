import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISAnimalsAnimalLForm from './forms/i-i-s-animals-animal-l';
import IISAnimalsCountryLForm from './forms/i-i-s-animals-country-l';
import IISAnimalsForestLForm from './forms/i-i-s-animals-forest-l';
import IISAnimalsAnimalEForm from './forms/i-i-s-animals-animal-e';
import IISAnimalsCountryEForm from './forms/i-i-s-animals-country-e';
import IISAnimalsForestEForm from './forms/i-i-s-animals-forest-e';
import IISAnimalsAnimalModel from './models/i-i-s-animals-animal';
import IISAnimalsBurrowModel from './models/i-i-s-animals-burrow';
import IISAnimalsCountryModel from './models/i-i-s-animals-country';
import IISAnimalsForestModel from './models/i-i-s-animals-forest';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-animals-animal': IISAnimalsAnimalModel,
    'i-i-s-animals-burrow': IISAnimalsBurrowModel,
    'i-i-s-animals-country': IISAnimalsCountryModel,
    'i-i-s-animals-forest': IISAnimalsForestModel
  },

  'application-name': 'Animals',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Animals',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Animals',
          title: 'Animals'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        animals: {
          caption: 'Animals',
          title: 'Animals',
          'i-i-s-animals-country-l': {
            caption: 'Country',
            title: ''
          },
          'i-i-s-animals-animal-l': {
            caption: 'Animal',
            title: ''
          },
          'i-i-s-animals-forest-l': {
            caption: 'Forest',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-animals-animal-l': IISAnimalsAnimalLForm,
    'i-i-s-animals-country-l': IISAnimalsCountryLForm,
    'i-i-s-animals-forest-l': IISAnimalsForestLForm,
    'i-i-s-animals-animal-e': IISAnimalsAnimalEForm,
    'i-i-s-animals-country-e': IISAnimalsCountryEForm,
    'i-i-s-animals-forest-e': IISAnimalsForestEForm
  },

});

export default translations;
