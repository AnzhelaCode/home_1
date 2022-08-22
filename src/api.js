import axios from 'axios';

const id = 'YOUR_CLIENT_ID';
const sec = 'YOUR_SECRET_ID';
const params = '?client_id=' + id + '?client_secret=' + sec;

function handleError(error) {
    console.warn(error);
    return null;
}

function getProfile(username) {
    return axios.get('https://api.github.com/users/' + username + params)
        .then(function (user) {
            return user.data;
        })
        .catch(handleError)
}

function getRepos(username) {
    return axios.get('https://api.github.com/users/' + username + '/repos' + params + '&per_page=100')
        .then(function (repos) {
            return repos.data;
        })
        .catch(handleError)
}

function getStarCount(repos) {
    return repos.reduce(function (count, repo) {
        return count + repo.stargazers_count;
    }, 0)
}

function calculateScore(profile, repos) {
    const followers = profile.followers;
    const totalStars = getStarCount(repos);

    return (followers * 3) + totalStars;
}

function getUserData(player) {
    return axios.all([
        getProfile(player),
        getRepos(player)
    ]).then(([profile,repos])=> {

        return {
            profile: profile,
            score: calculateScore(profile, repos)
        }
    });
}

function sortPlayers(players) {
    return players.sort(function (a, b) {
        return b.score - a.score;
    });
}

export const battle = (players) =>{
    return axios.all(players.map(getUserData))
        .then(sortPlayers)
        .catch(handleError)
}
export const fetchPopularRepos = (language, sort)=>{

    const encodeURI = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=${sort}&order=desc&type=Repositories`);
    return axios.get(encodeURI)
        .then(function (response) {
            return response.data.items;
        })
}



