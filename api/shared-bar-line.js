export default (req, res) => {
  const data = {
    message: '操作成功！',
    statusCode: "200",
    result:[
      {
        "KQMJ": 1078.804,
        "KSS": 213,
        "SZD": "云浮市"
      },
      {
        "KQMJ": 1186.532,
        "KSS": 229,
        "SZD": "云城区"
      },
      {
        "KQMJ": 1157.406,
        "KSS": 224,
        "SZD": "云安区"
      },
      {
        "KQMJ": 1113.829,
        "KSS": 220,
        "SZD": "罗定市"
      },
      {
        "KQMJ": 1253.109,
        "KSS": 246,
        "SZD": "新兴县"
      },
      {
        "KQMJ": 1107.853,
        "KSS": 217,
        "SZD": "郁南县"
      }
    ]
  }
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(data));
}
