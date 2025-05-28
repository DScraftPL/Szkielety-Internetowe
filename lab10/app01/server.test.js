const mongoose = require("mongoose")
const supertest = require("supertest")
const Post = require("./models/Post")

const createServer = require("./server")
mongoose.connect(
  "mongodb://localhost:27017/postsdb",
  { useNewUrlParser: true }
)

beforeEach(async () => {
  await Post.deleteMany({})
})

afterAll(async () => {
  await mongoose.connection.close()
})

const app = createServer()

test("GET /posts", async () => {
  const post = await Post.create({
    title: "Post 1",
    content: "Tekst postu 1",
  })
  await supertest(app)
    .get("/api/posts")
    .expect(200)
    .then((response) => {
      // Sprawdzenie typu i długości odpowiedzi
      expect(Array.isArray(response.body)).toBeTruthy()
      expect(response.body.length).toEqual(1)
      // Sprawdzenie danych odpowiedzi
      expect(response.body[0]._id).toBe(post.id)
      expect(response.body[0].title).toBe(post.title)
      expect(response.body[0].content).toBe(post.content)
    })
})

test("POST /api/posts", async () => {
  const data = {
    title: "Post 1",
    content: "Tekst postu 1",
  }
  await supertest(app)
    .post("/api/posts")
    .send(data)
    .expect(200)
    .then(async (response) => {
      // Sprawdzenie odpowiedzi
      expect(response.body._id).toBeTruthy()
      expect(response.body.title).toBe(data.title)
      expect(response.body.content).toBe(data.content)
      // Sprawdzenie danych w bazie
      const post = await Post.findOne({ _id: response.body._id })
      expect(post).toBeTruthy()
      expect(post.title).toBe(data.title)
      expect(post.content).toBe(data.content)
    })
})

test("DELETE /api/posts/:id - usuwa post z bazy danych", async () => {
  // Dane do utworzenia posta
  const data = {
    title: "Post do usunięcia",
    content: "To jest treść posta do usunięcia",
  };

  // Tworzenie posta
  const createResponse = await supertest(app)
    .post("/api/posts")
    .send(data)
    .expect(200);

  const createdPostId = createResponse.body._id;

  // Usuwanie posta
  await supertest(app)
    .delete(`/api/posts/${createdPostId}`)
    .expect(200);

  // Sprawdzenie czy post został usunięty z bazy
  const deletedPost = await Post.findById(createdPostId);
  expect(deletedPost).toBeNull();
});
