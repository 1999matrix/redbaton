import request from 'request';
import cheerio from 'cheerio';


  const url = 'https://news.ycombinator.com/';
  request(url, (error, response, html) => {
    if (error) {
      console.error('Error fetching data:', error);
      return;
    }

    const $ = cheerio.load(html);

    const newsItems = [];

    $('.titleline ').each((index, element) => {
      const title = $(element).text();
      const url = $(element).find('a').attr('href');
      const upvotes = $(element).find('.score').text();
      const comments = $(element).find('.subtext').text();
      const postedDate = $(element).find('.age a').text();
      
      // Extract other details (upvotes, comments, posted date)
      // ...

      newsItems.push({ title, url  , upvotes , comments , postedDate});
    });

    // Process news items (save to database or further processing)
    console.log(newsItems);
  });



