export interface ContentData {
  title?: string
  description?: string
  cover?: string
  tags?: string[]
}
export interface JobPoint {
  point_title: string
  point_links: PointLink[]
}
export interface PointLink {
  point_title: string
  point_href: string
}
export interface Language {
  name: string
  proficiency: string
}
export interface JobDate {
  monthKey: string
  year: number
}
export interface JobConfig {
  titleKey: string
  companyKey: string
  cityKey: string
  countryKey: string
  start: JobDate
  // Omit for a current job ("Present")
  end?: JobDate
  points: { key: string, links?: PointLink[] }[]
}
export interface LanguageConfig {
  nameKey: string
  proficiencyKey: string
}
