import Api from './Api'

export default {

  getMembers () {
    return Api().get('api/profiles/')
  }
}
