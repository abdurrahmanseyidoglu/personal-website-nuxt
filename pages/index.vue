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
import { ImtilakJobPoints , InceJobPoints } from '~/personal-data/employment-data';

const i18n = useI18n()
const programmingLanguages = ref(['HTML', 'CSS|SCSS', 'JavaScript', 'TypeScript', 'PHP', 'SQL']);
const librariesAndFrameworks = ref(['Vue', 'Nuxt', 'Pinia', 'Vuex', 'React', 'Inertia.js', 'Laravel', 'Blade template engine', 'Tailwind CSS', 'Bootstrap']);
const languages = ref([
    { name: `${i18n.t('arabic')}`, proficiency: `${i18n.t('native')}` },
    { name: `${i18n.t('english')}`, proficiency: `${i18n.t('advanced')}` },
    { name: `${i18n.t('turkish')}`, proficiency: `${i18n.t('advanced')}` }
])
useHead({
    title: `${i18n.t('home')} | ${i18n.t('abdurrahman')}`,
})


</script>

<style lang="scss">
@import './index';
</style>
