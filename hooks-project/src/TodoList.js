import React from 'react';
import Todo from "./Todo";
//Material UI
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";


export default function TodoList(props) {
	return (
		<Paper>
			<List>
				{props.todos.map(todo => (
				<>
						<Todo
							key={todo.id}
							id={todo.id}
							task={todo.task}
							completed={todo.completed}
							checkTodo={props.checkTodo}
							removeTodo={props.removeTodo}
							editTodo={props.editTodo}
						/>
					<Divider />
				</>
				))}
			</List>
		</Paper>
	)
}
