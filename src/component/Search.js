import React, { Component } from 'react';
import axios from "axios";
import {connect} from 'react-redux';
import {company_data} from './../Redux/Action';
import { Link} from 'react-router-dom';

class Search extends Component {
    constructor() {
        super();
        this.state = {
          posts: []
        };
      }

    componentDidMount() {
        axios
          .get(
            'https://reqres.in/api/users'
          )
          .then(res => {
              console.log(res);
              
              //console.log(typeof res.data);
            //   console.log(Object.keys(res.data))
            //   console.log(Object.keys(res.data["text"]))
            // const posts = res.data.map(obj => obj.data);
            //let data = JSON.parse(res.data)
            this.setState({ posts: res.data.data })
          })
          .catch(error => {
            console.log((error));
          });
      }
    render() {
        let my_data = this.state.posts
        console.log(my_data);
        this.props.form_data(my_data);
        console.log(this.state.posts);
        // var data = JSON.stringify(this.state.posts)
        // console.log(data);
        
        // let show_user = this.state.posts.map(e =>{
        //     return(
        //         <div>
        //             {e.first_name}  {e.last_name}
        //         </div>
        //     )
        // })
        
        return (
            <div>
            
                

                <Link to="/Home" class="btn btn-outline-danger mt-3">View user</Link>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        form_data:(data) => dispatch(company_data(data))
    }
}
export default connect(null, mapDispatchToProps)(Search) 
