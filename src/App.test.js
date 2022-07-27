import { render, screen } from '@testing-library/react';
import App from './App';
import TodoApp from './components/TodoApp';
import Form from './components/Form';
import OneTodo from './components/OneTodo';
import React from 'react';
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Register new todo/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders TodoApp', () => {
  render(<TodoApp />);
  const linkElement = screen.getByText(/Title/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Form', () => {
  render(<Form />);
  const linkElement = screen.getByText(/Description/i);
  expect(linkElement).toBeInTheDocument();
});

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test('renders OneTodo', () => {
  act(() => {
    render(<OneTodo todo={{ id: 1, title: "A title", description: "A description", completed: false }} />, container);
  });

  const linkElement = screen.getByText(/A title/i);
  expect(linkElement).toBeInTheDocument();

  const linkElement2 = screen.getByText(/A description/i);
  expect(linkElement2).toBeInTheDocument();
});

test('renders OneTodo with completed and remove button', () => {
  act(() => {
    render(<OneTodo todo={{ id: 1, title: "A title", description: "A description", completed: true }} />, container);
  });

  const linkElement = screen.getByText(/A title/i);
  expect(linkElement).toBeInTheDocument();

  const linkElement2 = screen.getByText(/A description/i);
  expect(linkElement2).toBeInTheDocument();

  const linkElement3 = screen.getByText(/Remove/i);
  expect(linkElement3).toBeInTheDocument();
});
