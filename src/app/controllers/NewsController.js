class NewsController {
  // [GET] /news
  index(req, res) {
    res.send({
      hello: 'My name is Vinh',
    });
  }

  // [GET] /news/:slug
  show(req, res) {
    res.send('News detail');
  }
}

module.exports = new NewsController();
