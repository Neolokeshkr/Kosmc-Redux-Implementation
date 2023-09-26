import { useSelector, connect } from 'react-redux';
import saveForm from './action';
import { useState } from 'react';

const Form = (props) => {

    // Used to fetch data from store in any component weather connected or not
    // const request = useSelector(state => state.userData.success)

    const [ localFormData, setLocalFormData ] = useState({});


    function handleChangeFormData(e) {
        setLocalFormData({
            ...localFormData,
            [e.target.name] : e.target.value
        })
    }

    function handleSaveForm(e) {
        e.preventDefault()
        props.saveForm(localFormData)
    }

    return (
        <>
            <form>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" name="firstName" onChange={handleChangeFormData}/>
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" name="lastName" onChange={handleChangeFormData}/>
                </div>
                <button onClick={handleSaveForm}>Save</button>
            </form>
        </>
    )
}

const mapStateToProps = (state) => ({
    formData: state.formData
})

const mapDispatchToProps = {
    saveForm :saveForm
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)