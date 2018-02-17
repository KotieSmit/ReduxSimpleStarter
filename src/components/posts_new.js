import React, {Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost }  from '../actions';


class PostsNew extends Component {

    renderField(field) {
        const { meta : { touched, error } } = field;
        const className=`form-group ${touched && error ? 'has-danger' : ''}`;

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type={field.type}
                    {...field.input}
                />
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        )
    }


    onSubmit(values){
        
        this.props.createPost(values, ()=> {
            this.props.history.push('/');
        });
    }


    render (){
        const { handleSubmit} = this.props;    


        return(
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label="Title"
                    name="title"
                    type="text"
                    component={this.renderField}
                    />
                
                <Field
                    label="Categories"
                    name="categories"
                    type="text"
                    component={this.renderField}
                    />

                <Field
                    label="Content"
                    name="content"
                    type="text"
                    component={this.renderField}
                    />

                <button type="submit" className="btn btn-primary">Submit</button>
       
                <Link className='btn btn-danger' to='/posts'>
                    Cancel
                </Link>
            
            </form>
        )
    }

}

function validate(values){
    const errors ={};

    // Validate the inputs from 'values'
    // Proerties used must math the name used in render->name for that element

    if (!values.title) {errors.title = "Enter a title!";}
    if (!values.categories) {errors.categories = "Enter a category!";}
    if (!values.content) {errors.content = "Enter a content!";}

    // If errors is empty, form is ok and an be submitted
    // If errors has any properties set, form is invalid and can not be sumitted
    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(
    connect(null,{createPost})( PostsNew)
);