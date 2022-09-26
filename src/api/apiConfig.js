const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '99acfbbcf18c0ef4057664230370824b',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
