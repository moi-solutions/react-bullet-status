import React from 'react'
import Base, { Color } from '../src'

const App = () =>
  <div>
    <Base
      value={ 1 }
      color={ Color.open }
      label='Open'
    />
    <Base
      value={ 1 }
      color={ Color.waitingInventory }
      label='Waiting Inventory'
    />
    <Base
      value={ 1 }
      color={ Color.inProcess }
      label='In Process'
    />
    <Base
      value={ 1 }
      color={ Color.completed }
      label='Completed'
    />
    <Base
      value={ 1 }
      color={ Color.cancelled }
      label='Cancelled'
    />
    <Base
      value={ 1 }
      color={ Color.reverted }
      label='Reverted'
    />
  </div>


export default App
