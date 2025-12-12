import { config } from "dotenv";
config();

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  const { pass } = req.body;

  if (pass === process.env.SECRET_PASSWORD) {
    return res.status(200).json({
      ok: true,
      clue: process.env.SECRET_CLUE
    });
  }

  return res.status(200).json({ ok: false });
}
