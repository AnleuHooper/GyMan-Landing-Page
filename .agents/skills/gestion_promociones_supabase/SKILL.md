---
name: gestion-promociones-supabase
description: "Reglas para crear, modificar o eliminar promociones y membresías usando Supabase en lugar de hardcodear en el frontend."
---

# Gestión de Promociones y Membresías mediante Supabase

Esta skill define la regla arquitectónica obligatoria para la gestión de promociones en el ecosistema GyMan (Landing Page y Agenda CRM).

## El Problema del Hardcoding
Anteriormente, las promociones (como la promoción de Julio) se escribían directamente en el código de la Landing Page (ej. `Hero.tsx`). Esto provocaba que el Dashboard VIP del CRM no se enterara de los cambios a menos que se duplicara la lógica.

## La Regla Inquebrantable
**NUNCA** debes hardcodear precios, títulos de promociones o condiciones de venta directamente en los componentes de React de la Landing Page (como `Hero.tsx` o `Pricing.tsx`). 

Cada vez que el usuario pida agregar, modificar o eliminar una promoción:
1. **Actualiza la tabla `branch_memberships` en Supabase:** Debes insertar o modificar registros en la tabla `branch_memberships` para cada sucursal que participe en la promoción. 
   - El campo `name` debe contener el nombre de la promoción (ej. "Promoción de Julio").
   - El campo `price` debe tener el precio específico para esa sucursal (soporte para excepciones).
   - Usa `is_active = true` o `false` para habilitar/deshabilitar la promoción.
2. **La Landing Page leerá de Supabase:** Los componentes de la Landing Page que muestran promociones (como el `Hero.tsx`) están programados para consultar dinámicamente esta tabla en Supabase y renderizar la información, buscando palabras clave o los registros con el precio promocional más bajo o activo.
3. **El CRM leerá de Supabase:** Al insertar en `branch_memberships`, automáticamente el Dashboard VIP del CRM ("GyMan Agenda") mostrará esa promoción en el menú desplegable de resultados VIP, garantizando perfecta sincronización sin tocar el CRM.

## Protocolo de Ejecución
Cuando se te pida lanzar una promoción:
1. Identifica las sucursales involucradas y sus precios.
2. Crea un script en Node (usando `@supabase/supabase-js`) para inyectar/actualizar las filas correspondientes en la tabla `branch_memberships`.
3. Ejecuta el script.
4. Verifica que la Landing Page muestre el nuevo precio correctamente.
