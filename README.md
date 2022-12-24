# remazing-webscraper

This is a simple web scraper using Node.js and Puppeteer. The crawled data is subsequently stored in a local MongoDB instance. Everything runs in containers, therefore the Docker instructions should be followed. Clone the repo, go to the root of project and execute

```
docker compose -p [how you would like to name the project...] up -d
```

The containers should be running shortly afterwards. Test the API endpoints with your favorite REST client (Postman, Hoppscotch, ...).

| Route              | HTTP Methode |                   Beschreibung |
| ------------------ | :----------: | -----------------------------: |
| `/api/v1/products` |    `POST`    | Start crawling and store in db |
| `/api/v1/products` |    `GET`     |   List of all crawled products |

To wind down the containers, use

```
docker compose down
```

This is just a litte side hustle project to try out web scraping. Feel free to get in touch: chris.schimetschka@gmail.com
