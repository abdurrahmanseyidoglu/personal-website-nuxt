<template>
    <div class="home">
        <div class="about-me">
            <img class="my-icon" src="/images/my-icon.png" alt="personal picture of the website owner pixilated">
            <p class="name ">Hi, I'm Abdurrahman</p>
            <p class="description">
                A computer engineer and a front-end developer.
            </p>
            <hr class="seperator">
            <div class="my-skills">
                <p class="title">
                    Here are my skills:

                </p>
                <ul class="skills">
                    <ul class="sub-skills">
                        <li class="sub-skill" v-for="programmingLanguage in programmingLanguages"
                            :key="programmingLanguage">
                            {{ programmingLanguage }}
                        </li>
                    </ul>
                    <ul class="sub-skills">

                        <li class="sub-skill" v-for="framework in librariesAndFrameworks" :key="framework">
                            {{ framework }}
                        </li>

                    </ul>

                    <ul class="sub-skills">

                        <li class="sub-skill" v-for="langauge in languages" :key="langauge.name">
                            {{ langauge.name }} - ({{ langauge.proficiency }})
                        </li>

                    </ul>

                </ul>
            </div>
        </div>

    </div>
</template>
<script setup lang="ts">
const programmingLanguages = ref(['HTML', 'CSS', 'JavaScript', 'TypeScript', 'C#']);
const librariesAndFrameworks = ref(['Vue', 'Nuxt', 'Pinia', 'Vuex', 'React', 'Inertia.js', 'Blade template engine', 'Tailwind CSS', 'SCSS', 'Bootstrap']);
const languages = ref([
    { name: 'Arabic', proficiency: 'Native' },
    { name: 'English', proficiency: 'Intermediate' },
    { name: 'Turkish', proficiency: 'Intermediate' }
])
</script>

<style lang="scss">
@import './index';
</style>
