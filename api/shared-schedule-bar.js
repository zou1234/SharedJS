export default (req, res) => {
  const data = {
    message: '操作成功！',
    statusCode: "200",
    result:[
      {
        "KQMJ": 14.123,
        "ZKZ": "测试主矿种字段YIAPXKLEIR",
        "GS": 1
      },
      {
        "KQMJ": 13.237,
        "ZKZ": "主矿种字段-铁矿",
        "GS": 2
      },
      {
        "KQMJ": 12.880,
        "ZKZ": "测试主矿种字段ULQBRQYBXX",
        "GS": 1
      }
    ]
  }
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(data));
}
