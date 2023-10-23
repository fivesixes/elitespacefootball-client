import axios from 'axios';

const API_KEY = 'AIzaSyAlvxFSpLqXgang4gt4OdCVywl0W5l20Gc';
const CHANNEL_ID = 'UChj8wh3azJ8RoFCI0xtS4Lg';

export const fetchPlayerVideo = async (videoTitle) => {
  try {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        key: API_KEY,
        channelId: CHANNEL_ID,
        q: videoTitle,
        maxResults: '1',
        type: 'video',
        order: 'date',
      },
    });
    
    return response.data.items[0].id.videoId;
    
  } catch (error) {
    console.log('Error fetching videos:', error.message);
    return '';
  }
};

export const fetchPlaylistId = async (playlistTitle) => {
  const channelPlaylistsResponse = await axios.get('https://www.googleapis.com/youtube/v3/playlists', {
      params: {
        key: API_KEY,
        channelId: CHANNEL_ID,
        maxResults: '50', // Adjust as needed
        part: 'snippet',
      },
    });

    const channelPlaylists = channelPlaylistsResponse.data.items;

    // Step 2: Find the playlist with the matching title
    const playlist = channelPlaylists.find((item) => item.snippet.title === playlistTitle);

    if (!playlist) {
      throw new Error('Playlist not found');
    }

    // Step 3: Fetch the videos from the found playlist.
    const playlistId = playlist.id;

    return playlistId;
}

export const fetchPlaylist = async (playlistTitle) => {
  try {
    // Step 1: Get the channel's playlists
    const channelPlaylistsResponse = await axios.get('https://www.googleapis.com/youtube/v3/playlists', {
      params: {
        key: API_KEY,
        channelId: CHANNEL_ID,
        maxResults: '50', // Adjust as needed
        part: 'snippet',
      },
    });

    const channelPlaylists = channelPlaylistsResponse.data.items;

    // Step 2: Find the playlist with the matching title
    const playlist = channelPlaylists.find((item) => item.snippet.title === playlistTitle);

    if (!playlist) {
      throw new Error('Playlist not found');
    }

    // Step 3: Fetch the videos from the found playlist.
    const playlistId = playlist.id;

    const playlistItemsResponse = await axios.get('https://www.googleapis.com/youtube/v3/playlistItems', {
      params: {
        key: API_KEY,
        playlistId: playlistId,
        maxResults: '50', // Adjust as needed
        part: 'snippet',
      },
    });

    const playlistItems = playlistItemsResponse.data.items;

    // Step 4: Create an array of video objects from the playlist items.
    const videos = playlistItems.map((item) => ({
      videoId: item.snippet.resourceId.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      publishedAt: item.snippet.publishedAt,
    }));

    return videos;
  } catch (error) {
    console.log('Error fetching playlist:', error.message);
    return [];
  }
};
