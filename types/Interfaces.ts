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
