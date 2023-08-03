export default (req, res) => {
  const data = {
    message: '操作成功！',
    statusCode: "200",
    result:[
      {
        "ZB": 48.7,
        "SL": 656,
        "MZ": "小于半年"
      },
      {
        "ZB": 51.3,
        "SL": 692,
        "MZ": "0.5-1年"
      },
      {
        "ZB": 0.0,
        "SL": 0,
        "MZ": "1-3年"
      },
      {
        "ZB": 0.0,
        "SL": 0,
        "MZ": "3-10年"
      },
      {
        "ZB": 0.07,
        "SL": 1,
        "MZ": "大于10年"
      }
    ]
  }
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(data));
}
