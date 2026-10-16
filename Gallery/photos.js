/**
 * 摄影相册数据
 * 上传步骤：
 * 1. 把照片放到 img/gallery/ 文件夹
 * 2. 在下面 ALBUMS 里加一条记录（日期、标题、图片文件名）
 * 3. 保存后重新推送到 GitHub 即可上线
 *
 * date 建议用 YYYY-MM-DD，页面会按时间从新到旧排成时间线
 */
window.GALLERY_ALBUMS = [
  {
    date: "2025-06-15",
    title: "爱莲说",
    desc: "荷叶生莲花，莲花亦有爱。",
    photos: [
      { src: "/img/gallery/DSC00529.JPG", caption: "不染一尘" },
      
    ],
  },
  {
    date: "2024-05-12",
    title: "海边漫步",
    desc: "风很大，海很蓝。",
    photos: [
      { src: "/img/gallery/sea.jpg", caption: "海平面" },
      { src: "/img/gallery/water.jpg", caption: "水纹" },
    ],
  },
  {
    date: "2023-10-03",
    title: "城市光影",
    desc: "傍晚的光线刚刚好。",
    photos: [
      { src: "/img/gallery/shine.png", caption: "光" },
      { src: "/img/gallery/top.jpg", caption: "天空" },
    ],
  },
  {
    date: "2023-08-18",
    title: "随手拍",
    desc: "把那天喜欢的画面留下来。",
    photos: [
      { src: "/img/gallery/IMG_E1623.JPG", caption: "其一" },
      { src: "/img/gallery/IMG_E1624.JPG", caption: "其二" },
      { src: "/img/gallery/IMG_E1625.JPG", caption: "其三" },
      { src: "/img/gallery/IMG_E1704.JPG", caption: "其四" },
    ],
  },
];
