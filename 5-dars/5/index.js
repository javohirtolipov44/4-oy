import { EventEmitter } from "events";

const emitter = new EventEmitter();

const listener = () => {
  console.log("Test event ishga tushdi!");
};

emitter.on("test", listener);

emitter.emit("test");

emitter.removeListener("test", listener);

emitter.emit("test");
