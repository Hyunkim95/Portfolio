import _ from 'lodash';

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
        email: 'hkim@live.com.au',
        repos: data.public_repos,
        location: data.location
      }
    }
  }
}

export const githubRepoFormatter = (response) => {
  var data = response.data
  var array = data.map((repo) => {
    var description = repo.description
    if(description == null){
      description = ""
    }
      var match = description.match(/(https?:\/\/.*\.(?:png|jpg))/)
      var default_image = 'https://cdn0.iconfinder.com/data/icons/web-and-apps-develop/512/coding_php_code_html_programming_web_java_script_editor_website_development_css_build_program_flat_design_icon-512.png'
      if(match == null){
        match = default_image
      } else {
        if(match.constructor === Array){
          match = match[0]
        }
      }

        return {
          name: repo.name,
          description: description.replace(/(?:https?|ftp):\/\/[\n\S]+/g, ''),
          image: match,
          created_at: repo.created_at.substring(0,10),
          language: repo.language,
          url: repo.html_url
        }
      })
  var filtered = array.filter((repo) => {
    return repo.description.includes("portfolio")
  })
  return {
    repos: filtered
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

export const recentActivity = (response) => {
  var data = response.data
  var array = data.map((activity) => {
    return{
      meta: activity.type,
      image: activity.actor.avatar_url,
      summary: `${activity.actor.login} has made a ${activity.type} in ${activity.repo.name}`
    }
  })

  return { events: array.slice(0,9) }
}
