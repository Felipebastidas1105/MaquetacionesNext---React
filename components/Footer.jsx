

export default function Footer() {
    return (
      <div>
             
  <footer class="bg-slate-950 dark:bg-gray-900 mt-64">
      <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div class="md:flex md:justify-between">
            <div class="mb-6 md:mb-0">
                <a href="#" className="flex items-center ">
                    <img src="data:image/jpeg;base64,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" className="h-20 mr-3" alt="FlowBite Logo" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap text-white dark:text-white ">InmoVilla</span>
                </a>
            </div>
            <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                <div>
                    <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                    <ul class="text-gray-500 dark:text-gray-400 font-medium">
                        <li class="mb-4">
                            <a href="https://flowbite.com/" class="hover:underline">Flowbite</a>
                        </li>
                        <li>
                            <a href="https://tailwindcss.com/" class="hover:underline">Tailwind CSS</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                    <ul class="text-gray-500 dark:text-gray-400 font-medium">
                        <li class="mb-4">
                            <a href="https://github.com/themesberg/flowbite" class="hover:underline ">Github</a>
                        </li>
                        <li>
                            <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Discord</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                    <ul class="text-gray-500 dark:text-gray-400 font-medium">
                        <li class="mb-4">
                            <a href="#" class="hover:underline">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-between">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">InmoVilla™</a>. All Rights Reserved.
            </span>
            <div class="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                    <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                          <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                      </svg>
                    <span class="sr-only">Facebook page</span>
                </a>
                <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                    <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                          <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
                      </svg>
                    <span class="sr-only">Discord community</span>
                </a>
                <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                    <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                      <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
                  </svg>
                    <span class="sr-only">Twitter page</span>
                </a>
                <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                    <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                    </svg>
                    <span class="sr-only">GitHub account</span>
                </a>
                <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                    <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clip-rule="evenodd"/>
                  </svg>
                    <span class="sr-only">Dribbble account</span>
                </a>
            </div>
        </div>
      </div>
  </footer>
  
      </div>
    )
  }
  