import React from 'react';
import Swal from 'sweetalert2';

const App = () => {
  // Función para limpiar el contenido del campo de texto y del resultado
  function clearText() {
    document.getElementById('text-input').value = '';
    document.getElementById('result').innerHTML = '';
  }

  // Función que se ejecuta cuando el usuario hace clic en el botón "Check" y obtenemos el valor ingresado en el campo de texto

  function onClick() {
    const text = document.getElementById('text-input').value;

    // Si el campo de texto está vacío, mostramos una alerta y detenemos la ejecución
    if (text === '') {
      Swal.fire({
        title: 'Please input a value',
        icon: 'warning',
        showCancelButton: false,
        confirmButtonText: 'Continuar',
      });
      return;
    }

    // Eliminamos caracteres no alfanuméricos y convertimos string a mayúsculas)
    let clearedText = text.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
    console.log(clearedText); // Mostramos el texto limpiado en la consola para depuración

    // Verificamos si el texto limpiado es un palíndromo
    let result = (document.getElementById('result').value =
      clearedText === clearedText.split('').reverse().join(''));
    console.log(result); // Mostramos el resultado (true o false) en la consola para depuración

    // Mostramos el resultado en la interfaz de usuario
    document.getElementById('result').innerHTML = result
      ? Swal.fire({
          title: `${clearedText} es un palíndromo </br> </br> ${clearedText} is a palindrome`,
          icon: 'success',
          draggable: true,
        })
      : Swal.fire({
          title: `${clearedText} no es un palíndromo </br> </br> ${clearedText} is not a palindrome `,
          icon: 'error',
          draggable: true,
        });
  }

  return (
    <>
      <h1>
        Palíndromo <br /> Palindrome
      </h1>

      <p>Ingrese un texto para verificar si es un palíndromo.</p>
      <p>Enter a text to check if it is a palindrome.</p>

      <div id='controls'>
        <button id='clear-btn' onClick={clearText} className='btn btn-primary'>
          Clear
        </button>
      </div>
      <input id='text-input' />
      <div>
        <button id='check-btn' onClick={onClick} className='btn btn-primary'>
          Check
        </button>
      </div>
      <div id='result'></div>
    </>
  );
};

export default App;
