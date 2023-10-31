// figure out how to get each repo list
//----Repo-link-list not showing in elements
//----

console.log("Hello");

const githubUrl = "https://api.github.com/users/";
let fullName = document.getElementById("full-name");
let userGitLink = document.getElementById("user-git-link");
let userName = document.getElementById("user-name");
let userLocation = document.getElementById("userLocation");
let userRepoListApi = "";
let repoLinksList = document.getElementById("repo-links-list");
let repoLink = document.createElement("li");

fetch(githubUrl + "vdleonard")
  .then((response) => {
    return response.json();
  })
  .then((parsedJasonResponce) => {
    fullName.innerText = parsedJasonResponce["name"];
    userGitLink.innerText = parsedJasonResponce["html_url"];
    userName.innerText = parsedJasonResponce["login"];
    userLocation = parsedJasonResponce["location"];
    userRepoListApi = parsedJasonResponce["repos_url"];

    return fetch(userRepoListApi)
      .then((apiResponse) => {
        return apiResponse.json();
      })
      .then((parsedApiRepo) => {
        repoLink.classList.add("repo-link");
        repoLink.innerText = parsedApiRepo["html_url"];
        repoLink.appendChild(repoLinksList);
        console.log(repoLink);
        console.log(parsedApiRepo);
      });
  });
