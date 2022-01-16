const fs = require('fs');
const superagent = require('superagent');
const randomImageUrl = 'https://dog.ceo/api/breeds/image/random';

(async () => {
    // img1, img2, img3, img4 all are promises
    const img1 = superagent.get(randomImageUrl);
    const img2 = superagent.get(randomImageUrl);
    const img3 = superagent.get(randomImageUrl);
    const img4 = superagent.get(randomImageUrl);

    let allImages = await Promise.all([img1, img2, img3, img4]);
    allImages = allImages.map(element => element.body.message)
    console.log(allImages);
})()
