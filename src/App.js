import { useEffect } from "react";
import { receiveData } from "./action";
import { connect, useDispatch, useSelector } from "react-redux";

import Form from "./Form/Form";

function App(props) {

  const formData = useSelector(state => state.formData);
  console.log(formData)

  useEffect(() => {
    makeRequest()
  }, []);

  async function makeRequest() {
    try {
      // const response = await fetch("https://bds.kosmc.ai/linkInBio/content/testt")
      const response = await fetch("https://bds.kosmc.ai/linkInBio/content/jn2002rohit")
      if (!response.ok) {
        throw new Error(`Status: ${response.status} Status Text: ${response.statusText}`)
      }
      const userData = await response.json();
      props.receiveData(userData)
    }
    catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <div>Data Fetch</div>
      <Form />
      <div>
        Saved Data:
        <p>First Name : {props.formData.firstName}</p>
        <p>Last Name : {props.formData.lastName}</p>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  userData: state.userData,
  formData: state.formData
})

const mapDispatchToProps = {
  receiveData: receiveData
}

export default connect(mapStateToProps, mapDispatchToProps)(App);