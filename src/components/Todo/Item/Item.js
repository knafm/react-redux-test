import React from 'react';
import './Item.css';
import edit from './edit.svg';
import del from './delete.svg';
import check from './check.svg';
import PropTypes from 'prop-types';

export default function Item(props) {


    const {header, body, isFinished} = props;
    const finished = (isFinished) ? <span>Finished!: </span> : null;
    return (

        <div className="todo-item">
            <div className="todo-item__title">
                <span>{finished} {header || "No title."} </span>
                <div className="list-menu">
                    <span onClick={props.handleFinished}><img src={check} alt={"finish"}/></span>
                    <span onClick={props.handleEdit}><img src={edit} alt={"edit"}/></span>
                    <span onClick={props.handleDelete}><img src={del} alt={"delete"}/></span>
                </div>
            </div>
            <div className="todo-item__body">
                <span>{body|| "No body."}</span>
            </div>
        </div>
    )
}

Item.propTypes = {
    header: PropTypes.string,
    body: PropTypes.string,
    isFinished: PropTypes.bool,
    handleDelete: PropTypes.func.isRequired,
    handleEdit: PropTypes.func.isRequired,
    handleFinished: PropTypes.func.isRequired,
};