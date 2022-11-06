import React from "react";
import Dialog from ".";


const Demo1 = () => {

  return (
    <Dialog title='标题' content={
      [
        <>
          <p>1. 内容是</p>
          <p>2. 内容是</p>
          <p>3. 内容是</p>
        </>
      ]
    } buttonName={['取消', '完成']}>
      Open Dialog
    </Dialog>
  )
}

export default Demo1
