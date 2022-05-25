module.exports = function SortMiddleware(req, res, next) {
  res.locals._sort = {
    enable: false,
    type: 'default',
  };

  if (req.query.hasOwnProperty('_sort')) {
    // res.local._sort.enable = true;
    // res.local._sort.type = req.query.type;
    // res.local._sort.column = req.query.column;

    Object.assign(res.locals._sort, {
      enable: true,
      type: req.query.type,
      column: req.query.column,
    });
  }

  next();
};
