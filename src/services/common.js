import Api from './Api'

export default {

  getCarousel () {
    return Api().get('api/carousel/')
  },
  getMembers () {
    return Api().get('api/profiles/')
  },
  getEvents () {
    return Api().get('api/events/')
  },
  getBlogPosts () {
    return Api().get('blog/posts/')
  },
  getPost (id) {
    return Api().get(`blog/posts/${id}/`)
  }
}
