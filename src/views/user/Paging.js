import React from "react";
import Pagination from 'react-bootstrap/Pagination';

class Paging extends React.Component {
    state = {
        active: 1
    }
    handleOnclickPage = (number) => {
        this.setState({
            active: number
        })
        // if (event.target.number)

        this.props.filterEmail(null, null, number)
    }
    render() {
        // console.log(this.state)
        let { active } = this.state;
        let items = [];
        let numOfPage = Math.ceil(this.props.numOfUser / 3);
        for (let number = 1; number <= numOfPage; number++) {
            items.push(
                <Pagination.Item key={number} active={number === active} onClick={() => this.handleOnclickPage(number)}>
                    {number}
                </Pagination.Item>,
            );
        }
        return (
            <div>
                <Pagination>{items}</Pagination>
            </div>
        )
    }
}
export default Paging;