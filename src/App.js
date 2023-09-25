import { useEffect } from "react";
import { receiveData } from "./action";
import { connect, useDispatch, useSelector } from "react-redux";

function App(props) {

  // console.log(data)
  // const dispatch = useDispatch();
  
  useEffect( () => {
    makeRequest() 
  }, []);
  
  // const data = useSelector(state => state.userData)
  // console.log(data)

  async function makeRequest() {
    try {
      // const response = await fetch("https://bds.kosmc.ai/linkInBio/content/testt")
      const response = await fetch("https://bds.kosmc.ai/linkInBio/content/jn2002rohit")
      if (!response.ok) {
        throw new Error(`Status: ${response.status} Status Text: ${response.statusText}`)
      }
      const userData = await response.json();
      // dispatch(save(userData));
      props.save(userData)
      // console.log(`useEffect ${userData}`) 
    }
    catch (err) {
      console.log(err)
    }
  }

  console.log(props.userDataRedux)

  return (
    <div>Data Fetch</div>
  );
}

const mapStateToProps = (state) => ({
  userDataRedux: state.userData
})

const mapDispatchToProps = {
  save: receiveData
}

export default  connect(mapStateToProps, mapDispatchToProps)(App);