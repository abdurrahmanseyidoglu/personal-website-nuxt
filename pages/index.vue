<template>
    <div class="home">
        <div class="about-me">
            <img class="my-icon" src="/images/my-icon.png" alt="personal picture of the website owner pixilated"
                width="102" height="102">
            <p class="name ">{{ $t('hi') }}</p>
            <p class="description">
                {{ $t('summery') }}
            </p>
            <hr class="separator">
            <!-- PROFESSIONAL EXPERIENCE -->
            <div class="employment-history">
                <p class="employment-title">{{ $t('experience') }}</p>
                <div class="employment-cards-wrapper">
                    <EmploymentCard :date="`${$t('november')} 2021 - ${$t('present')}`" :jobTile="$t('frontEnd')"
                        :companyName="$t('imtilakGroup')" :companyLocation="`${$t('istanbul')} / ${$t('turkey')}`"
                        :jobPoints="ImtilakJobPoints" />
                    <hr class="dashed-separator">
                    <EmploymentCard :date="`${$t('august')} 2020 - ${$t('october')} -2021`" :jobTile="$t('frontEnd')"
                        :companyName="$t('inceGroup')" :companyLocation="`${$t('istanbul')} / ${$t('turkey')}`"
                        :jobPoints="InceJobPoints" />
                </div>
            </div>

            <hr class="separator">
            <!-- Skills Section -->
            <div class="my-skills">
                <p class="title">
                    {{ $t('skills') }}

                </p>
                <ul class="skills">
                    <li>
                        <p class="sub-skill-title">{{ $t('programmingLanguages') }}</p>
                        <ul class="sub-skills">
                            <li class="sub-skill" v-for="programmingLanguage in programmingLanguages"
                                :key="programmingLanguage">
                                {{ programmingLanguage }}
                            </li>
                        </ul>
                    </li>
                    <li>
                        <p class="sub-skill-title">{{ $t('frameworks') }}</p>
                        <ul class="sub-skills">

                            <li class="sub-skill" v-for="framework in librariesAndFrameworks" :key="framework">
                                {{ framework }}
                            </li>

                        </ul>
                    </li>

                    <li>
                        <ul class="sub-skills">
                            <p class="sub-skill-title">{{ $t('languages') }}</p>

                            <li class="sub-skill" v-for="language in languages" :key="language.name">
                                {{ language.name }} - ({{ language.proficiency }})
                            </li>

                        </ul>
                    </li>


                </ul>
            </div>
        </div>

    </div>
</template>
<script setup lang="ts">

const programmingLanguages = ref(['HTML', 'CSS', 'JavaScript', 'TypeScript']);
const librariesAndFrameworks = ref(['Vue', 'Nuxt', 'Pinia', 'Vuex', 'React', 'Inertia.js', 'Blade template engine', 'Tailwind CSS', 'SCSS', 'Bootstrap']);
const languages = ref([
    { name: 'Arabic', proficiency: 'Native' },
    { name: 'English', proficiency: 'Intermediate' },
    { name: 'Turkish', proficiency: 'Intermediate' }
])
const i18n = useI18n();
useHead({
    title: `${i18n.t('home')} | Abdurrahman`,
})

// Employment Data
const ImtilakJobPoints = [
    {
        'point_title': 'Developed and managed Server-side-render web applications using Nuxt.js',
        'point_links': []
    },
    {
        'point_title': 'Successfully constructed the Imtilak-Global website from the ground up.',
        'point_links': []
    },
    {
        'point_title': 'Proficiently crafted dynamic single-page applications using Vue.js with Server-side-rendering using Inertia.js library.',
        'point_links': []
    },
    {
        'point_title': ' Designed captivating landing pages employing Blade, SCSS, and JavaScript | Examples:',
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
        'point_title': 'Exemplified expertise in webpage optimization, resulting in a substantial performance boost for a website.',
        'point_links': []
    },
    {
        'point_title': 'Led the development of the Oragon Website project.',
        'point_links': []
    },


]
const InceJobPoints = [
    {
        'point_title': 'Build and refactor user and admin dashboards utilizing React.js, TailwindCss, Typescript and Bootstrap',
        'point_links': []
    },
    {
        'point_title': 'Designed and developed webpages using HTML, CSS, and JavaScript, ensuring cross-browser compatibility and responsiveness',
        'point_links': []
    },
    {
        'point_title': 'Improved user interface (UI) and user experience (UX) by implementing modern design principles and responsive layouts',
        'point_links': []
    },
    {
        'point_title': 'Created comprehensive documentation including project specifications, technical documentation, and user manuals to facilitate smooth project handover and support future maintenance',
        'point_links': []
    },
]
</script>

<style lang="scss">
@import './index';
</style>
