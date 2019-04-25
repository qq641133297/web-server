let AppConfig = {}
AppConfig = {
  version: 'v1.0',
  appName: 'C3G',
  getApiBaseUrl() {
    return this.appName + '/' + this.version
  },
  timezone: new Date().getTimezoneOffset(),
  timeToLocal(UTCtime) {
    return UTCtime - this.timezone * 60 * 1000
  },
  timeToUTC(LOCALtime) {
    return LOCALtime + this.timezone * 60 * 1000
  }
}
module.exports = AppConfig
