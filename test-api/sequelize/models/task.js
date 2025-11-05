"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Task extends Model {}

  Task.init(
    {
      title: DataTypes.STRING, // ⚠️ Sin validación ni longitud mínima
      description: DataTypes.STRING, // ⚠️ Acepta vacío o null
      completed: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Task",
      timestamps: false, // ⚠️ Bug: sin timestamps (difícil auditar)
    }
  );
  return Task;
};
