import Swal from 'sweetalert2';

const App = () => {
  // Función para limpiar el contenido del campo de texto y del resultado
  function clearText() {
    document.getElementById('text-input').value = '';
    document.getElementById('result').innerHTML = '';
  }

  // Función que se ejecuta cuando el usuario hace clic en el botón "Check"
  function onClick() {
    const text = document.getElementById('text-input').value;

    // Validación: si está vacío, mostrar alerta y salir
    if (text.trim() === '') {
      Swal.fire({
        title: 'Please input a value',
        icon: 'warning',
        confirmButtonText: 'Continuar',
      });
      return;
    }

    // Eliminar caracteres no alfanuméricos y pasar a mayúsculas
    const clearedText = text.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
    const isPalindrome = clearedText === clearedText.split('').reverse().join('');

    // Mostrar resultado en SweetAlert
    Swal.fire({
      title: isPalindrome
        ? `${clearedText} es un palíndromo </br> </br> ${clearedText} is a palindrome`
        : `${clearedText} no es un palíndromo </br> </br> ${clearedText} is not a palindrome`,
      icon: isPalindrome ? 'success' : 'error',
      // html: true, // permite usar </br>
      confirmButtonText: 'OK',
    }).then(() => {
      // Limpiar campos después de cerrar la alerta
      document.getElementById('text-input').value = '';
      document.getElementById('result').innerHTML = '';
    });

    // También puedes mostrar en consola si lo necesitas
    console.log(`Texto limpiado: ${clearedText}`);
    console.log(`¿Es palíndromo?: ${isPalindrome}`);
  }

  return (
    <>
      <h1>
        Palíndromo <br /> Palindrome
      </h1>

      <p>Ingrese un texto para verificar si es un palíndromo.</p>
      <p>Enter a text to check if it is a palindrome.</p>

      <input id='text-input' />

      <div className='controls'>
        <button id='clear-btn' onClick={clearText} className='btn btn-primary'>
          Clear
        </button>
        <button id='check-btn' onClick={onClick} className='btn btn-primary'>
          Check
        </button>
      </div>

      <div id='result'></div>
    </>
  );
};

export default App;
