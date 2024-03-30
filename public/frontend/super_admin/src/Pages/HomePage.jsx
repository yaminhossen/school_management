import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <>
      {/* home_page start */}
      <div className='home_page'>
      {/* style={{ "backgroundImage": "url(./assets/customize_img/home_bg.jpg)" }} */}
        <div>
          <div className='container'>
            <div className='home_page_content'>

              {/* header_area start */}
              <div className='header_area'>
                <div className='left_area'>
                  <img src="/frontend/super_admin/assets/customize_img/logo_big.png" alt="logo" />
                </div>

                <div className='right_area'>
                  <ul>
                    <li>
                      <Link className='menu_text' to={'/login'}>login</Link>
                    </li>
                    {/* <li>
                      <Link className='menu_text' to={'/dashboard'}>dashboard</Link>
                    </li> */}
                  </ul>
                </div>
              </div>
              {/* header_area end */}

              {/* banner_area start */}
              <div className='banner_area'>
                <div className='banner_text'>
                  <p className='sub_title_text'>How to make a custom</p>
                  <h2 className='title_text'>crm software</h2>
                  <p className='sub_title_text'>for your business: an ultimate guide</p>
                </div>
              </div>
              {/* banner_area end */}

            </div>
          </div>
        </div>
      </div>
      {/* home_page end */}
    </>
  )
}

export default HomePage