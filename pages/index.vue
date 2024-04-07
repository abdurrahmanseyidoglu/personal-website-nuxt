<template>
    <div class="home">
        <div class="about-me">
            <img class="my-icon" src="/images/my-icon.png" alt="personal picture of the website owner pixilated">
            <p class="name ">Hi, I'm Abdurrahman</p>
            <p class="description">
                A computer engineer and a front-end developer.
            </p>
            <hr class="separator">
            <!-- PROFESSIONAL EXPERIENCE -->
            <div class="employment-history">
                <p class="employment-title">PROFESSIONAL EXPERIENCE</p>
                <EmploymentCard />
            </div>

            <hr class="separator">
            <!-- Skills Section -->
            <div class="my-skills">
                <p class="title">
                    My skills:

                </p>
                <ul class="skills">
                    <li>
                        <p class="sub-skill-title">Programming Languages</p>
                        <ul class="sub-skills">
                            <li class="sub-skill" v-for="programmingLanguage in programmingLanguages"
                                :key="programmingLanguage">
                                {{ programmingLanguage }}
                            </li>
                        </ul>
                    </li>
                    <li>
                        <p class="sub-skill-title">Frameworks</p>
                        <ul class="sub-skills">

                            <li class="sub-skill" v-for="framework in librariesAndFrameworks" :key="framework">
                                {{ framework }}
                            </li>

                        </ul>
                    </li>

                    <li>
                        <ul class="sub-skills">
                            <p class="sub-skill-title">Languages</p>

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
