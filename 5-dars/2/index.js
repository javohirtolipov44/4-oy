import { EventEmitter } from "events";

const emitter = new EventEmitter();

let count = 0;

emitter.on("counter", () => {
  count++;
  console.log(`Hozirgi qiymat: ${count}`);
});

emitter.emit("counter");
emitter.emit("counter");
emitter.emit("counter");
