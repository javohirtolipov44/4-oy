import newsService from "../services/news.service.js";

class newsController {
  constructor() {
    this.newsService = new newsService();
  }

  async getAllNewsController(req, res) {
    try {
      const news = await this.newsService.getAllNews();
      res.json(news);
    } catch (error) {
      console.error(error.message);
    }
  }

  async getNewsByCategoryController(req, res) {
    try {
      const params = req.params;
      const news = await this.newsService.getNewsByCategory(params);
      res.json(news);
    } catch (error) {
      console.error(error.message);
    }
  }

  async getNewsByIdController(req, res) {
    try {
      const params = req.params;
      const news = await this.newsService.getNewsById(params);
      console.log(news);
      res.json(news);
    } catch (error) {
      console.error(error.message);
      res.status(404).json({
        message: error.message,
      });
    }
  }

  async addNewsController(req, res) {
    try {
      const body = req.body;
      const news = await this.newsService.addNews(body);
      if (news) {
        res.status(201).json({
          message: "success",
        });
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  async searchNewsController(req, res) {
    try {
      const query = req.query;
      const news = await this.newsService.searchNews(query);
      res.json(news);
    } catch (error) {
      console.error(error.message);
    }
  }
}

export default newsController;
