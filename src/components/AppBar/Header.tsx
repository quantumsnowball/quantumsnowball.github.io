import { CustomFC } from '../../types'
import { Link } from 'react-router-dom'
import MenuOpenIcon from '../../assets/menu.svg'
import MenuCloseIcon from '../../assets/cross.svg'
import SunIcon from '../../assets/sun.svg'
import MoonIcon from '../../assets/moon.svg'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { useDispatch } from 'react-redux'
import { layoutActions } from '../../redux/slices/layoutSlice'
import { themeActions } from '../../redux/slices/themeSlice'


const Header: CustomFC = ({ children }) => {
  const dispatch = useDispatch()
  const menu = useSelector((s: RootState) => s.layout.menu)
  const mode = useSelector((s: RootState) => s.theme.mode)

  const ctn = `
    self-stretch
    flex
    justify-between
  `
  const title = `
    text-2xl
    font-bold
    cursor-pointer
    hover:bg-gray-500
  `

  const handleClick = () => dispatch(layoutActions.toggleMenu())

  return (
    <div className={ctn}>
      <span className={title}>
        <Link to="/">Quantum Snowball</Link>
      </span>
      <button
        className='ml-3 h-8'
        onClick={() => dispatch(themeActions.toggleMode())}>
        {mode === 'light' ? <SunIcon className='h-full' /> : <MoonIcon className='h-full' />}
      </button>
      <div className='flex-grow md:hidden' />
      {children}
      <a href="#" className='md:hidden' onClick={handleClick}>
        {menu ? <MenuCloseIcon className='h-full' /> : <MenuOpenIcon className='h-full' />}
      </a>
    </div>
  )
}

export default Header
