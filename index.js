function randomRedirect() {
    const urls = [
      "https://github.com/KaosSoMotTheGioi/Image-host/blob/main/IMG/image1.gif?raw=true",
      "https://github.com/KaosSoMotTheGioi/Image-host/blob/main/IMG/03.gif?raw=true",
      "https://google.com",
    ];
  
    const randomIndex = Math.floor(Math.random() * urls.length);
    const randomUrl = urls[randomIndex];
  
    const metaTag = document.createElement('meta');
    metaTag.httpEquiv = 'refresh';
    metaTag.content = `0; url=${randomUrl}`;
    document.head.appendChild(metaTag);
  }
  

  randomRedirect();
