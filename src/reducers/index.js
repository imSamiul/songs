const songsReducers = () => {
  return [
    { title: "No Scrubs", duration: "4:05" },
    { title: "Macarena", duration: "2:30" },
    { title: "Smell like teen spirit", duration: "3:45" },
    { title: "All star", duration: "3:15" },
  ];
};

const selectSongReducer = (selectedSong = null, action) => {
  if (action.type === "SELECT_SONG") {
    return action.payload;
  }
  return selectedSong;
};
