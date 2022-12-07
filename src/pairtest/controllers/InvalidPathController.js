const invalidPathcontroller = async (req, res) => {
  res.status(200);
  res.json({ url: 'invalid url' });
};

export default invalidPathcontroller;
