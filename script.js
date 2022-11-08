var inputSearch = document.querySelector('#inputSearch')

var photo = document.querySelector('#photo')
var user = document.querySelector('#user')
var followers = document.querySelector('#followers')
var following = document.querySelector('#following')
var repositories = document.querySelector('#repositories')

var conteudo = document.querySelector('#conteudo')
var type_conteudo = document.querySelector('#type_conteudo')

search=()=>{
    fetch(`https://api.github.com/users/${inputSearch.value}`)
        .then(promess => promess.json())
        .then((data)=>{
            photo.src = data.avatar_url
            user.innerHTML = data.name
            followers.innerHTML = data.followers
            following.innerHTML = data.following
            repositories.innerHTML = data.public_repos
            console.log(data)
        })
}

getFollowers=()=>{
    
    fetch(`https://api.github.com/users/${inputSearch.value}/followers`)
        .then(promess=>promess.json())
        .then((data)=>{
            type_conteudo.innerHTML = 'Seguidores'
            conteudo.innerHTML = ''
            data.map((item)=>{
                conteudo.innerHTML += `
                <a href="https://github.com/${item.login}" target="_blank" rel="noopener noreferrer">
                    <img src="${item.avatar_url}" alt="img" class="profile_people">
                    <h5>${item.login}</h5>
                </a>
                `
            })
        })
}
getFollowing=()=>{
    fetch(`https://api.github.com/users/${inputSearch.value}/following`)
        .then(promess=>promess.json())
        .then((data)=>{
            type_conteudo.innerHTML = 'Seguindo'
            conteudo.innerHTML = ''
            data.map((item)=>{
                conteudo.innerHTML +=`
                <a href="https://github.com/${item.login}" target="_blank" rel="noopener noreferrer">
                    <img src="${item.avatar_url}" alt="img" class="profile_people">
                    <h5>${item.login}</h5>
                </a>
                `
            })
        })
}
getRepositories=()=>{
    fetch(`https://api.github.com/users/${inputSearch.value}/repos`)
    .then(promess=>promess.json())
    .then((data)=>{
        type_conteudo.innerHTML = 'Repositórios'
        conteudo.innerHTML = ''
        data.map((item)=>{
            conteudo.innerHTML += `
            <a href="https://github.com/${inputSearch.value}/${item.name}" target="_blank" rel="noopener noreferrer">
                <img src="./img/github.svg" alt="img" class="profile_people">
                <h5>${item.name}</h5>
            </a>
            `
        })
    })
}