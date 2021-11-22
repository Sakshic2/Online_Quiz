import { Injectable } from '@angular/core';
import { Quiz } from './quiz.model';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  quizzes: Quiz[] = [
    {
      question: 'Which type of JavaScript language is ',
      answer: [
        { option: 'Object-Based ', correct: true },
        { option: 'Object-Oriented ', correct: false },
        { option: 'Assembly-language ', correct: false },
        { option: 'High-level ', correct: false },
      ],
    },
    {
      question:
        'Which one of the following also known as Conditional Expression ',
      answer: [
        { option: 'immediate if ', correct: true },
        { option: 'If-then-else statement ', correct: false },
        { option: 'Switch statement ', correct: false },
        { option: 'Alternative to if-else ', correct: false },
      ],
    },
    {
      question: 'In JavaScript, what is a block of statement? ',
      answer: [
        {
          option:
            'block that combines a number of statements into a single compound statement ',
          correct: true,
        },
        { option: 'Conditional block ', correct: false },
        {
          option: 'both conditional block and a single statement ',
          correct: false,
        },
        { option: 'block that contains a single statement ', correct: false },
      ],
    },
    {
      question:
        'When interpreter encounters an empty statements, what it will do ',
      answer: [
        { option: 'Shows a warning ', correct: false },
        { option: 'Prompts to complete the statement ', correct: false },
        { option: 'Throws an error ', correct: false },
        { option: 'Ignores the statements ', correct: true },
      ],
    },
    {
      question: 'The "function" and " var" are known as ',
      answer: [
        { option: 'Data types ', correct: false },
        { option: 'Declaration statements ', correct: true },
        { option: 'Keywords ', correct: false },
        { option: 'Prototypes ', correct: false },
      ],
    },
    {
      question:
        'Which of the following variables takes precedence over the others if the names are the same? ',
      answer: [
        { option: 'The local element ', correct: true },
        { option: 'Global variable ', correct: false },
        { option: 'The two of the above ', correct: false },
        { option: 'None of the above ', correct: false },
      ],
    },
    {
      question:
        'Which one of the following is the correct way for calling the JavaScript code? ',
      answer: [
        { option: 'Function/Method ', correct: true },
        { option: 'RMI ', correct: false },
        { option: 'Triggering Event ', correct: false },
        { option: 'Preprocessor ', correct: false },
      ],
    },
    {
      question: 'Which of the following type of a variable is volatile? ',
      answer: [
        { option: 'Dynamic variable', correct: false },
        { option: 'Mutable variable ', correct: true },
        { option: 'Volatile variable ', correct: false },
        { option: 'Immutable variable ', correct: false },
      ],
    },
    {
      question:
        'Which of the following option is used as hexadecimal literal beginning? ',
      answer: [
        { option: '00 ', correct: false },
        { option: '0x ', correct: false },
        { option: '0X ', correct: false },
        { option: 'Both 0x and 0X ', correct: true },
      ],
    },
  ];

  constructor() {}
  getQuizzes() {
    return this.quizzes;
  }
}
