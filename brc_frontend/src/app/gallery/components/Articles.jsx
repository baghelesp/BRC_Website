import React from 'react';
const art1 = "/PhotoGallery/art1.jpg"
const art2 = "/PhotoGallery/art2.jpeg"
const art3 = "/PhotoGallery/art3.jpeg"
const DemoComp = () => {
  return (
    <div class="mb-10">
        {/* Heading */}
        <div class="flex justify-center align-middle font-bold p-5 my-2"><h1><span class="text-[25px] tracking-[2.5px]">Articles</span></h1></div>

        {/* articles */}
        <div class="grid justify-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 md:gap-x-16 gap-y-20 p-6 sm:p-4">
            {/*article : 1 */}
            <div class="mx-auto max-w-auto min-w-[180px]  rounded-lg shadow bg-indigo-800 border-indigo-700 ">
              <a href="#">
                  <img class="rounded-t-lg  w-full h-[200px]" src={art1} alt="NA" />
              </a>
              <div class="p-5">
                  <a href="https://hbr.org/2017/01/the-truth-about-blockchain">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">The Truth About Blockchain</h5>
                  </a>
                  
                  <p class="mb-3  font-normal text-gray-700 dark:text-gray-300">Contracts, transactions, and the records of them are among the defining structures in our economic, legal, and political systems. They protect assets and set organizational boundaries. </p>
                  <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Read more
                      <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </a>
              </div>
            </div>

            {/*article : 2 */}
            <div class="mx-auto max-w-automin-w-[250px] rounded-lg shadow bg-violet-800 border-violet-700 ">
              <a href="#">
                  <img class="rounded-t-lg w-full h-[200px]" src={art2} alt="NA" />
              </a>
              <div class="p-5">
                  <a href="https://hbr.org/2017/01/the-truth-about-blockchain">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">The Future Of Blockchain Technology : 10 Predictions For 2021</h5>
                  </a>
                  
                  <p class="mb-3  font-normal text-gray-700 dark:text-gray-300">Blockchain is an emerging technology that has an uncertain future. Their future lies in providing a cheap lightning-fast.. </p>
                  <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Read more
                      <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </a>
              </div>
            </div>

            {/*article : 3 */}
            <div class="mx-auto max-w-automin-w-[250px]  rounded-lg shadow bg-purple-800 border-purple-700 ">
              <a href="#">
                  <img class="rounded-t-lg  w-full h-[200px]" src={art3} alt="NA" />
              </a>
              <div class="p-5">
                  <a href="https://hbr.org/2017/01/the-truth-about-blockchain">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">The Not-So-Beginners Guide to Blockchain</h5>
                  </a>
                  
                  <p class="mb-3  font-normal text-gray-700 dark:text-gray-300">Blockchain technology is often thought to be synonymous with cryptocurrencies like Bitcoin and Ethereum. In reality, cryptocurrencies are..</p>
                  <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Read more
                      <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </a>
              </div>
            </div>
          

            {/*article : 4 */}
            <div class="mx-auto max-w-auto min-w-[250px]  rounded-lg shadow bg-purple-800 border-purple-700">
              <a href="#">
                  <img class="rounded-t-lg w-full h-[200px]" src={art1} alt="NA" />
              </a>
              <div class="p-5">
                  <a href="https://hbr.org/2017/01/the-truth-about-blockchain">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">The Truth About Blockchain</h5>
                  </a>
                  
                  <p class="mb-3  font-normal text-gray-700 dark:text-gray-300">Contracts, transactions, and the records of them are among the defining structures in our economic, legal, and political systems. They protect assets and set organizational boundaries. </p>
                  <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Read more
                      <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </a>
              </div>
            </div>

            {/*article : 5 */}
            <div class="mx-auto max-w-automin-w-[250px] rounded-lg shadow bg-indigo-800 border-indigo-700">
              <a href="#">
                  <img class="rounded-t-lg w-full h-[200px]" src={art1} alt="NA" />
              </a>
              <div class="p-5">
                  <a href="https://hbr.org/2017/01/the-truth-about-blockchain">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">The Truth About Blockchain</h5>
                  </a>
                  
                  <p class="mb-3  font-normal text-gray-700 dark:text-gray-300">Contracts, transactions, and the records of them are among the defining structures in our economic, legal, and political systems. They protect assets and set organizational boundaries.  </p>
                  <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Read more
                      <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </a>
              </div>
            </div>
            {/*article : 6*/}
            <div class="mx-auto max-w-auto min-w-[250px]  rounded-lg shadow bg-violet-800 border-violet-700">
              <a href="#">
                  <img class="rounded-t-lg w-full h-[200px]" src={art1} alt="NA" />
              </a>
              <div class="p-5">
                  <a href="https://hbr.org/2017/01/the-truth-about-blockchain">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">The Truth About Blockchain</h5>
                  </a>
                  
                  <p class="mb-3  font-normal text-gray-700 dark:text-gray-300">Contracts, transactions, and the records of them are among the defining structures in our economic, legal, and political systems. They protect assets and set organizational boundaries. </p>
                  <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Read more
                      <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </a>
              </div>
            </div>

        </div>
    </div>
  );
}

export default DemoComp;
