import React from 'react'

function Header() {
  return (
    <header>
        <nav>
            <div className='nav-container'>
            <div className='logo'>OurCom</div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Career</li>
                </ul>
            </div>
        </nav>
    </header>
  )
}

//default export
export default Header


// //names export
// export function Greet (){
//     return <p>
//         Hello from names export 
//     </p>
// }

// export function Greet1 (){
//     return <p>
//         Hello from names export greet1
//     </p>
// }