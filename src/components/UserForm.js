import React, { Component } from 'react'
// import { Formik, Field, Form, ErrorMessage } from 'formik';
// import * as Yup from 'yup';

// const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
// const textRegExp = /^[aA-zZ\s]+$/

//for redux 
import { connect } from 'react-redux'
import * as actions from '../actions/userActions'
import { bindActionCreators } from 'redux'

 class UserForm extends Component {
    state={
        ...this.returnStateObj()
    }
    // spread operator will use method of returnStateObj()

    returnStateObj(){
        if (this.props.currentIndex === -1)
        return {
        firstname:'',
        lastname:'',
        phone:'',
        email:'',
        description:''
        }
        else{
            return this.props.list[this.props.currentIndex]
        }
    }

    // this will be invoked when there is change in state 
    componentDidUpdate(prevProps){
        // to check whether the current index or list is changed or not and if there is change in any one of them then we update them
        if(prevProps.currentIndex !== this.props.currentIndex || prevProps.list.length !== this.props.list.length)
            this.setState({...this.returnStateObj()})
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleValidation(){
        
        let formIsValid = true;

        if(!this.state.firstname || !this.state.lastname || !this.state.phone || !this.state.email || !this.state.description) {
            formIsValid = false
            alert('all fields are mandatory')
        }

        return formIsValid


    }

    handleSubmit = e => {
        e.preventDefault()

        if(this.handleValidation()){
            alert ("form submitted")
        
        if(this.props.currentIndex === -1)
            this.props.insertUser(this.state)
        else
            this.props.updateUser(this.state)
        } 
    }
    
    render() {
        return (
            <form className="text-center" onSubmit={this.handleSubmit}>
                <h2>User Registration Form</h2>
                <div className="form-group ">
                 
                 <input name="firstname" placeholder="First Name" value={this.state.firstname} onChange={this.handleInputChange} /><br/>
                </div>

                <div className="form-group">
                 
                <input name="lastname" placeholder="Last Name" value={this.state.lastname} onChange={this.handleInputChange} /><br/>
                </div>

                <div className="form-group">
    
                <input name="phone" placeholder="Phone" value={this.state.phone} onChange={this.handleInputChange} /><br/>
                </div>

                <div className="form-group">
                <input name="email" placeholder="Email" value={this.state.email} onChange={this.handleInputChange} /><br/>
                </div>

                <div className="form-group">
                
                <input name="description" placeholder="Description" value={this.state.description} onChange={this.handleInputChange} /><br/>     
                </div>           

                <input type="submit"/>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {
        list : state.list,
        currentIndex: state.currentIndex
    }
}
// for delete the data
const mapDispatchToProps = dispatch => {
    return bindActionCreators({    
        insertUser : actions.insert,
        updateUser : actions.update        
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps) (UserForm)