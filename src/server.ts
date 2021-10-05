import { PrismaClient } from "@prisma/client";
import express from "express";

const prisma = new PrismaClient();
const app = express();
app.use(express.json());

app.get("/api/v1/poche", async (req, res) => {
  const items = await prisma.item.findMany({});
  res.json({
    success: true,
    payload: items,
  });
});

app.post(`/api/v1/poche`, async (req, res) => {
  const result = await prisma.item.create({
    data: {
      ...req.body,
    },
  });
  res.json({
    success: true,
    payload: result,
  });
});

app.delete(`/api/v1/poche/:id`, async (req, res) => {
  const { id } = req.params;
  const item = await prisma.item.delete({
    where: { id: String(id) },
  });
  res.json({
    success: true,
    payload: item,
  });
});

app.listen(8080, () =>
  console.log("REST API server ready at: http://localhost:8080")
);
