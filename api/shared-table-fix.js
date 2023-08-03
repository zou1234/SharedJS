export default (req, res) => {
  const data = {
    message: '操作成功！',
    statusCode: "200",
    result: [
      {
        "LXMC": "市辖区",
        "YSSQD": 14128,
        "SJBJPJHS": 23.00,
        "XFLX": "区域",
        "SJZJPJF": 70.00,
        "YSSQL": 30550,
        "GSSHD": 19381,
        "YGJSJML": 6795,
        "RQ": 20220930
      },
      {
        "LXMC": "新兴县",
        "YSSQD": 22464,
        "SJBJPJHS": 23.00,
        "XFLX": "区域",
        "SJZJPJF": 70.00,
        "YSSQL": 32280,
        "GSSHD": 19081,
        "YGJSJML": 32232,
        "RQ": 20220930
      },
      {
        "LXMC": "郁南县",
        "YSSQD": 19040,
        "SJBJPJHS": 23.00,
        "XFLX": "区域",
        "SJZJPJF": 70.00,
        "YSSQL": 12779,
        "GSSHD": 29597,
        "YGJSJML": 31615,
        "RQ": 20220930
      },
      {
        "LXMC": "云安区",
        "YSSQD": 25587,
        "SJBJPJHS": 23.00,
        "XFLX": "区域",
        "SJZJPJF": 70.00,
        "YSSQL": 26255,
        "GSSHD": 30723,
        "YGJSJML": 9750,
        "RQ": 20220930
      },
      {
        "LXMC": "罗定市",
        "YSSQD": 25961,
        "SJBJPJHS": 23.00,
        "XFLX": "区域",
        "SJZJPJF": 70.00,
        "YSSQL": 8713,
        "GSSHD": 8245,
        "YGJSJML": 27367,
        "RQ": 20220930
      },
      {
        "LXMC": "云城区",
        "YSSQD": 27260,
        "SJBJPJHS": 23.00,
        "XFLX": "区域",
        "SJZJPJF": 70.00,
        "YSSQL": 31572,
        "GSSHD": 30361,
        "YGJSJML": 21607,
        "RQ": 20220930
      }
    ]
  }
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(data));
}
