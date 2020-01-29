import React, { useState } from 'react';

const Browse: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <div onClick={() => {setOpen(true)}}>
      {open ? <h4>Hello</h4> : null}
    </div>
  )
}

export default Browse;