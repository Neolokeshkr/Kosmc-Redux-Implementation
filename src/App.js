import { useEffect } from "react";
import { receiveData } from "./action";
import { connect, useDispatch, useSelector } from "react-redux";

function App({userDataRedux, receiveData}) {

  // console.log(data)
  
  useEffect( () => {
    makeRequest() 
  }, []);
  
  const data = useSelector(state => state.userData)
  console.log("selector"+ JSON.stringify(data)) 

  async function makeRequest() {
    try {
      // const response = await fetch("https://bds.kosmc.ai/linkInBio/content/testt")
      const response = await fetch("https://bds.kosmc.ai/linkInBio/content/jn2002rohit")
      if (!response.ok) {
        throw new Error(`Status: ${response.status} Status Text: ${response.statusText}`)
      }
      const userData = await response.json();
      receiveData(userData)  
      console.log("useEffect"+ JSON.stringify(userData)) 
    }
    catch (err) {
      console.log(err)
    }
  }

  return (
    <div>Image Application</div>
  );
}

const mapStateToProps = (state) => ({
  userDataRedux: state.userData
})

export default  connect(mapStateToProps, { receiveData })(App);