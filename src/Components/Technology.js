import { useState, React } from 'react'
import { motion } from 'framer-motion'

function Technology({ name, link, details }) {
  const [isOpen, setIsOpen] = useState(false)
  const renderUnopened = () => {
    return (
      <motion.div layout onClick={() => setIsOpen(!isOpen)} className='technologyCard'>
        <motion.img layout='position' className='technology' src={link} alt={name} />
        <p>{name}</p>
      </motion.div>
    )
  }
  const renderOpened = () => {
    return (
      <motion.div layout onClick={() => setIsOpen(!isOpen)} className='openTechnologyCard'>
        <motion.img layout='position' className='technology' src={link} alt={name} />
        <div>
        {renderListItems}
        </div>
      </motion.div>
    )
  }
  const renderListItems = details.map((detail) => {
    return(
      <p>{detail}</p>
    )
  })

  return (
    <div className='immediateparent'>
      {isOpen?renderOpened():renderUnopened()}
    </div>
  )
    // <motion.div layout onClick={() => setIsOpen(!isOpen)} className='technologyCard'>
    //   <motion.img className='technology' src={link} alt={name} />
    //   <motion.p>{name}</motion.p>
    //   {isOpen && (
    //     <motion.div className='expanded-tech'>
    //       <p>I learned how to do this shit ez</p>
    //     </motion.div>
    //   )}
    // </motion.div >
}

export default Technology