
const tareaInput = document.getElementById('tareaInput');
const agregarTareaBtn = document.getElementById('agregarTareaBtn');
const listaDeTareas = document.getElementById('listaDeTareas');

// Función principal que agregara las tareas
function agregarTarea() {
    const textoTarea = tareaInput.value.trim();
    
    // aca realizo la verificacion de que el cuadro de texto no esté vacío
    if (textoTarea === '') {
        alert('Debes de escribir una tarea antes agregar');
        return;
    }
    //creo el elemento de la lista y le agrego el texto del cuadro de texto
    const li = document.createElement('li');
    li.textContent = textoTarea;
    
    // Crero el boton eliminar y le agrego el texto que indica que es para eliminar la tarea
    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = 'Eliminar';
    btnEliminar.style.backgroundColor = 'red';
    
    // Agrego evento al boton para eliminar eliminar tarea
    btnEliminar.addEventListener('click', function() {
        li.remove();
    });
    
    // aca para marcar alguna tarea como completada
    li.addEventListener('click', function() {
        li.classList.toggle('tarea-completada');
    });
    
    // Agregar botón al li
    li.appendChild(btnEliminar);
    
    listaDeTareas.appendChild(li);
    //borro el cuadro de texto para que quede limpio para otro ingreso
    tareaInput.value = '';
}

agregarTareaBtn.addEventListener('click', agregarTarea);