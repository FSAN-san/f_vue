import user from '../../axios/apis/user'

export default {
  actions: {
    login (state:any, data:any) {
      return user.login(data)
    }
  }
}
