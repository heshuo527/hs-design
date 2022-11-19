import React, { useState } from 'react'
import SwitchXue from '.'

function demo() {

  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <SwitchXue
          checked={isChecked}
          onChange={(checked) => {
            setIsChecked(checked);
          }}
        />
      </header>
    </div>
  )
}

export default demo
