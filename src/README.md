# LearnStream UI

Proyecto desarrollado en React + Vite para implementar los patrones de diseño UI:

- CardSystem
- FilterBar

El sistema permite explorar conferencias técnicas mediante tarjetas dinámicas y filtros en tiempo real.

---

# Tecnologías Utilizadas

- React
- Vite
- JavaScript
- CSS3

---

# Funcionalidades

- Renderizado dinámico de tarjetas
- Búsqueda en tiempo real
- Filtros por área
- Filtros por formato
- Grid responsive
- Mensaje de “sin resultados”

---

# Historias de Usuario

## Historia de Usuario 1

Como estudiante de tecnología,  
quiero buscar conferencias por nombre mediante una barra de búsqueda,  
para encontrar rápidamente contenido relacionado con mis intereses académicos.

---

## Historia de Usuario 2

Como usuario de LearnStream,  
quiero filtrar las conferencias por área de conocimiento y formato,  
para visualizar únicamente el contenido que necesito.

---

## Historia de Usuario 3

Como usuario de la plataforma,  
quiero visualizar las conferencias organizadas en tarjetas dinámicas,  
para navegar el catálogo de manera clara, moderna y ordenada.

---

# Estructura del Proyecto

```bash
src/
 ├── components/
 │    ├── Card.jsx
 │    ├── FilterBar.jsx
 │
 ├── data/
 │    ├── videos.js
 │
 ├── App.jsx
 ├── main.jsx
 ├── styles.css