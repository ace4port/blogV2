import React, { useState } from 'react'
// import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Avatar from 'components/ui/Avatar'
import Dropdown from 'components/ui/Menu/Dropdown'
import { DropdownItem } from 'components/ui/Menu/Dropdown'

import { BsCaretDown, BsCaretUpFill } from 'react-icons/bs'
import { PlainButton } from 'components/ui/Buttons'
import { ImProfile } from 'react-icons/im'
import { MdOutlineLiveHelp, MdOutlinePassword } from 'react-icons/md'
import { RiLogoutBoxLine } from 'react-icons/ri'
import { AiFillApi } from 'react-icons/ai'
import { logOut } from 'features/auth/authSlice'
import { fireToast } from 'components/ui/Toast'
import { useDispatch } from 'react-redux'

const NavBar = ({ sitename = 'My Site' }) => {
  const dispatch = useDispatch()

  const handleLogOut = (e) => {
    e.preventDefault()
    dispatch(logOut())
    fireToast('info', 'Logged out')
  }

  return (
    <nav className="dashboard_nav">
      <div className="nav__logo">
        <Link to="/dashboard">{sitename}</Link>
      </div>

      <div className="dashboard__links">
        {/* To do: Make search icon, notification */}
        {/* <BsSearch /> */}
        {/* <MdOutlineNotificationAdd /> */}

        <NavItem>
          {(open, close) => (
            <Dropdown open={open} close={close}>
              <DropdownItem>
                <Link to="guide">
                  <MdOutlineLiveHelp />
                  Guide
                </Link>
              </DropdownItem>

              <DropdownItem>
                <a target="_blank" rel="noreferrer" href="https://blog2-api7991.herokuapp.com/docs/">
                  <AiFillApi />
                  API
                </a>
              </DropdownItem>

              <DropdownItem>
                <Link to="account">
                  <ImProfile />
                  Profile
                </Link>
              </DropdownItem>

              <DropdownItem>
                <Link to="account/change-password">
                  <MdOutlinePassword />
                  Change pw
                </Link>
              </DropdownItem>

              <DropdownItem>
                <Link to="logout" onClick={handleLogOut}>
                  <RiLogoutBoxLine /> Logout
                </Link>
              </DropdownItem>
            </Dropdown>
          )}
        </NavItem>
      </div>
    </nav>
  )
}

export default NavBar

const NavItem = ({ name = 'Guest', children }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="nav__item">
      <PlainButton onClick={() => setOpen(!open)}>
        <Avatar size="meduim" />
        {name}
        {open ? <BsCaretUpFill /> : <BsCaretDown />}
      </PlainButton>
      {open && children(open, () => setOpen(false))}
    </div>
  )
}
