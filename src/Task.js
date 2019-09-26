import React from 'react';
import { connect } from 'react-redux';
import { add, edit, delet } from './actions/task.actions';


class Task extends React.Component {
    render() {
        return (
            <div className="card-list">
                {this.props.taskList.map((item, index) => (
                    <div className="card-container">
                        <div className="task-card">
                            <div>
                                <label>Title:</label>
                                {this.props.taskList[index]['title']}
                            </div>
                            <div>
                                <label>Description:</label>
                                {this.props.taskList[index]['desc']}
                            </div>
                            <div>
                                <label>Due Date:</label>
                                {this.props.taskList[index]['dueDate']}
                            </div>
                            <button className="remove-btn" onClick={() => this.props.delet(index)}> Delete</button>
                            <button className="edit-btn" onClick={() => this.props.edit(index)}> Edit</button>
                        </div>
                    </div>
                ))
                }
                <div className="card-container">
                    <div className="task-card">
                        <div>
                            <label>Title: <input type="text" className="add-input" /></label>
                        </div>
                        <div>
                            <label>Desc: <input type="text" className="add-input" /></label>
                        </div>
                        <div>
                            <label>Due : <input type="text" className="add-input" /></label>
                        </div>
                        <button className="add-btn" onClick={() => this.props.add({ title: 'Taask 222', desc: 'this is task 2', dueDate: '20/10/2016' })}>Add</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    add: (item) => dispatch(add(item)),
    edit: (item) => dispatch(edit),
    delet: (index) => dispatch(delet(index))
})


const mapStateToProps = (state) => {
    return {
        taskList: state.taskList
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Task);