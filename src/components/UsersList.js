import React, { Component } from 'react'
import UserForm from './UserForm'

// redux
import { connect } from 'react-redux'
import * as actions from '../actions/userActions'
import { bindActionCreators } from 'redux'

 class UsersList extends Component {
   
    handleEdit = index => {
        this.props.updateUserIndex(index)
    }
    handleDel = index => {
        this.props.deleteUser(index)
    }

    render() {
        return (
            <div >
                <UserForm />
                
                <div style={{marginLeft:"40%" }}>
                <h3>List of Users</h3>
                <table >
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>User Email</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>                        
                    </thead>
                    <tbody>
                        {
                            this.props.list.map((item, index)=>{
                                return <tr key={index}>
                                    <td>{item.firstname}</td>
                                    <td>{item.email}</td>
                                    <td><button type="button" className="btn btn-success" onClick={()=>this.handleEdit(index)}>Edit</button></td>
                                    <td><button type="button" className="btn btn-danger" onClick={()=>this.handleDel(index)}>Del</button></td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
                </div>
                
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        list : state.list
    }
}
// for delete the data
const mapDispatchToProps = dispatch => {
    return bindActionCreators({    
        deleteUser : actions.Delete,        
        updateUserIndex : actions.UpdateIndex
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps  ) (UsersList)

