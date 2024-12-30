import { EventEmitter } from "events";

const emitter = new EventEmitter();

emitter.on("salom", (msg) => {
  console.log(msg);
});

emitter.emit("salom", "Assalomu alaykum!");
