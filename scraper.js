import request from 'request';
import cheerio from 'cheerio';

const scrapeData = (newsItems ,newsTitle ) => {
    const url = 'https://news.ycombinator.com/';
  request(url, (error, response, html) => {
    if (error) {
      console.error('Error fetching data:', error);
      return;
    }

    const $ = cheerio.load(html);

    

    $('.titleline a').each((index, element) => {
      const title = $(element).text();
      const url = $(element).attr('href');
      
      
      // Extract other details (upvotes, comments, posted date)
      // ...

      newsTitle.push({ title, url});
    });

    $('.subtext').each((index, element) => {
        const upvotes = $(element).find('.score').text();
        const comments = $(element).find('a').text();
        const postedDate = $(element).find('.age a').text();
        
        
        // Extract other details (upvotes, comments, posted date)
        // ...
  
        newsItems.push({ upvotes , comments , postedDate});
      });

    // Process news items (save to database or further processing)
    console.log(newsItems , newsTitle);
  }); 
}
 



