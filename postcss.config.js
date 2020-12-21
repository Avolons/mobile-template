module.exports = {
    "plugins": {
      // "postcss-url": {},
      // to edit target browsers: use "browserslist" field in package.json
      "postcss-write-svg": {
        uft8: false
      },
      "postcss-cssnext": {},
      "postcss-px-to-viewport": {
        viewportWidth: 375, // 设计稿宽度
        viewportHeight: 1334, // 设计稿高度，可以不指定
        unitPrecision: 3, // px to vw无法整除时，保留几位小数
        viewportUnit: 'vw', // 转换成vw单位
        selectorBlackList: ['.ignore', '.hairlines'], // 不转换的类名
        minPixelValue: 1, // 小于1px不转换
        // exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
        mediaQuery: false // 允许媒体查询中转换
      },
      "postcss-viewport-units": {},
      "cssnano": {
        autoprefixer: false, // 和cssnext同样具有autoprefixer，保留一个
        "postcss-zindex": false
      }
    }
  }