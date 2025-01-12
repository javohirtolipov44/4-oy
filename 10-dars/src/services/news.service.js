import Io from "../utils/io.js";

class newsService {
  constructor() {
    this.io = new Io();
  }
  async getAllNews() {
    const news = await this.io.readFile("news.json");
    return news;
  }

  async getNewsByCategory(params) {
    const news = await this.io.readFile("news.json");
    const newsByCategory = news.filter(
      (value) => value.category === params.name
    );
    return newsByCategory;
  }

  async getNewsById(params) {
    const news = await this.io.readFile("news.json");
    const newsById = news.find((value) => value.id === parseInt(params.id));
    console.log(params);
    if (newsById) {
      return newsById;
    }
    throw new Error("This id not exist.");
  }

  async addNews(body) {
    const news = await this.io.readFile("news.json");
    news.push({
      id: news.length + 1,
      ...body,
      date: new Date(),
    });
    await this.io.writeFile("news.json", news);
    return news;
  }

  async searchNews(query) {
    const news = await this.io.readFile("news.json");
    const searchNews = news.filter((value) =>
      value.content.toLowerCase().includes(query.content)
    );
    return searchNews;
  }
}

export default newsService;
