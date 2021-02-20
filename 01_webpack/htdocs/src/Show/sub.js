export default class Controller {
  constructor() {
    this.setEvents();
  }

  show() {
    console.log("showだよ");
  }

  setEvents() {
    window.addEventListener("mousemove", () => {
      this.show();
    });
  }
}
