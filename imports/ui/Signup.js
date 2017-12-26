import {Link} from 'react-router';
import React from 'react';
import {Accounts} from 'meteor/accounts-base';
import {createContainer} from 'meteor/react-meteor-data';

export class Signup extends React.Component{
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
        if(password.length<9)
            return this.setState({error:'Password must be more than 9 characters long'});
        this.props.createUser({email,password},(err)=>{
            if(err)
                this.setState({error:err.reason}); 
            else
                this.setState({error:''});
        })
    }
    render(){
        return (
            <div className='boxed-view'>
                <div className='boxed-view__box'>
                    <h1>Signup</h1>
                    {this.state.error ? <p>{this.state.error}</p>:undefined}
                    <form className='boxed-view__form' onSubmit={this.submitForm.bind(this)} noValidate>
                        <input name='email' ref='email' type='email' placeholder='Email'/>
                        <input name='password' ref='password' type='password' placeholder='Password'/>
                        <button className='button'>Create Account</button>
                    </form>
                    <Link to='/'>Already have an account?</Link>
                </div>
            </div>
        )
    }
}

Signup.propTypes = {
  createUser: React.PropTypes.func.isRequired
}

export default createContainer(() => {
  return {
    createUser: Accounts.createUser
  }
}, Signup);