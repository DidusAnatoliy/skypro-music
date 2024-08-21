import React from "react";
import Image from "next/image";
import styles from "./Sidebar.module.css";
import User from "../User/User";


const Sidebar = () => {

  return (
    <div className={styles.mainSidebar}>
      <User/>
      <div className={styles.sidebarBlock}>
        <div className={styles.sidebarList}>
          <div className={styles.sidebarItem}>
            <a className={styles.sidebarLink} href="#">
              <Image
                className={styles.sidebarImg}
                src="/images/playlist01.png"
                alt="Плейлист дня"
                width={256}
                height={75}
                priority
              />
            </a>
          </div>
          <div className={styles.sidebarItem}>
            <a className={styles.sidebarLink} href="#">
              <Image
                className={styles.sidebarImg}
                src="/images/playlist02.png"
                alt="day's playlist"
                width={256}
                height={75}
              />
            </a>
          </div>
          <div className={styles.sidebarItem}>
            <a className={styles.sidebarLink} href="#">
              <Image
                className={styles.sidebarImg}
                src="/images/playlist03.png"
                alt="day's playlist"
                width={256}
                height={75}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;