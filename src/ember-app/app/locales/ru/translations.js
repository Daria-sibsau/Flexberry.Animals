import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Animals',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Animals',
          title: 'Animals'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
