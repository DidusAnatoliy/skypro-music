import React from "react";
import styles from "./Main.module.css";
import classNames from "classnames";

const Main = () => {
  return (
    <div className={styles.mainCenterblock}>
      <div className={styles.centerblockSearch} >
        <svg className={styles.searchSvg}>
          <use xlinkHref="icon/sprite.svg#icon-search"></use>
        </svg>
        <input
          className={styles.searchText}
          type="search"
          placeholder="Поиск"
          name="search"
        />
      </div>
      <h2 className={styles.centerblockH2}>Треки</h2>
      <div className={styles.centerblockFilter}>
        <div className={styles.filterTitle}>Искать по:</div>
        <div className={classNames(styles.filterButton, styles.btnText)}>
          исполнителю
        </div>
        <div className={classNames(styles.filterButton, styles.btnText)}>году выпуска</div>
        <div className={classNames(styles.filterButton, styles.btnText)}>жанру</div>
      </div>
      <div className={styles.centerblockContent}>
        <div className={styles.contentTitle}>
          <div className={classNames(styles.playlistTitleCol, styles.col01)}>Трек</div>
          <div className={classNames(styles.playlistTitleCol, styles.col02)}>Исполнитель</div>
          <div className={classNames(styles.playlistTitleCol, styles.col03)}>Альбом</div>
          <div className={classNames(styles.playlistTitleCol, styles.col04)}>
            <svg className={styles.playlistTitleSvg}>
              <use xlinkHref="icon/sprite.svg#icon-watch"></use>
            </svg>
          </div>
        </div>
        <div className={styles.contentPlaylist}>
          <div className={styles.playlistItem}>
            <div className={styles.playlistTrack}>
              <div className={styles.trackTitle}>
                <div className={styles.trackTitleImage}>
                  <svg className={styles.trackTitleSvg}>
                    <use xlinkHref="icon/sprite.svg#icon-note"></use>
                  </svg>
                </div>
                <div>
                  <a className={styles.trackTitleLink} href="http://">
                    Guilt <span className={styles.trackTitleSpan}></span>
                  </a>
                </div>
              </div>
              <div className={styles.trackAuthor}>
                <a className={styles.trackAuthorLink} href="http://">
                  Nero
                </a>
              </div>
              <div className={styles.trackAlbum}>
                <a className={styles.trackAlbumLink} href="http://">
                  Welcome Reality
                </a>
              </div>
              <div>
                <svg className={styles.trackTimeSvg}>
                  <use xlinkHref="icon/sprite.svg#icon-like"></use>
                </svg>
                <span className={styles.trackTimeText}>4:44</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;