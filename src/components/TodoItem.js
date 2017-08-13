'use strict';
import React from "react";

export default class TodoItem extends React.Component {
	handlerChange() {
		let isDone = !this.props.isDone;
		this.props.changeTodoState(this.props.index, isDone);
	}

	handlerMouseOver() {
		React.findDOMNode(this).style.background = '#eee';
		React.findDOMNode(this.refs.delButton).style.display = 'inline-block';
	}

	handlerMouseOut() {
		React.findDOMNode(this).style.background = '#fff';
		React.findDOMNode(this.refs.delButton).style.display = 'none';
	}

	handlerDelete() {
		this.props.deleteTodo(this.props.index);
	}

	render() {
		let className = this.props.isDone ? 'task-done' : '';
		return (
			<li onMouseOver={this.handlerMouseOver.bind(this)} onMouseOut={this.handlerMouseOut.bind(this)}>
				<label>
				<input type="checkbox" checked={this.props.isDone} onChange={this.handlerChange.bind(this)}/>
				<span className={className}>{this.props.text}</span>
				</label>
				<button ref="delButton" className="btn btn-danger" onClick={this.handlerDelete.bind(this)}>删除</button>
			</li>
		);
	}
}