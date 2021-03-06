module.exports = {
  name: 'ChinaMobil',
  userTag: {
    userName: 'userName',
    userToken: 'userPwd',
    userId: 'userId',
    photoPath: 'photoPath',
    userPhone: 'userPhone',
  },
  questionnaireURL: 'http://192.168.0.224:8001',
  baseURL: 'http://192.168.0.204:8083',
  // baseURL: 'http://moodle.cunovs.com:8080',
  api: {
    LoginApi: '/login/account',
    LogoutApi: '/login/logout',
    PhoneCodeApi: '/login/code',
    ValidInformationApi: '/config/valid',
    SetInformationApi: '/user/direction',
    GetPosterApi: '/config/banner',
    GetRequiredCoursesApi: '/config/self',
    GetRecommendApi: '/config/guess',
    SearchCourseApi: '/course/search',
    RetrievalApi: '/course',
    SearchApi: '/course/search',
    GetCourseApi: '/course',
    CollectionApi: '/collect',
    PraiseApi: '/praise',
    GetHistoryApi: '/user/video',
    GetDirectionApi: '/user/direction',
    PayApi: '/business',
    GetUserInfo: '/user/self',
  },
};
