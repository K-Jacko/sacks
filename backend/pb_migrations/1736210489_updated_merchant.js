/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_887455224")

  // update field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "number2371612931",
    "max": 99999,
    "min": 1,
    "name": "gold_value",
    "onlyInt": false,
    "presentable": false,
    "required": true,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_887455224")

  // update field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "number2371612931",
    "max": 99999,
    "min": 1,
    "name": "gold_value",
    "onlyInt": true,
    "presentable": false,
    "required": true,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
})
