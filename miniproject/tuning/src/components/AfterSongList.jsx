import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SongCard = ({ song }) => {
    const [liked, setLiked] = useState(false);

  const handleLike = async () => {
    try {
      await axios.post(`http://localhost:1010/api/likes/${song._id}`, { liked: true });
      setLiked(true);
    } catch (error) {
      console.error('Error while updating like status', error);
    }
  };
  return (
    // <div className="card d-flex flex-row">
    //   <img src={song.imgUrl} alt="Song" style={{ width: '100px', height: '100px' }}/>
    //   <div className="container">
    //     <h4><b>{song.title}</b></h4>
    //     <p>{song.artist}</p>
    //     <audio controls>
    //       <source src={song.songUrl} type="audio/mpeg" />
    //       Your browser does not support the audio element.
    //     </audio>
    //   </div>
    // </div>
    <div style={{ display: 'flex', flexWrap: 'wrap',flexDirection:'row' }}>
  
    <div  className="card d-flex flex-col" style={{ width: '100%', margin: '10px' }}>
      <img src={song.imgUrl} alt="Song" style={{ width: '250px', height: '200px' ,alignContent:'center',justifyContent:'center'}}/>
      <div className="container">
        <h4><b>{song.title}</b></h4>
        <p>{song.artist}</p>
        <audio controls style={{ width: '90%', margin: '10px' }}>
          <source src={song.songsUrl} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <button onClick={handleLike} style={{ backgroundColor: liked ? 'blue' : 'grey', color: 'white', padding: '10px', borderRadius: '5px', border: 'none', cursor: 'pointer', marginTop: '10px' }}>
            {liked ? 'Liked' : 'Like'}
          </button>
      </div>
    </div>
  
</div>

  );
};

const AfterSongList = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:1010/api/songs');
        setSongs(response.data);
      } catch (error) {
        console.error('Error fetching songs:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="song-list d-flex flex-row">
      {songs.map((song, index) => (
        <SongCard key={index} song={song} />
      ))}
    </div>
  );
};

export default AfterSongList;
