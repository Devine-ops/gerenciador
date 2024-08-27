import Message from "../layout/Message.js"
import {useLocation} from "react-router-dom"

function Projects() {

    const location = useLocation()
    let message = ''
    if(location.state){
        message = location.state.message
    }

    return (
        <div>
            <h1>Projects</h1>
            {message && <Message msg={message} type="error" />}
        </div>
    );
  }
  
  export default Projects;