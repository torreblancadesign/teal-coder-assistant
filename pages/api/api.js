const axios = require('axios');
const cheerio = require('cheerio');

module.exports = async (req, res) => {
  try {
    // Make a request to the website
const { data: html } = await axios.get('https://creativemarket.com/graphics/objects/abstract?sort=popular&page=1', {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537'
  }
});

    // Parse the HTML
    const $ = cheerio.load(html);
 
    // Select the products
    const products = $('.sp-product-card').map((i, el) => {
      return {
        title: $(el).find('.product-details__title').text().trim(),
        price: $(el).find('.product-info__price').text().trim(),
        imageUrl: $(el).find('img').attr('data-src'),
      };
    }).get();
 
    // Send the products as the response
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
};


 