# Heavy Duty — Guía Técnica & Tracker de Entrenamiento

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/Estado-Producción-10b981?style=for-the-badge)

Aplicación web interactiva y guía técnica ligera desarrollada para llevar el seguimiento estricto del sistema de entrenamiento de Alta Intensidad **Heavy Duty** (creado por *Mike Mentzer*). 

Diseñada bajo arquitectura cliente (SPA estática) sin dependencias externas, enfocada en rendimiento, persistencia local segura y experiencia de usuario intuitiva tanto en escritorio como en dispositivos móviles.

---

## 📋 Tabla de Contenidos

1. [Principios del Sistema Heavy Duty](#-principios-del-sistema-heavy-duty)
2. [Estructura del Programa (3 Días)](#-estructura-del-programa-3-días)
3. [Características Técnicas](#-características-técnicas)
4. [Arquitectura de Datos y Persistencia](#-arquitectura-de-datos-y-persistencia)
5. [Instalación y Despliegue](#-instalación-y-despliegue)
6. [Tecnologías Utilizadas](#-tecnologías-utilizadas)

---

## 🏋️ Principios del Sistema Heavy Duty

El sistema **Heavy Duty** prioriza la **intensidad máxima**, la **brevedad** y el **descanso prolongado** sobre el volumen de entrenamiento tradicional:

- **1 Serie al Fallo Real**: Una sola serie de trabajo por ejercicio llevada al fallo muscular positivo absoluto.
- **Pre-Agotamiento**: Combinación consecutiva de un ejercicio de aislamiento inmediatamente seguido de un ejercicio compuesto (sin descanso intermedio) para agotar el músculo objetivo sin que los músculos auxiliares limiten el movimiento.
- **Cadencia Controlada**: Fase negativa (excéntrica) de 3 a 4 segundos de duración para favorecer la hipertrofia y el fortalecimiento de tendones y ligamentos.
- **Isometría al Fallo**: Mantenimiento de la contracción máxima en la última repetición (10–15 segundos) para agotamiento neuromuscular total.
- **Recuperación Estricta**: Mínimo de 48 a 72 horas de descanso absoluto entre sesiones.

---

## 📅 Estructura del Programa (3 Días)

| Día | Enfoque | Ejercicios Destacados |
| :--- | :--- | :--- |
| **Día 1** | **Pecho / Espalda** | Pre-agotamiento: Aperturas + Press de Banca.<br>Dominadas/Jalón al pecho + Remo en máquina con isometría final. |
| **Día 2** | **Pierna** | Pre-agotamiento: Extensiones de cuádriceps + Sentadilla/Prensa.<br>Peso muerto rumano + Elevación de talones isométrica. |
| **Día 3** | **Hombro / Brazos** | Pre-agotamiento: Elevaciones laterales + Press Militar.<br>Curl de bíceps, Extensión de tríceps + Rotaciones de manguito rotador. |

---

## 🛠️ Características Técnicas

- **Cálculo de Recuperación Inteligente**: Algoritmo en tiempo real que evalúa la fecha ISO de la última sesión completada para indicar si el usuario debe continuar descansando o si se encuentra en ventana óptima de entrenamiento.
- **Barras de Progreso Dinámicas**: Renderizado responsive del porcentaje de finalización de cada sesión de entrenamiento (`0%` a `100%`).
- **Acordeones Flexibles con Animación Fluida**: Interfaz plegable basada en propiedades CSS `cubic-bezier` para evitar truncamientos de texto en pantallas pequeñas.
- **Interfaz Accesible (ARIA)**: Soporte para navegación con teclado y lectores de pantalla (`role="tab"`, `aria-selected`, `aria-expanded`).
- **Resets Granulares**: Posibilidad de reiniciar el progreso individual de un día sin afectar el historial general.

---

## 💾 Arquitectura de Datos y Persistencia

Toda la información se persiste localmente a través de la API estándar de **HTML5 LocalStorage** sin necesidad de base de datos o backend centralizado.

### Esquema de Almacenamiento

```json
// Clave: 'heavy-duty-checked-exercises'
{
  "1": true,
  "2": true,
  "3": false
}

// Clave: 'heavy-duty-last-day-log'
{
  "1": "2026-08-13",
  "2": "2026-08-10"
}
```

- `heavy-duty-checked-exercises`: Mapea el identificador único del ejercicio con su estado de completado (`boolean`).
- `heavy-duty-last-day-log`: Mapea el ID del día completado con el sello temporal en formato ISO (`YYYY-MM-DD`).

---

## 🚀 Instalación y Despliegue

Al ser un proyecto estático independiente (*Zero-dependency*), no requiere procesos de compilación o instalación de paquetes de Node.js.

### Opción A: Uso Local Directo
1. Clona el repositorio:
   ```bash
   git clone https://github.com/GI-R0/MIKE.git
   ```
2. Abre el archivo `index.html` en cualquier navegador web moderno (Chrome, Firefox, Safari, Edge).

### Opción B: Despliegue en GitHub Pages
1. Ve a los **Settings** de tu repositorio en GitHub.
2. Navega a la sección **Pages**.
3. Selecciona la rama `main` y la carpeta `/ (root)`.
4. Guarda los cambios. Tu guía estará en línea públicamente en minutos.

---

## 🎨 Tecnologías Utilizadas

- **HTML5 Semantic Structure**: Elementos HTML5 semánticos (`<header>`, `<main>`, `<section>`, `role="tab"`).
- **CSS3 Vanilla**: Variables CSS (`:root`), Flexbox, Grid, Glassmorphism (`backdrop-filter`) y transiciones de alto rendimiento.
- **Vanilla JavaScript (ES6+)**: Manipulación eficiente del DOM sin librerías pesadas, almacenamiento defensivo y manejo de eventos.
- **Google Fonts**: Tipografía *Plus Jakarta Sans* para legibilidad técnica superior.

---

<p center="true">Diseñado para la máxima eficiencia física y simplicidad tecnológica. ⚡</p>
