# Blitz Query  🚀

This project tackles the performance challenges of client-side search operations as datasets grow larger. It uses vanilla JavaScript and Web Workers for parallel processing, ensuring smooth and scalable search performance without compromising the user experience.

## Context

You know often time we face a problem that we want to build a search functionality for large dataset. But it is little difficult to build, even using the libraries like `fuse.js`.

We use various search algorithms, different hacky solutions but initially all performs well untill your data grows to a large extent. Then the performance of these solutions starts to become slow.

Now, in this case you are reluctant to not go for server side and build your search functionality from scratch. Well there could be many reasons to that. Such as, it can make UX bad. Also, building this from scratch in server side is hell lot of task. You might introduce some additional complexties to it.

Instead you seek the solution which can be implemented in a client side. It should be efficient enough to not block the main thread of javascript and at the same time maintain the good UX.

### So, what's the solution then? 🤷🏻‍♂️
## Approach

But, we can achieve this using vanilla javascript and using Web Worker in client side only. This project offers the search functionality for large dataset using web worker and dividing the data into different chunks based on the logical cores of a system. This approach allows for faster search performance without blocking the main thread and without compromising search capabilities.

### Installation Guide

Installation of this project is very easy.

1. Fork the repo.
  
2. Clone the project

```
https://github.com/<YOUR_USERNAME>/blitz-query.git
```
3. Run npm install

```
npm i
```
4. Run the project

```
npm start
```
