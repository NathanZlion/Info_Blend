import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { motion } from 'framer-motion'

export default function LoadingSpinner() {
  return (
    <motion.div
      className='w-min h-min'
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
    >
      <AiOutlineLoading3Quarters />
    </motion.div>
  )
}
