const options = {
  method: 'POST',
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json',
  }
};
  
fetch('https://56uump58ii.execute-api.us-east-1.amazonaws.com/dev/', options)
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Network Response Error');
    }
  })
  .then(data => {
    document.querySelector('visits').insertAdjacentHTML('beforeend', data);
  })
  .catch(error => console.log('Error: ', error));