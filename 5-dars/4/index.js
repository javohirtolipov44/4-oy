import { EventEmitter } from "events";

const emitter = new EventEmitter();

emitter.on("xabar", (msg) => {
  console.log(msg);
});

emitter.emit("xabar", "Assalomu alaykum!");
emitter.emit("xabar", "Yangi xabar kelibdi!");
