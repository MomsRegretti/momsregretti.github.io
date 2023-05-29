import { useState, React } from 'react'
import { motion } from 'framer-motion'

function Technology({ name, link }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
      <motion.div layout onClick={() => setIsOpen(!isOpen)} className='technologyCard'>
        <motion.img className='technology' src={link} alt={name} />
        <motion.p>{name}</motion.p>
        {isOpen && (
          <motion.div className='expanded-tech'>
            <p>I learned how to do this shit ez</p>
          </motion.div>
        )}
    </motion.div >
  )
}

export default Technology