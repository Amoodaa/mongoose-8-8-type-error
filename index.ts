import mongoose from "mongoose";

type Foo = {
  state: "on" | "off";
};

const fooSchema = new mongoose.Schema<Foo>(
  {
    state: {
      type: String,
      enum: ["on", "off"],
    },
  },
  { timestamps: true }
);

const fooModel = mongoose.model("foo", fooSchema);

async function createIfNotFound() {
  let foundFoo = await fooModel
    .findOne({
      state: "on",
    })
    .lean()
    .exec();

  if (!foundFoo) {
    const newFoo = {
      state: "on",
      // extra props but irrelevant
    };

    const createdFoo = await fooModel.create(newFoo);

    foundFoo = createdFoo.toObject(); // this errors on 8.8.3
  }
}

createIfNotFound();
