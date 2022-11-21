import React from 'react'
import Dialog from '.'

function Demo2() {
  return (
    <>
      <Dialog onDialogSize='small' type='default'>
        small Dialog
      </Dialog>
      <Dialog onDialogSize='medium' type='danger'>
        medium Dialog
      </Dialog>
      <Dialog onDialogSize='large'>
        large Dialog
      </Dialog>
    </>
  )
}

export default Demo2
