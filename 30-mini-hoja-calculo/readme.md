# 🧮 #30 — Mini Hoja de Cálculo

Una hoja de cálculo interactiva construida con JavaScript, HTML y CSS.

## ✨ Funcionalidades

- **Grid editable** de 10 filas × 5 columnas (A–E)
- **Barra de fórmulas** para introducir valores y expresiones
- **Soporte de fórmulas**:
  - Operaciones aritméticas: `=A1+B1*2`
  - Función `=SUM(A1:A5)` para sumar rangos
- **Navegación por teclado**:
  - `↑ ↓ ← →` mover celda activa
  - `Enter` editar / confirmar
  - `Tab` siguiente columna
  - `Esc` cancelar edición
  - `Delete` borrar contenido
  - `Shift+Enter` / `Shift+Tab` dirección inversa
- **Actualización en vivo**: las celdas con fórmulas se recalculan automáticamente

## 🎨 Estilo

Diseño inspirado en hojas de cálculo reales con la estética *pixel art* del proyecto:

- Columnas coloreadas con la paleta del proyecto (rosa, menta, lavanda, amarillo, celeste)
- Bordes oscuros y sombras características
- Celda activa resaltada con borde rosa

## 🧠 Cómo usar

1. Haz clic en una celda para seleccionarla
2. Escribe directamente o usa la barra de fórmulas arriba del grid
3. Pulsa `Enter` para confirmar el valor
4. Para fórmulas, empieza con `=` (ej: `=A1+B1`, `=SUM(A1:A5)`)
5. Navega con las flechas del teclado o con `Tab`
