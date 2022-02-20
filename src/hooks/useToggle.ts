import { useState } from 'react'

const useToggle = () => {
  const [open, setOpen] = useState(false)

  const handleOpen:any = () => setOpen(true)
  const handleClose:any = () => setOpen(false)
  const handleToggle:any = () => setOpen(!open)

  return {
    open,
    handleClose,
    handleOpen,
    handleToggle
  }
}

export default useToggle;
