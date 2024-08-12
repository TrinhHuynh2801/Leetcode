function rankVideos(videos) {
  // Implement your solution here
  const arr = new Array(videos.length).fill(0).map((_, index) => index);
  const videosArr = [];
  for (let video of videos) {
    videosArr.push(video.views);
  }
  arr.sort((a, b) => videosArr[b] - videosArr[a]);
  const ans = [];
  for (let i = 0; i < videos.length; i++) {
    ans.push({ views: videosArr[i], rank: arr.indexOf(i) + 1 });
  }
  return ans;
}

console.log(rankVideos([{ views: 1000 }, { views: 1000 }, { views: 2000 }]));
