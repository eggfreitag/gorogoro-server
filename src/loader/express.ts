import express, { Express } from "express";

export default async (app: Express) => {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
};
