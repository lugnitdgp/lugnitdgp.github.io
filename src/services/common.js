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
  getTimeline () {
    return Api().get('api/timeline/')
  },
  getBlogPosts () {
    return Api().get('blog/posts/')
  },
  getPost (id) {
    return Api().get(`blog/posts/${id}/`)
  },
  getCount () {
    return Api().get('api/get_count/')
  },
  getLinits () {
    return Api().get('api/linit/')
  }
}
