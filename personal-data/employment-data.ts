import { useNuxtApp } from '#app';
import { useI18n } from 'vue-i18n';
const nuxtApp = useNuxtApp();
const { t } = useI18n();

// Employment Data
export const ImtilakJobPoints = [
    {
        'point_title': t('imtilakPoint1'),
        'point_links': []
    },
    {
        'point_title': t('imtilakPoint2'),
        'point_links': []
    },
    {
        'point_title': t('imtilakPoint3'),
        'point_links': []
    },
    {
        'point_title': t('imtilakPoint4'),
        'point_links': [
            {
                'point_title': '[1]',
                'point_href': 'https://www.imtilak.net/en/landing/istanbul-city-center'
            },
            {
                'point_title': '[2]',
                'point_href': 'https://www.imtilak.net/en/landing/trabzon-oversea'
            },
            {
                'point_title': '[3]',
                'point_href': 'https://www.imtilak.net/en/landing/new-large-investments'
            },
            {
                'point_title': '[4]',
                'point_href': 'https://www.imtilak.net/en/landing/toskana-project'
            },
            {
                'point_title': '[5]',
                'point_href': 'https://www.imtilak.net/ar/landing/sapanca-lake-villas'
            },
            {
                'point_title': '[6]',
                'point_href': 'https://www.imtilak.net/en/landing/riva-villas'
            },
        ]
    },
    {
        'point_title': t('imtilakPoint5'),
        'point_links': []
    },
    {
        'point_title': t('imtilakPoint6'),
        'point_links': []
    },
];

export const InceJobPoints = [
    {
        'point_title': t('incePoint1'),
        'point_links': []
    },
    {
        'point_title': t('incePoint2'),
        'point_links': []
    },
    {
        'point_title': t('incePoint3'),
        'point_links': []
    },
    {
        'point_title': t('incePoint4'),
        'point_links': []
    },
];
