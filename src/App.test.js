import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import ContactForm from "./components/ContactForm";

test("renders App without crashing", () => {
  render(<App />);
});

test('renders ContactForm.js without crashing', () => {
  render(<ContactForm />)
})

test('renders first name label on ContactForm', () => {
// arrange
const { getByText } = render(<ContactForm />)
// act
const contactLabel = getByText(/first name/i)
// assert
expect(contactLabel).toBeInTheDocument()
})


//placeholder text checkers
test('first name placeholder text says "First Name"', () => {
const { getByPlaceholderText } = render(<ContactForm/>)
const placeholder = getByPlaceholderText(/First Name/)
expect(placeholder).toBeInTheDocument()
})

test('last name placeholder text says "Last Name"', () => {
  const { getByPlaceholderText } = render(<ContactForm/>)
  const placeholder = getByPlaceholderText(/Last Name/)
  expect(placeholder).toBeInTheDocument()
  })
  
test('email placeholder text says "Email"', () => {
  const { getByPlaceholderText } = render(<ContactForm/>)
  const placeholder = getByPlaceholderText(/Email/)
  expect(placeholder).toBeInTheDocument()
  })

  test('message placeholder text says "Message"', () => {
    const { getByPlaceholderText } = render(<ContactForm/>)
    const placeholder = getByPlaceholderText(/Message/)
    expect(placeholder).toBeInTheDocument()
    })
      

test('max length should be 20', () => {
  
})
      