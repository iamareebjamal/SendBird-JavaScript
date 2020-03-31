'use strict';
import Element from './element.js';

class ChatBoard extends Element {
  constructor(parent) {
    super();
    this.setClass('chat-board');

    let top = new Element();
    top.setClass('top');
    top.val('Live Chat');
    parent.appendElement(this.appendElement(top));
  }
}

export { ChatBoard as default };
