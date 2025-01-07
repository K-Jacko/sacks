/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2194024101")

  // update field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "number2371612931",
    "max": 99999,
    "min": -99999,
    "name": "gold_value",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2194024101")

  // update field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "number2371612931",
    "max": null,
    "min": null,
    "name": "gold_value",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
})
