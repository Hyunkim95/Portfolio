export const githubUserFormatter = (response) => {
  var data = response.data
  return {
    user: {
      name: data.name,
      image: data.avatar_url,
      url: data.url,
      bio: data.bio,
      info: {
        username: data.login,
        email: data.email,
        repos: data.public_repos,
        location: data.location
      }
    }
  }
}

export const githubRepoFormatter = (response) => {
  var data = response.data
  var array = data.map((repo) => {
        return {
          name: repo.name,
          description: repo.name,
          created_at: repo.created_at,
          language: repo.language
        }
      })
  return {
    repos: array
  }
}

export const findUniqueLanguages = (state) => {
  var count = {}
  state.forEach((repo) => {
    if(repo.language != null){
      count[repo.language] = Object.keys(repo.language).length
    }
  })
  return {
    languages: count
  }
}
