
document.getElementById('fetchButton').addEventListener('click', async function() {
    try{
    const response = await fetch('https://jsonplaceholder.typicode.com/photos');
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      
      const data = await response.json();

      const subset = data.slice(0, 100);
      
      for (let i = 0; i < 100; i++) {
        
        const imageURL = subset[i].url;
    
        const img = document.createElement('img');
        img.src = imageURL;
        img.alt = 'Fetched Image';
        img.style.maxWidth = '100%';
      
      
        const imageContainer = document.getElementById('image-container');
        imageContainer.appendChild(img);
      }
      
      
    }catch(error) {
        console.error('There was a problem with the fetch operation:', error);

    }
  });
  