import React from "react";
import './homepage.component.scss'
import Directory from "../../components/directory/directory.component";
const HomePage = ({history}) => {
  console.log(history)
  return (
    <div className="homepage">
     <Directory/>
    </div>
  );  
}


export default HomePage;
