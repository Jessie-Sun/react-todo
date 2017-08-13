'use strict';
import React from "react";

export default class TodoFooter extends React.Component {
	handlerSelectAll(e) {
		this.props.changeTodoState(null, e.target.checked, true);
	}

	handlerDeleteDone() {
		this.props.clearDone();
	}

	render() {
		return (
			<div className="clearfix todo-footer">
				<input type="checkbox" className="fl" checked={this.props.isAllChecked} onChange={this.handlerSelectAll.bind(this)}/>
				<span className="fl">已完成{this.props.todoDoneCount}/全部{this.props.todoCount}</span>
				<button className="fr" onClick={this.handlerDeleteDone.bind(this)}>清除已完成的任务</button>
			</div>
		);
	}
}