# MIKE - Guía de Entrenamiento Heavy Duty (Mentzer / Arthur Jones)

## Qué es esta app

Aplicación web de una sola página (`guia_tecnica_heavy_duty.html`) que sirve como
guía de entrenamiento móvil, basada en el método Heavy Duty de Mike Mentzer
(alta intensidad, bajo volumen, series al fallo) y en las rutinas full-body
clásicas de Arthur Jones (inventor de las máquinas Nautilus).

Está pensada para verse en el navegador del móvil, sin backend ni build step:
todo el HTML, CSS y JS vive en un único archivo.

## Estructura actual

- **3 pestañas de rutina:**
  - Día 1 - Pecho / Espalda (4 ejercicios)
  - Día 2 - Pierna (4 ejercicios)
  - Día 3 - Hombro / Brazos (5 ejercicios)
- **Modelo de datos:** mapa `DAY_EXERCISES` que asocia cada día a sus ids de
ejercicio.
- **Seguimiento por ejercicio:** cada tarjeta permite marcar el ejercicio como
completado y muestra su rango de repeticiones, instrucciones y etiquetas.
- **Recordatorio de recuperación:** banner que calcula los días desde la última
sesión completada y respeta un descanso mínimo de 48 horas.
- **Persistencia:** usa `localStorage`, con manejo defensivo de errores, para
guardar el progreso y el registro de sesiones.

## Filosofía de entrenamiento

- **1 serie de trabajo al fallo por ejercicio**, con 1 serie de calentamiento
previa no registrada como serie de trabajo.
- **Volumen bajo, intensidad máxima:** no se añaden series extra por defecto.
- **Descanso mínimo de 48 horas entre sesiones.**
- **Cadencia controlada y técnica estricta**, especialmente en el trabajo
inspirado en Arthur Jones.

## Persistencia

La aplicación funciona fuera de Claude mediante la API estándar de
`localStorage`. Las claves actuales son:

- `heavy-duty-checked-exercises`: mapa de ids de ejercicios y su estado de
completado.
- `heavy-duty-last-day-log`: registro de la fecha de la última sesión por día.

El acceso al almacenamiento está protegido con `try/catch` para que la interfaz
siga cargando aunque el navegador bloquee el almacenamiento local.

## Limitaciones conocidas y mejoras pendientes

1. **Convertir en PWA instalable.** Añadir `manifest.json` y un service worker
básico para permitir "Añadir a pantalla de inicio" y funcionamiento offline.
2. **Gráfica de progresión de peso por ejercicio.** Incorporar un mini gráfico
de línea usando Canvas o una librería ligera sin build step.
3. **Editar y borrar registros.** Permitir corregir un registro erróneo o
eliminarlo desde el historial.
4. **Exportar e importar datos.** Añadir backup completo en JSON para facilitar
el cambio de dispositivo.
5. **Selector de unidades.** Permitir alternar entre kg y lb.
6. **Modo oscuro y claro.** Respetar `prefers-color-scheme` o añadir un toggle
manual.
7. **Refactor a componentes.** Separar datos, persistencia e interfaz si el
proyecto crece, manteniendo una versión estática sin build step.
8. **Validación de inputs.** Cuando se añadan registros de peso y repeticiones,
validar valores negativos, decimales y límites lógicos.
9. **Accesibilidad.** Revisar contraste, objetivos táctiles de al menos 44x44px
y soporte de lector de pantalla en controles interactivos.

## Instalación y uso

No requiere dependencias ni proceso de compilación.

1. Clona el repositorio:

   ```bash
   git clone https://github.com/GI-R0/MIKE.git
   ```

2. Abre `index.html` o `guia_tecnica_heavy_duty.html` en un navegador moderno.

También puede desplegarse directamente en GitHub Pages usando la rama `main` y
la carpeta raíz del repositorio.

## Archivos principales

- `index.html`: entrada recomendada para GitHub Pages.
- `guia_tecnica_heavy_duty.html`: guía técnica y tracker en un único archivo.
- `guia_tecnica_heavy_duty (1).html`: copia alternativa del documento.

## Funciones actuales

- **PWA instalable:** `manifest.json`, `service-worker.js` e `icon.svg` permiten
  instalar la app y consultar el shell básico sin conexión cuando se sirve por
  HTTPS o desde un servidor local.
- **Progresión visual:** cada ejercicio incluye un gráfico Canvas de peso frente
  a los registros guardados.
- **Historial editable:** cada registro de serie se puede editar o borrar.
- **Backup:** los botones de exportar e importar gestionan un JSON completo con
  progreso, sesiones, historial, preferencias y secuencia actual.
- **Unidades:** los pesos se guardan internamente en kg y se muestran en kg o lb.
- **Tema:** alternancia manual entre modo oscuro y claro.
- **Módulos estáticos:** los datos viven en `js/data.js` y el acceso al
  almacenamiento en `js/storage.js`, sin dependencias ni build step.
