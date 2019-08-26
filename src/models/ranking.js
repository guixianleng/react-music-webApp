import * as SongModel from "./song"
/**
 * 排行榜类模型
 */
export class Ranking {
  constructor(id, title, img, imgH5, listenCount, commentNum, updateTime, songs) {
    this.id = id;
    this.title = title;
    this.img = img;
    this.imgH5 = imgH5;
    this.listenCount = listenCount
    this.commentNum = commentNum
    this.updateTime = updateTime
    this.songs = songs;
  }
}

/**
 * 通过排行榜列表创建排行榜对象函数
 */
export function createRankingByList(data) {
  const songList = [];
  data.songList.forEach(item => {
    songList.push(new SongModel.Song(0, "", item.songname, "", 0, "", item.singername));
  });
  return new Ranking(
    data.id,
    data.topTitle,
    data.picUrl,
    data.picH5,
    data.listenCount,
    data.commentNum,
    data.updateTime,
    songList
  );
}

/**
 * 通过排行榜详情创建排行榜对象函数
 */
export function createRankingByDetail(data) {
  return new Ranking(
    data.topID,
    data.ListName,
    data.pic_album,
    data.pic_v12,
    data.listennum,
    data.comment_num,
    data.update_time,
    []
  );
}
