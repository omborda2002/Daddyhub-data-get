const request = require("request-promise");
const cheerio = require("cheerio");
const fs = require("fs");

// ####################################################################################################################################
// ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????

// URL ENTER
let url = "https://daddyhub.in/movie/Atrangi%20Re";

//------------------------------------------------------------------------------------------------------------------------------------

//Web series - w and movie - m
let cast = "m";

// ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
// ####################################################################################################################################

(async () => {
  let response = await request(url);

  let $ = cheerio.load(response);
  let name = $('div[class="movie_name"]>h1').text().trim();
  let year = $("span[id='yearoo']").text().trim();
  let genre = $("span[id='gennn']").text().trim();
  let language = $("span[id='lannn']").text().trim();

  let season = $("span[id='seasoo']").text().trim();
  let episode = $("span[id='episoo']").text().trim();
  let download_links = url;
  let youtube_link = "https://www.youtube.com/watch?v=cNleTbyNjPU";

  let data;
  if (cast == "m") {
    data = `${name} [${year}]\n-----------------------\n${genre}\n-----------------------\n${language}\n-----------------------\n🔻Download Link Here🔻\n-----------------------\n✅${download_links}\n=======================\nHow to download movies/web-series\n-----------------------\n${youtube_link}`;
    try {
      fs.writeFileSync("test.txt", data);
      //file written successfully
      console.log("File Made ------> Movie");
    } catch (err) {
      console.error(err);
    }
  } else {
    data = `${name} [${year}]\n-----------------------\n${season}\n-----------------------\n${genre}\n-----------------------\n${language}\n-----------------------\n🔻Download Link Here🔻\n-----------------------\n✅${download_links}\n=======================\nHow to download movies/web-series\n-----------------------\n${youtube_link}`;
    try {
      fs.writeFileSync("test.txt", data);
      //file written successfully
      console.log("File Made ------> Web-series");
    } catch (err) {
      console.error(err);
    }
  }

  // if (cast == "m") {
  //   let obj = {
  //     name: title,
  //     year: year,
  //     length : length,
  //     imdb: imdb_rate,
  //     popularity: pop,
  //     genre: genre,
  //     language: "Hindi",
  //     story: story,
  //     poster: image,
  //     download_links: [""],
  //     type: "hollywood",
  //   };
  //   let content2 = JSON.stringify(obj);
  //   try {
  //     fs.writeFileSync("test.json", content2);
  //     //file written successfully
  //     console.log("File Made ------> Movie");
  //   } catch (err) {
  //     console.error(err);
  //   }
  // } else {
  //   obj = {
  //     name: title,
  //     year: year,
  //     imdb: imdb_rate,
  //     popularity: pop,
  //     genre: gen,
  //     language: "Hindi",
  //     story: story,
  //     poster: image,
  //     download_links: ["", "", ""],
  //     type: "web",
  //     season: 1,
  //     episodes: 10,
  //   };
  //   let content = JSON.stringify(obj);
  //   // console.log(json);
  //   try {
  //     fs.writeFileSync("test.json", content);
  //     //file written successfully
  //     console.log("File Made ------> Web-series");
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }
})();
