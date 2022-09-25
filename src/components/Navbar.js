import React from "react";

function Navbar(){
    return(<nav class="bg-gradient-to-r from-[#763E98] to-violet-400 border-gray-200 rounded dark:bg-[#763E98]">
    <div class="container flex flex-wrap justify-between items-center mx-auto">
      <a class="flex items-center">
      <img src={"/hpflogo.png"} class="object-cover mr-1 h-10 sm:h-10" alt="HPF Logo" />
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>
      </a>

      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul class="flex flex-col p-4 mt-rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-meduim md:border-0">
          <li>
            <a href="/campaigns" class="block py-2 pr-4 pl-3 text-lg text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Campaigns</a>
          </li>
          <li>
            <a href="/myfunded" class="block py-2 pr-4 pl-3 text-lg text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-white dark:hover:bg-black dark:hover:text-white md:dark:hover:bg-transparent">My Funded Projects</a>
          </li>
          <li>
            <a href="/account" class="block py-2 pr-4 pl-3 text-lg text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-white dark:hover:bg-black dark:hover:text-white md:dark:hover:bg-transparent">Account</a>
          </li>
          <div className=" md:inline-block py-2 pr-4 pl-3">
                    <a
                        href="javascript:void(0)"
                        className="py-2 pr-4 pl-3 text-lg text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                    >
                        Sign Out
                    </a>
                </div>

        </ul>

      </div>
    </div>
  </nav>)
}

export default Navbar;