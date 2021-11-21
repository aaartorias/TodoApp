package com.todo.webservices.restfulwebservices;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

// we want spring to manage this class rather than creating instances ourselves
@Service
public class TodoHardCodedService {
	// static list of Todo objects
	private static List<Todo> todos = new ArrayList<>();
	private static int idCounter = 0;
	
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

	public Todo deleteById(Integer id) {
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

	private Todo findTodoById(Integer id) {
		for (Todo todo: todos) {
			if (todo.getId() == id) return todo;
		}
		return null;
	}

	
}
