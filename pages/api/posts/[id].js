import posts from "../../../mock/posts.js";

export default (req, res) => {
  const { query } = req;
  const { id } = query;
  const post = posts.find((post) => post.id == id) || {};

  res.json({
    post,
  });
};
