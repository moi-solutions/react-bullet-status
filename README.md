# react-bullet-status

Component to show quantity and states with a color circle.

![Example](https://i.imgur.com/lt6GZkE.png)

### Install

    $ yarn install react-bullet-status

### Example

    import React from 'react'
    import Base, { Color } from 'react-bullet-status'

    const App = () =>
      <Base
        value={ 1 }
        color={ Color.open }
        label='Open'
      />

    export default App

### List of colors

* open
* waitingInventory
* inProcess
* completed
* reverted
* reverted

### Value

Numeric value.

### Color

Use list of colors or set hexadecimal color.

### Label

Text label.
