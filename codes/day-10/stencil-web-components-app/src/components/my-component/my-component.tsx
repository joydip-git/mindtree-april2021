import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';

//component decorator
@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {

  //property decorator (@Prop())
  @Prop() first: string;
  @Prop() middle: string;
  @Prop() last: string;

  someData: string = 'Some data'
  names = ['anil', 'sunil']

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  connectedCallback() {

  }
  attributeChangedCallback(name, oldValue, newValue) {

  }
  disconnectedCallback() {

  }
  render() {
    console.log('my Component render');

    //Actual DOM (wil be displayed in the browser)
    // const helloDiv = document.createElement('div')
    // helloDiv.innerHTML = `Hello, World! I'm `

    // // const messageDiv = document.createElement('div')
    // // messageDiv.innerHTML = `${this.getText()} `

    // const rootDiv = document.createElement('div')
    // rootDiv.append(helloDiv, messageDiv)
    // return rootDiv


    //Virtual DOM-2
    // const helloStencilDiv: VNode = h('div', 'Hello everyone. Welcome to Stencil.js')
    // const messageStencilDiv: VNode = h('div', this.getText())
    // const rootStencilDiv: VNode = h('div', [helloStencilDiv, messageStencilDiv])
    // return rootStencilDiv;

    //Virtual DOM-1
    // const helloStencilDiv: VNode = h('div', 'Hello everyone. Welcome to Stencil.js')
    // // const messageStencilDiv: VNode = h('div', this.getText())
    // const rootStencilDiv: VNode = h('div', [helloStencilDiv, messageStencilDiv])
    // return rootStencilDiv;

    const element = (
      <div>
        <div>
          Hello everyone. Welcome to Stencil.js
         </div>
        <div>
          {this.someData}
          <br />
          {this.getText()}
        </div>
        <br />
        <div>
          <ul>
            {
              this.names.map(pname => {
                return <name-comp name={pname}></name-comp>
              })
            }
          </ul>
        </div>
      </div>
    )
    return element;
  }
}
