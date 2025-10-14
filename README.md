
# Programación y Plataformas Web (PPW)

---

#  Práctica 1 – Explorando los Estándares Web con HTML, CSS y JavaScript

**Asignatura:** Programación y Plataformas Web

**Unidad:** 1.2 – Estándares Web 

**Estudiante:** Valeria Mantilla

**Repositorio:** https://github.com/Alanissette16/-icc-ppw-u1-mi_pagina_web.git

**Página desplegada (GitHub Pages):** https://alanissette16.github.io/-icc-ppw-u1-mi_pagina_web/  Profe esta es la 1ra parte solo con html

---

## 🧱 Estructura HTML utilizada

| Componente | Descripción | Implementación |
|-------------|--------------|----------------|
| `<!DOCTYPE html>` | Declaración del documento HTML5 | Línea 1 |
| `<html lang="es">` | Idioma del documento | Español |
| `<header>` | Encabezado principal | Contiene `<h1>` y `<h2>` |
| `<section>` | Agrupa contenido principal | Dos secciones con `<h2>` |
| `<table>` | Muestra los elementos estudiados | Tres filas con `<th>` y `<td>` |
| `<footer>` | Pie de página | Nombre del estudiante y asignatura |

---

## 🧩 Nuevas etiquetas exploradas

| Etiqueta | Descripción | Implementación |
|-----------|--------------|----------------|
| `<figure>` | Contenedor para imagen con pie de foto | Logo HTML5 con `<figcaption>` |
| `<aside>` | Barra de progreso de una tarea |  |

**Código usado:**
```html
            <figure>
                <img src="https://www.w3.org/html/logo/downloads/HTML5_sticker.png" alt="HTML5 Logo" width="400">
                <figcaption>HTML5 Logo</figcaption>
            </figure>

            <aside>
                <p>Utilizacion de Etiqueta &lt;aside&gt; para Informacion complementaria</p>
                <a href="https://es.semrush.com/blog/lista-de-html-tags/">
                    Articulo 1</a>
                    <p>Hoja de Trucos HTML</p>
 
                <a href="https://www.youtube.com/watch?v=dP9JZoZw6HI">
                    Articulo 2</a>
                    <p>Video Etiqueta &lt;div&gt;</p>
                
            </aside>
```


---

#  Práctica 2 – Adición de CSS y JavaScript
---

### 1. Archivos agregados

| Archivo     | Descripción                                                                                         | Ubicación                 |
| ----------- | --------------------------------------------------------------------------------------------------- | ------------------------- |
| `style.css` | Contiene todos los estilos visuales del sitio (colores, tipografía, márgenes, botones, tabla, etc.) | Carpeta raíz del proyecto |
| `script.js` | Contiene las funciones y eventos JavaScript que agregan comportamiento dinámico                     | Carpeta raíz del proyecto |

Estructura final del proyecto:

```
icc-ppw-u1-mi_pagina_web/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

 * CAMBIAR SEGUN SU ESTRUCTURA

---

### 2. Implementación en HTML

Los nuevos archivos se enlazaron dentro del documento `index.html` de la siguiente forma:

**En el `<head>` (para el CSS):**

```html
COMLETAR
```

**Antes de cerrar el `<body>` (para el JavaScript):**

```html
COMLETAR
```

---

### 3. Estilos aplicados con CSS

* COMLETAR LA TABLA

| Elemento                    | Estilo implementado                                            | Descripción                             |
| --------------------------- | -------------------------------------------------------------- | --------------------------------------- |
| `body`                      |         |         |
| `header`                    | |
| `table`                     |                              |                  |
| `button`                    |                                   |   |
| `section`                   |                                        |          |
| `progress`                  | `accent-color: #007bff; width: 100%;`                          | Personalización de la barra de progreso |


**Ejemplo en el código:**

AGREGAR DOS EJEMPLOS DE SU CODIGO CSS

```css
button {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
```

---

###  4. Interactividad agregada con JavaScript

El archivo `script.js` incorpora dos acciones básicas:

1. **Agregar una nueva fila a la tabla al presionar el botón**

   ```javascript
   document.getElementById("agregarFila").addEventListener("click", () => {
     const tabla = document.querySelector("table");
     const nuevaFila = tabla.insertRow();
     nuevaFila.innerHTML = "<td>&lt;article&gt;</td><td>Sección independiente del contenido</td>";
   });
   ```

2. **Cambiar el color del título al pasar el mouse por encima**

   ```javascript
   const titulo = document.getElementById("titulo");
   titulo.addEventListener("mouseover", () => {
     titulo.style.color = "orange";
   });
   titulo.addEventListener("mouseout", () => {
     titulo.style.color = "white";
   });
   ```


## Capturas de pantalla del proyecto final

* Agregar su captura de pantalla del proyecto final funcionando en el navegador, de ambas versiones (sin y con CSS/JS)

<img width="480" height="642" alt="{1EB6889D-FE56-4654-8DA5-DA76F632D14C}" src="https://github.com/user-attachments/assets/9034ebde-12c4-48a0-a1fc-b049d702288e" />

