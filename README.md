# Fantasy

个人站点，博客由 [Hexo](https://hexo.io/) 生成静态页面，托管在 GitHub Pages。

- 网站：https://zhaowodage.github.io/
- 相册：https://zhaowodage.github.io/Gallery/

## 功能

- 首页文章列表、时间轴归档、标签页
- 浅色 / 深色模式，简体 / 繁体切换
- 摄影相册：按日期排成时间线，点击照片用 Fancybox 查看大图

## 配置

博客正文是已经生成好的 HTML。改文章需要在 Hexo 源项目里编辑后重新生成，再把静态文件放进这个仓库。

相册不经过 Hexo，直接改这个仓库即可：

1. 把照片放到 `img/gallery/`
2. 在 `Gallery/photos.js` 的 `GALLERY_ALBUMS` 里加一条（日期、标题、图片文件名）
3. 推送到 `master`，GitHub Pages 会自动更新

`date` 用 `YYYY-MM-DD`，页面会按时间从新到旧排列。图片路径的大小写要和文件名一致。
