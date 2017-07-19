export const skills_obj = (skill) => {
  if(skill == null) return(
    {
      image: "",
      color: 'red',
      bg: '#DB2828'
    }
  )
  switch(skill.toLowerCase()){
    case "python":
      return(
        {
          image: require('../assets/images/python.png'),
          color: 'blue',
          bg: '#2185D0'
        }
      )
    break;
    case "javascript":
      return(
        {
           image: require('../assets/images/javascript.svg'),
           color: 'orange',
           bg: '#F2711C'
         }
      )
    break;
    case "html":
      return(
        {
           image: require('../assets/images/html.png'),
           color: 'yellow',
           bg: '#FBBD08'
         }
      )
    break;
    case "css":
      return(
        {
           image: require('../assets/images/css.svg'),
           color: 'brown',
           bg:"#A5673F"
         }
      )
    break;
    case "ruby":
      return(
        {
           image: require('../assets/images/ruby.png'),
           color: 'green',
           bg: "#21BA45"
         }
      )
    break;
    default:
      return(
        {
          image: "",
          color: 'red',
          bg: '#DB2828'
        }
      )
  }
}
