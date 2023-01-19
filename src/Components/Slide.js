import React from 'react'

function Slide() {
  return (
    <div>
  <header  style={{ 
      backgroundImage: `url("https://miro.medium.com/max/720/0*LcsE8ofjsfFjjJjv")` 
    } }>
    
            <div class="container px-4 text-center">
                <h1 class="fw-bolder text-light bg-dark">Welcome to Yours College Library</h1>
                <p class="lead text-light bg-dark">A library is a collection of materials, books or media that are accessible for use and not just for display purposes. A library provides physical (hard copies) or digital access (soft copies) materials, and may be a physical location or a virtual space, or both. A library's collection can include printed materials and other physical resources in many formats such as DVD, CD and cassette as well as access to information, music or other content held on bibliographic databases.</p>
            </div>
        </header>

        <section id="about">
            <div class="container px-4">
                <div class="row gx-4 justify-content-center">
                    <div class="col-lg-8">
                        <h2>About this Library</h2>
                        <p class="lead">This is a great place to read different types of books:</p>
                        <ul>
                            <li>Library buildings often provide quiet areas for studying, as well as common areas for group study and collaboration, and may provide public facilities for access to their electronic resources; for instance: computers and access to the Internet. The library's clientele and services offered vary depending on its type: users of a public library have different needs from those of a special library or academic library, for example. Libraries may also be community hubs, where programs are delivered and people engage in lifelong learning. Modern libraries extend their services beyond the physical walls of a building by providing material accessible by electronic means, including from home via the Internet.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        
    </div>
  )
}

export default Slide