export const skills_obj = (skill) => {
  if(skill == null) return(
    {
      image: "",
      color: 'red'
    }
  )
  switch(skill.toLowerCase()){
    case "python":
      return(
        {
          image: require('../assets/images/python.png'),
          color: 'blue'
        }
      )
    break;
    case "javascript":
      return(
        {
           image: require('../assets/images/javascript.svg'),
           color: 'orange'
         }
      )
    break;
    case "html":
      return(
        {
           image: require('../assets/images/html.png'),
           color: 'yellow'
         }
      )
    break;
    case "css":
      return(
        {
           image: require('../assets/images/css.svg'),
           color: 'brown'
         }
      )
    break;
    case "ruby":
      return(
        {
           image: require('../assets/images/ruby.png'),
           color: 'green'
         }
      )
    break;
    default:
      return(
        {
          image: "",
          color: 'red'
        }
      )
  }
}
