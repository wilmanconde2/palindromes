// src/App.jsx

import { useState } from 'react';
import Swal from 'sweetalert2';

const normalizeText = (value) => value.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();

const App = () => {
  const [text, setText] = useState('');

  const clearText = () => {
    setText('');
  };

  const onClick = () => {
    const trimmedText = text.trim();

    if (!trimmedText) {
      Swal.fire({
        title: 'Please input a value',
        icon: 'warning',
        confirmButtonText: 'OK',
      });
      return;
    }

    const clearedText = normalizeText(trimmedText);
    const reversedText = clearedText.split('').reverse().join('');
    const isPalindrome = clearedText === reversedText;

    Swal.fire({
      html: isPalindrome
        ? `<strong>${clearedText}</strong> es un palíndromo.<br><br><strong>${clearedText}</strong> is a palindrome.`
        : `<strong>${clearedText}</strong> no es un palíndromo.<br><br><strong>${clearedText}</strong> is not a palindrome.`,
      icon: isPalindrome ? 'success' : 'error',
      confirmButtonText: 'OK',
    }).then(() => {
      clearText();
    });

    console.log(`Texto limpiado: ${clearedText}`);
    console.log(`¿Es palíndromo?: ${isPalindrome}`);
  };

  return (
    <main className='app'>
      <h1 className='app-title'>
        Palíndromo <br /> Palindrome
      </h1>

      <section className='info-box'>
        <p>
          Un palíndromo es una palabra, número o frase que se lee igual de izquierda a derecha y de
          derecha a izquierda.
        </p>
        <p>A palindrome is a word, number, or phrase that reads the same forward and backward.</p>
      </section>

      <section className='instructions'>
        <p>Ingrese un texto para verificar si es un palíndromo.</p>
        <p>Enter a text to check if it is a palindrome.</p>
      </section>

      <input
        id='text-input'
        type='text'
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder='Ej: reconocer / racecar'
        aria-label='Palindrome input'
      />

      <div className='controls'>
        <button id='clear-btn' type='button' onClick={clearText} className='btn btn-primary'>
          Clear
        </button>

        <button id='check-btn' type='button' onClick={onClick} className='btn btn-primary'>
          Check
        </button>
      </div>

      <div id='result' aria-live='polite'></div>
    </main>
  );
};

export default App;
