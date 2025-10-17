
# Programación y Plataformas Web (PPW)

---

#  Práctica 1 – Explorando los Estándares Web con HTML, CSS y JavaScript

**Asignatura:** Programación y Plataformas Web

**Unidad:** 1.2 – Estándares Web 

**Estudiante:** Valeria Mantilla

**Repositorio:** https://github.com/Alanissette16/-icc-ppw-u1-mi_pagina_web.git

**Página desplegada (GitHub Pages):** https://alanissette16.github.io/-icc-ppw-u1-mi_pagina_web/ 

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
| `<aside>` | elemento de contenido secundario o complementario |  |

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
<link rel="stylesheet" href="style.css" />

```

**Antes de cerrar el `<body>` (para el JavaScript):**

```html
<script src="script.js"></script>

```

---

### 3. Estilos aplicados con CSS

* COMLETAR LA TABLA

| Elemento                    | Estilo implementado                                                                   | Descripción                             |
| --------------------------- | ------------------------------------------------------------------------------------- | --------------------------------------- |
| `body`                      | font-family: 'Times New Roman', 'Courier New'; background-color: #f8f9fa; color: #333;| Define la fuente general y el color de fondo del sitio.|
| `header`                    | background-color: #b956e7; color: white; text-align: center; padding: 1.5rem 0;| Aplica color de fondo, texto blanco y centrado al encabezado. |
| `table`                     | border-collapse: collapse; width: 50%; box-shadow: 0 0 8px rgba(0,0,0,0.1);           | Mejora la visualización de la tabla con bordes y sombra.|
| `section h2`                | color: #b30059; border-bottom: 2px solid #b30059;| Colorea los títulos de sección y agrega una línea inferior decorativa.  |
| `aside`                     | background-color: #fff0f5; border-left: 5px solid #b30059; font-size: 20px; | Resalta el bloque lateral con color rosado y borde izquierdo destacado.|
| `footer`                    | background-color: #b956e7; color: white; text-align: center; font-size: 22px; font-weight: bolder| Aplica fondo morado y texto grande, centrado y en negrita.|


**Ejemplo en el código:**

AGREGAR DOS EJEMPLOS DE SU CODIGO CSS

```css
header {
  background-color: #b956e7;
  color: white;
  text-align: center;
  padding: 1.5rem 0;
}

footer {
  background-color: #b956e7;
  color: white;
  text-align: center;
  padding: 2px; 
  margin-top: 2rem; 
  font-size: 22px;
  font-weight: bolder; /* Negrita */
}
```

---

###  4. Interactividad agregada con JavaScript

El archivo `script.js` incorpora dos acciones básicas:

1. ** Muestrar un mensaje de bienvenida al cargar la página **

   ```javascript
   window.addEventListener("load", function() {
  alert("¡Bienvenid@! A la página web de Valeria ;p ");
});
   ```

2. ** Cambiar el color del título al pasar el mouse por encima **

   ```javascript
  const titulo = document.getElementById("title");
if (titulo) {
  const originalColor = window.getComputedStyle(titulo).color;

  titulo.addEventListener("mouseover", () => {
    titulo.style.color = "cyan";
  });

  titulo.addEventListener("mouseout", () => {
    titulo.style.color = originalColor || "";
  });
}
   ```


## Capturas de pantalla del proyecto final

* Agregar su captura de pantalla del proyecto final funcionando en el navegador, de ambas versiones (sin y con CSS/JS)

<img width="480" height="642" alt="{1EB6889D-FE56-4654-8DA5-DA76F632D14C}" src="https://github.com/user-attachments/assets/9034ebde-12c4-48a0-a1fc-b049d702288e" />
<img width="966" height="636" alt="image" src="https://github.com/user-attachments/assets/71da0450-458e-45fb-b2a6-089eba39f127" />


