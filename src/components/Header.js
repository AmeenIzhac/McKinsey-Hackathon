import React from "react";
import { Container, Navbar, Nav, Button } from 'react-bootstrap';

function Header(){
    return(<header>
    <nav class="bg-[#763E98] border-gray-200 px-7 lg:px-7 py-2.5 ">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a class="flex items-center">
                <img src={"/hpflogo.png"} class="mr-3 h-10 sm:h-11" alt="Flowbite Logo" />
            </a>
        </div>
    </nav>
</header>)
}

export default Header;