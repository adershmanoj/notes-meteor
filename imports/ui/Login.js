import {Link} from 'react-router';
import React from 'react';
import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';

export class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            error: ''
        }
    }
    submitForm(e){
        e.preventDefault();
        let email=this.refs.email.value.trim();
        let password=this.refs.password.value.trim();
        this.props.loginWithPassword({email}, password, (err)=>{
            if(err)
                this.setState({error:err.reason})
            else
                this.setState({error:''})
        });
    }
    render(){
        return (
            <div className="boxed-view">
                <div className="boxed-view__box">
                    <h1>Login</h1>
                    {this.state.error ? <p>{this.state.error}</p>:undefined}
                    <form className='boxed-view__form' onSubmit={this.submitForm.bind(this)}>
                        <input name='email' ref='email' type='email' placeholder='Email'/>
                        <input name='password' ref='password' type='password' placeholder='Password'/>
                        <button className='button'>Login</button>
                    </form>
                    <Link to='/signup'>Don't Have an account? Signup Here</Link> 
                </div>
            </div>
        )   
    }
}
Login.propTypes = {
  loginWithPassword: React.PropTypes.func.isRequired
}
export default createContainer(()=>{
  return {
    loginWithPassword: Meteor.loginWithPassword
  };
}, Login);