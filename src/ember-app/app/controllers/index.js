import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.animals.caption'),
          title: i18n.t('forms.application.sitemap.animals.title'),
          children: [{
            link: 'i-i-s-animals-country-l',
            caption: i18n.t('forms.application.sitemap.animals.i-i-s-animals-country-l.caption'),
            title: i18n.t('forms.application.sitemap.animals.i-i-s-animals-country-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-animals-animal-l',
            caption: i18n.t('forms.application.sitemap.animals.i-i-s-animals-animal-l.caption'),
            title: i18n.t('forms.application.sitemap.animals.i-i-s-animals-animal-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-animals-forest-l',
            caption: i18n.t('forms.application.sitemap.animals.i-i-s-animals-forest-l.caption'),
            title: i18n.t('forms.application.sitemap.animals.i-i-s-animals-forest-l.title'),
            icon: 'building',
            children: null
          }]
        }
      ]
    };
  }),
})