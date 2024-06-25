async function fetchAndProcessData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/photos');
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      const data = await response.json();

      const subset = data.slice(0, 100);

      return subset;
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }
  
var result = null;
fetchAndProcessData()
  .then(subset => {
      
       // Create a URL for the blob
    const imageURL = subset[0].url;
    console.log(imageURL); 
  })
  .catch(error => {
    console.error('Error fetching and processing data:', error);
  });

  