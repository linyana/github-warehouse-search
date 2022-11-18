/**
 * @param { DEV_URL } 开发环境  URL
 * @param { TEST_URL } 测试环境 URL
 * @param { PROD_URL } 生产环境 URL
*/
const DEV_URL = '//'
const TEST_URL = '//'
const PROD_URL = '//github-warehouse-search/'

let VUE_APP_BASE = DEV_URL
if(process.env.NODE_ENV === 'development') {
  VUE_APP_BASE = DEV_URL
} else if(process.env.NODE_ENV === 'production') {
  if(process.env.VUE_APP_URL === 'test') {
    VUE_APP_BASE = TEST_URL
  } else if(process.env.VUE_APP_URL === 'prod') {
    VUE_APP_BASE = PROD_URL
  } else {
    VUE_APP_BASE = DEV_URL
  }
} else if(process.env.NODE_ENV === 'test') {
  VUE_APP_BASE = TEST_URL
}

const config = {
  VUE_APP_BASE
}
export {
  config
}
