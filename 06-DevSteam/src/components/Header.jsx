import React from 'react'

const Header = () => {
  return (
  <header className='w-100 navbar navbar-dark bg-dark'>
    <div id="logo" className='d-fex gap-5 w-50 ' >
        <div role='button'>
        <i class="bi bi-controller fs-1 text-light me-3"></i>
            <span className='navbar-brand fw-bold fs-3'>DevSteam</span>
        </div>
        <input type="text" className='w-100 d-none d-md-block border-0 search-input px-4 my-2' placeholder='Buscar...' />
    </div>
    <div id="carrinho"></div>
    </header>

)
  
}

export default Header