// Action Creator
export const SelectSong = (song) => {
  // return an action
  return {
    type: "SELECT_SONG",
    payload: song,
  };
};
