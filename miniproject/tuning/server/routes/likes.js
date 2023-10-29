const express = require('express');
const router = express.Router();
const Song = require('../models/song.js');

// POST request to update the like status for a song
router.post('/api/likes/:_id', async (req, res) => {
  try {
    const { _id } = req.params;
    const { liked } = req.body;
    const { userId } = req.body;

    // Find the song by ID and update the like status
    const song = await Song.findById(_id);
    if (!song) {
      res.status(404).json({ message: 'Song not found' });
    } else {
      song.likes.push({ liked, user: userId  });
      await song.save();
      res.status(200).json({ message: 'Like updated successfully' });
    }
  } catch (error) {
    console.error('Error while updating like status', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
