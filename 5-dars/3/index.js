import { EventEmitter } from "events";

const emitter = new EventEmitter();

emitter.once("start", () => {
  console.log("Start event ishga tushdi");
});

emitter.emit("start");
emitter.emit("start");
