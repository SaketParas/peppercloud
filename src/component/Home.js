import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            final_data: [],
            page: 1,
            per_page: 4,
            search: '',
        }
    }
    handleSearch = (e) => {
        this.setState({
            search: e.target.value
        })
    }

    handleDropDown = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name]: Number(e.target.value) })

    }

    handleButton = (pageNo) => {
        this.setState({ page: Number(pageNo) })
    }

    handleNext = (a) => {
        if (a <= this.state.final_data.length) {
            this.setState({
                page: a + 1
            })
        }
    }

    handlePrev = (a) => {
        if (a > 1) {
            this.setState({
                page: a - 1
            })
        }
    }
    handle_change = (e) => {
        this.setState({ page: Number(e) })
    }
    render() {
        console.log(this.props.add.comments.stored_data[1])
        //let my_data = this.props.add.comments.stored_data[1];
        // ******pagi***
        let all_user_fn = this.props.add.comments.stored_data[1]
        console.log(all_user_fn);
        
        this.state.final_data = all_user_fn
        let data = this.state.final_data
        let pageNo = this.state.page
        let per_page_no = this.state.per_page
        var total_page = Math.ceil(data.length / per_page_no)
        let start = (pageNo - 1) * per_page_no
        let end = start + per_page_no
        let pagination_data = data.slice(start, end)
        console.log(pagination_data);
        var button_number = []
        for (var i = 1; i <= total_page; i++) {
            button_number.push(i)
        }
        var button = button_number.map(a => {
            return (
                <button className="perpage" onClick={() => this.handle_change(a)}>{a}</button>
            )
        })
        // ******pagi***

        // ****************search**
        let user = pagination_data;
        let search = this.state.search.trim().toLowerCase();
        if (search.length > 0) {
            user = user.filter(function (user) {
                // return user.company.toLowerCase().match(search);
                if (user.first_name) {
                    return (user.first_name).toLowerCase().match(search);
                }
            })
        }
          // ****************search**
        var nextButton = () => {
            if (this.state.page !== this.state.final_data.length) {
                return (
                    <button className="nextCrt" onClick={() => this.handleNext(this.state.page)}> Next</button>
                )
            }
            else {
                return (
                    <button className="nextWrng" disabled>Next</button>
                )
            }
        }

        var prevButton = () => {
            if (this.state.page !== 1) {
                return (
                    <button className="prevCrt" onClick={() => this.handlePrev(this.state.page)}>Prev</button>
                )
            }
            else {
                return (
                    <button className="prevWrng" disabled>Prev</button>
                )
            }
        }
      
        let user1 = pagination_data;
        let show_user = user1.map(each_user => {
            return (
                <div>
                    {each_user.first_name} {each_user.last_name}
                </div>
            )
        })
        return (
            <div>
                <input className="" name="search" value={this.state.search} type="text" placeholder="Search By Name" onChange={this.handleSearch} />
                {show_user}
                <div className="my-5">  {prevButton()}{button} {nextButton()}
                    <select className="pageper" onChange={this.handleDropDown} name="per_page">
                        <option value="5" selected>Per Page</option>
                        <option value="5">5</option>
                        <option value="10"></option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                        <option value="50">50</option>
                    </select>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        add: state
    }
}
export default connect(mapStateToProps)(Home) 