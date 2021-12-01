package com.todo.webservices.restfulwebservices.todo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

// we want spring to manage this class rather than creating instances ourselves
@Service
public class TodoHardCodedService {
	// static list of Todo objects
	private static List<Todo> todos = new ArrayList<>();
	private static long idCounter = 0;
	
	static {
		todos.add(new Todo(++idCounter, "JohnDoe", "Learn Java", new Date(), false));
		todos.add(new Todo(++idCounter, "JohnDoe", "Learn Spring", new Date(), false));
		todos.add(new Todo(++idCounter, "JohnDoe", "Learn React", new Date(), false));
		todos.add(new Todo(++idCounter, "JohnDoe", "Learn Cooking", new Date(), false));
		todos.add(new Todo(++idCounter, "JohnDoe", "Learn Chess", new Date(), false));
	}
	
	public List<Todo> findAll() {
		return todos;
	}

	public Todo deleteById(long id) {
		Todo todo = findTodoById(id);
		if (todo != null)  {
			if (deleteTodo(todo))
				return todo;			
		}
		return null;
	}

	private boolean deleteTodo(Todo todo) {
		return todos.remove(todo);
	}

	private Todo findTodoById(long id) {
		for (Todo todo: todos) {
			if (todo.getId() == id) return todo;
		}
		return null;
	}

	public Todo getTodoById(long id) {
		return findTodoById(id);
		
	}

	public Todo saveTodo(Todo todo) {
		if (todo.getId() == -1 || todo.getId() == 0) {
			todo.setId(++idCounter);
		} else {
			deleteById(todo.getId());
		}
		todos.add(todo);
		return todo;
	}

	
}
