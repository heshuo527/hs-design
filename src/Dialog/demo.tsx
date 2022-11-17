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
    } cancelText='取消' onMask={() => console.log(222)} onText='确认' okType="primary" onConfirm={() => console.log(111)}>
      Open Dialog
    </Dialog>
  )
}

export default Demo1
