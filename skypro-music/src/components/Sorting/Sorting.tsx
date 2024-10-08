"use client";
import React, { useState } from "react";
import styles from "./Sorting.module.css";
import Filter from "@components/Filter/Filter";
import { FilterData, order } from "@components/Filter/FilterData";

import { useAppSelector } from "../../hooks/store";
type props = {title:string}

const Sorting = ({title}:props) => {
  const [filterValue, setFilterValue] = useState<string | null>(null);

  const authorList = useAppSelector(
    (state) => state.playlist.filterOptions.author
  );
  const genreList = useAppSelector(
    (state) => state.playlist.filterOptions.genre
  );

  const filterList = (value: string) => {
    if (value === FilterData[0].title) {
      return authorList;
    } else if (value === FilterData[1].title) {
      return genreList;
    } else {
      return order;
    }
  };

  const handleFilterValue = (value: string) => {
    setFilterValue((prev) => (prev === value ? null : value));
  };
  
  return (
    <div>
      <h2 className={styles.centerblockH2}>{title}</h2>
      <div className={styles.centerblockFilter}>
        <div className={styles.filterTitle}>Искать по:</div>
        {FilterData.map((item, index) => {
          return (
            <Filter
              key={index}
              title={item.title}
              list={filterList(item.title)}
              onClick={handleFilterValue}
              value={item.value}
              isOpen={filterValue === item.value}
            
            />
          );
        })}
      </div>
    </div>
  );
};

export default Sorting;