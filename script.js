const data = [[0, 0.38071066, 0.03783564, 0.46541822, 0.54682434, 0.01614087,
    0.5397044, 0.41830018, 0.5321101, 0.64285713, 0, 1,
    1, 0, 1, 0, 1, 0,
    1, 0, 1, 0, 1, 0,
    1, 0, 1, 0, 1, 0,
    1, 0, 0, 0, 0, 0,
    1, 0, 0, 0, 0, 0,
    0, 0, 0]];

const jsonData = JSON.stringify(data);

fetch('http://127.0.0.1:5000', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: jsonData
})
    .then(response => response.json())
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error('Error:', error);
    });