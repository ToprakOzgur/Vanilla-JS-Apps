const http = new easyHTTP;

// Get Posts
http.get('https://jsonplaceholder.typicode.com/posts',
  function (err, posts) {
    err ? console.log(err) : console.log(posts);
  }
);

// Get Single Post
// http.get('https://jsonplaceholder.typicode.com/posts/1',
//   function (err, post) {
//     err ? console.log(err) : console.log(post);
//   }
// );

// Create Data
const data = {
  title: "Custom Post",
  body: "This is a custom post"
};

// Create Post
// http.post('https://jsonplaceholder.typicode.com/posts', data, function (err, post) {
//   err ? console.log(err) : console.log(post);
// });


// Update Post
// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function (err, post) {
//   err ? console.log(err) : console.log(post);
// });

// Delete Post
// http.delete('https://jsonplaceholder.typicode.com/posts/1',
//   function (err, reponse) {
//     err ? console.log(err) : console.log(reponse);
//   }
// );