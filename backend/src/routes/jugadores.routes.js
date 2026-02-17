const express = require("express");
const router = express.Router();
const { getConnection } = require("../db");
router.get("/", async (req, res) => {
  let conn;

  try {
     conn = await getConnection();
     const result = await conn.execute(`
      SELECT 
        COD          AS "cod",
        NOMBRE      AS "nombre",
        POSICION    AS "posicion",
        DORSAL      AS "dorsal",
        GOLES       AS "goles",
        ASISTENCIAS AS "asistencias",
        PARADAS     AS "paradas",
        PORTERIASACERO AS "porteriasAcero",
        FOTO       AS "foto"
        FROM JUGADORES ORDER BY POSICION, DORSAL
    `);

    res.json(result.rows);

  } catch (e) {
    
    res.status(500).json({
      error: "Error listando productos",
      details: e.message
    });

  } finally {
   
    if (conn) await conn.close();
  }
});

router.get("/posicion/:posicion", async (req, res) => {

  let conn;

  try {

    conn = await getConnection();

    const posicion = req.params.posicion;
    const result = await conn.execute(`
     SELECT 
        COD          AS "cod",
        NOMBRE      AS "nombre",
        POSICION    AS "posicion",
        DORSAL      AS "dorsal",
        GOLES       AS "goles",
        ASISTENCIAS AS "asistencias",
        PARADAS     AS "paradas",
        PORTERIASACERO AS "porteriasAcero",
        FOTO       AS "foto"
        FROM JUGADORES WHERE POSICION = :posicion ORDER BY DORSAL
      `, { posicion }
    );

    res.json(result.rows);

  } catch (e) {
    res.status(500).json({
      error: "Error listando categorías",
      details: e.message
    });

  } finally {
    if (conn) await conn.close();
  }
});

router.get("/nombre/:nombre", async (req, res) => {

  let conn;

  try {
    conn = await getConnection();
    const nombre = req.params.nombre;
    const result = await conn.execute(
      `
      SELECT 
        COD          AS "cod",
        NOMBRE      AS "nombre",
        POSICION    AS "posicion",
        DORSAL      AS "dorsal",
        GOLES       AS "goles",
        ASISTENCIAS AS "asistencias",
        PARADAS     AS "paradas",
        PORTERIASACERO AS "porteriasAcero",
        FOTO       AS "foto"
        FROM JUGADORES WHERE nombre = :nombre ORDER BY DORSAL
      `,
      { nombre }
    );

     res.json(result.rows);

  } catch (e) {
    res.status(500).json({
      error: "Error filtrando por categoría",
      details: e.message
    });

  } finally {

    if (conn) await conn.close();
  }
});

module.exports = router;