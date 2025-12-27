export default defineNuxtRouteMiddleware((to) => {
  console.log(to.fullPath)

  if (to.fullPath?.includes('blog')) {
    console.log('this worked!')
    // throw createError({ status: 404, statusText: 'Page Not Found' })
  }
})
