"use client";

import CenterBlock from "@components/CenterBlock/CenterBlock";
import React, { useEffect, useState } from "react";
import styles from "../layout.module.css";
import { useAppDispatch, useAppSelector } from "../../../hooks/store";
import { getFavoriteTracks, setError, setIsLoading } from "../../../store/features/playListSlice";
import { useInitializeLikedTracks } from "@/hooks/likes";
import Sorting from "@/components/Sorting/Sorting";

const FavoritePlaylist = () => {
  useInitializeLikedTracks()

  const dispatch = useAppDispatch();
  const allTracks = useAppSelector((state) => state.playlist.likedTracks);
  const filteredTracks = useAppSelector((state) => state.playlist.filteredPlaylist);
  const tokens = useAppSelector((state) => state.user.tokens);


  useEffect(() => {
    const fetchTracks = async () => {
      if (tokens.access) {
        dispatch(setIsLoading(true));
        try {
          await dispatch(getFavoriteTracks(tokens.access)).unwrap();
        } catch (err) {
          dispatch(setError("Не удалось загрузить треки"));
          console.error("Ошибка при загрузке треков:", err);
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchTracks();
  }, [dispatch, tokens.access, allTracks]);
  return (
    <>
      <Sorting title={"Мои Треки"} />
      <CenterBlock allTracks={allTracks} />
    </>
  );
};

export default FavoritePlaylist;