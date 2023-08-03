export default (req, res) => {
  const data = {
    message: '操作成功！',
    statusCode: "200",
    result:[
      { ND: "2023" },
      { ND: "2022" },
      { ND: "2021" }
    ]
  }
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(data));
}
