import { Component, h } from '@stencil/core';

const contact = {
  photo: '', name: 'anil', email: 'anil@gmail.comn', phone: 9090909090
}
@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  render() {
    return (
      <table>
        <thead>
          <th>Image</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </thead>
        <tbody>
          <sample-comp Contact={contact}></sample-comp>
        </tbody>
      </table>
    )
  }
}
