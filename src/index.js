const TEST_IMAGE_BLOB = 'iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAG1BMVEUAAP/////f3/9fX/8/P/+fn/+/v/9/f/8fH/+M629cAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABaElEQVRoge2UvXKCUBBGP/lRSkFES5eJ2oJVSngD0zgpoTA1JC8gmcnktbP3YkxLcOy+MyjX2Z3j7t4LACGEEEIIIYQQQgghhDweJ1SeI8Bb6kfvkA0wDU0geoUz/83JBriiNE2LtoGzBvywUJcuJupK3uro6rI5A1wmGZ9r5I3+EP2SBVCGNvDS9K75wB5tnrtEelHFQfuTM/AuNtBVI1yQb60G7Zf2Jwfg3Lsmo1xlrRVh56pRugsWvas8/s+lc92ajSuAYBUk6nIab21dXp3dZr8d4tLtVoEb6noWQ9TlV7NKroHbmUiG9+iEuoPTDdoM4s6dRkwxuwZj5tUedOqd/v8REsRdIdfACFcQ6alAnqay0Tb3Oe5w+THqAvXFLASn0z2usjKX2YOVavL9SJd51jItahp75rgmquniP5eGn/qcAS7zDviw7whfx699Ws3NpdHY5jTDaiOEEEIIIYQQQgghhDyWH6CHLTYqPsdwAAAAAElFTkSuQmCC'
const TEST_IMAGE_URL = 'https://via.placeholder.com/100/FFFF00/000000/?text=Example'

if (!navigator.camera) {
  navigator.camera = {
    getPicture: function (success, fail, opt) {
      switch (opt.destinationType) {
        // Camera.DestinationType.DATA_URL = 0
        case 0:
          success(TEST_IMAGE_BLOB)
          break
        // Camera.DestinationType.FILE_URI = 1
        case 1:
          success(TEST_IMAGE_URL)
          break
        // Camera.DestinationType.NATIVE_URI = 2
        case 2:
          success(TEST_IMAGE_URL)
          break
      }
    }
  }
}
