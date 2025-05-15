import express from "express";
import mocksRouter from "./routes/mocks.router";

const app = express();

const PORT = 3000;

app.use("/api/mocks", mocksRouter);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
