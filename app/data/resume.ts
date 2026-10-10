import type { JobConfig, LanguageConfig } from '@@/types/Interfaces'

// Strings ending in "Key" are i18n keys from i18n/locales/*.json

export const jobs: JobConfig[] = [
  {
    titleKey: 'frontEnd',
    companyKey: 'arsipaGmbh',
    cityKey: 'berlin',
    countryKey: 'germany',
    start: { monthKey: 'january', year: 2025 },
    end: { monthKey: 'april', year: 2026 },
    points: [
      { key: 'arsipaPoint1' },
      { key: 'arsipaPoint2' },
      { key: 'arsipaPoint3' },
      { key: 'arsipaPoint4' },
      { key: 'arsipaPoint5' },
    ],
  },
  {
    titleKey: 'frontEnd',
    companyKey: 'imtilakGroup',
    cityKey: 'istanbul',
    countryKey: 'turkey',
    start: { monthKey: 'november', year: 2021 },
    end: { monthKey: 'december', year: 2024 },
    points: [
      { key: 'imtilakPoint1' },
      { key: 'imtilakPoint2' },
      {
        key: 'imtilakPoint3',
        links: [
          { point_title: '[1]', point_href: 'https://www.imtilak.net/en/landing/istanbul-city-center' },
          { point_title: '[2]', point_href: 'https://www.imtilak.net/en/landing/trabzon-oversea' },
          { point_title: '[3]', point_href: 'https://www.imtilak.net/en/landing/new-large-investments' },
          { point_title: '[4]', point_href: 'https://www.imtilak.net/en/landing/toskana-project' },
          { point_title: '[5]', point_href: 'https://www.imtilak.net/ar/landing/sapanca-lake-villas' },
          { point_title: '[6]', point_href: 'https://www.imtilak.net/en/landing/riva-villas' },
        ],
      },
      { key: 'imtilakPoint4' },
      { key: 'imtilakPoint5' },
    ],
  },
  {
    titleKey: 'frontEnd',
    companyKey: 'inceGroup',
    cityKey: 'istanbul',
    countryKey: 'turkey',
    start: { monthKey: 'may', year: 2020 },
    end: { monthKey: 'september', year: 2021 },
    points: [
      { key: 'incePoint1' },
      { key: 'incePoint2' },
    ],
  },
]

export const programmingLanguages: string[] = [
  'C#',
  'TypeScript',
  'JavaScript',
  'CSS|SCSS',
  'SQL',
  'PHP',
]

export const librariesAndFrameworks: string[] = [
  'ASP.NET Core',
  'Entity Framework Core',
  'PostgreSQL',
  'Redis',
  'React.js | Next.js',
  'Vue.js | Nuxt.js',
  'React Hook Form',
  'Zustand',
  'Zod',
  'Pinia',
  'MUI | Shadcn | PrimeUI',
  'Tailwind CSS',
]

export const languages: LanguageConfig[] = [
  { nameKey: 'arabic', proficiencyKey: 'native' },
  { nameKey: 'english', proficiencyKey: 'advanced' },
  { nameKey: 'turkish', proficiencyKey: 'advanced' },
]
