const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
const result = document.querySelector(".result");
//
//
const userName = document.querySelector("#username");
const yil = document.querySelector("#yil");
const userImg = document.querySelector(".img-user");
const link = document.querySelector(".link");
const repos = document.querySelector("#repos");
const followers = document.querySelector("#followers");
const following = document.querySelector("#following");
const counter = document.querySelector("#counter");
const messenger = document.querySelector("#messenger");
const url = document.querySelector("#url");
const building = document.querySelector("#building");
const bio = document.querySelector(".bio");

//
//

const getData = async (name) => {
  const req = await fetch(`https://api.github.com/users/${name}`);
  const data = await req.json();

  return data;
};

//
const upName = (name) => {
  userName.textContent = `${name.name}`;
  yil.textContent = `${name.created_at}`;
  userImg.src = `${name.avatar_url}`;
  link.textContent = `${name.email}`;
  repos.textContent = `${name.public_repos}`;
  followers.textContent = `${name.followers}`;
  following.textContent = `${name.following}`;
  counter.textContent = `${name.location}`;
  messenger.textContent = `${name.twitter_username}`;
  url.textContent = `${name.html_url}`;
  building.textContent = `${name.company}`;
  bio.textContent = `${name.bio}`;

  console.log(name);
};

const getName = async (username) => {
  const data = await getData(username);
  return data;
};

// getData().then((data) => console.log(data));
// console.log(res);

btn.addEventListener("click", (e) => {
  e.preventDefault;
  const userName = input.value.trim();
  // input.value.reset();
  if (input.value.trim(" ") == "") {
    result.classList.remove("hidden");
  } else {
    result.classList.add("hidden");
  }
  getName(userName).then((data) => upName(data));
  // console.log(userName);
});
