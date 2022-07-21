import React from 'react'
import { Link } from 'react-router-dom'

const RelatedWorks = ({charts}) => {
    console.log("CHARTS",charts)
    const {tracks:data} = charts
  return (
      <>
          <section className="text-gray-600 body-font">
              <div className="container px-28 py-24 mx-auto">
                  <div className="flex flex-wrap w-full mb-20">
                      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                              RELATED WORKS
                          </h1>
                          <div className="h-1 w-20 bg-green-500 rounded" />
                      </div>
                      <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
                          Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
                          gentrify, subway tile poke farm-to-table. Franzen you probably haven't
                          heard of them man bun deep jianbing selfies heirloom prism food truck
                          ugh squid celiac humblebrag.
                      </p>
                  </div>
                  <div className="flex flex-wrap -m-4">
                        {data.map((item,index) => {
                            return (
                                <div className="xl:w-1/4 md:w-1/2 p-4">
                                    <div className="bg-gray-100 p-6 rounded-lg">
                                        <Link to={`/song/${item.key}`}>
                                        <img
                                            className="h-40 rounded w-full object-cover object-center mb-6"
                                            src={item.images.coverart}
                                            alt="content"
                                        />
                                        </Link>
                                        <h3 className="tracking-widest text-green-500 text-xs font-medium title-font">
                                            {item.subtitle}
                                        </h3>
                                        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                                            {item.title}
                                        </h2>
                                        <div className="relative flex items-center justify-center space-x-3">
                                            <a target="_blank" href={item.hub.options[0].actions[0].uri} className="text-gray-300 hover:text-gray-400">
                                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAC80lEQVRoge2Zz2sTQRTHP62liO3mIlgKrQeJQVBsRDyIVZBY/4Se/Ds8WHvxT1CQWj1Lf3ir3qpFz4r1UFsQfyFIK62QpAhiIR7eLBs3m+zM7Owmwn5h2CTz3rzvN++9yTCBHDlyuMAU8BDYAvaBRspjH9gE5oGKCwEl4GUGxOPGGlC0FXEF+KkW2gZuARPAkO2CBhgCysCMit0A9oBJ04VKBCIWgGF3HI3hAYsEYowy45fTAtDnnJo5+oAlhNMLXacpgnLqZibC8IAdhFvLBtAf4TCtnneR3aNXUAfuqdfTnQx9bCGqz6ZE6BhwHbgJPAY2gF/AHQ3fsuK2GZ6Iqv8akkaPZBnpRxqzHBqjbex/A4dj1vQUvzpQaJ6IEtLoMBeHEeSbvohkNGqrrgHvgPWm52uDmJH8XAt5BVxuev+NfwmvA5+aYtjE1Lb1f01tcECwqxw18DOJGWk7YBBMB4fU83kHmwHgFNIvE+qZGK6FhOEhp4TTwHk1zgFHXAdKS8gyQvgErbXcAD4Cbwn6ZyVpQNfNHq7dP8AH4I0aG4iAvQQxM2l23/cGcAb9jCdu9qSLuvJNLCTqrPVfIhfSa8iFOMR4WgtnuWuNAc8M/bq+/Y4gd2Ofm+zCwyk/WyHjHXxHge+0Ev8BPDKMmaqQuBJ5QnADUgrNDaq5A81YzoTYlEhNfR7V2BfU3Bcdchr8tAxtS6SqPh+LmFtRc/d1yMXw0za0LRHf7ykiZhDJhC+iChzXIRfDT9vQtkROIkf3qDKsAtd0iGnw0zZMUiJFJDNVJGtfla1uJnT4aRu6LBFbaAvxyyfq3tdlidjAU7FqOsZxV6auSsQG/pXpex3jeWU8kyYjS8wi3OZ0jCvKeBtJZa+ggPxeNYCruk5rymGR3vmjZxnhtGriWCRo6iW6m5kCgYhd5K7MCJMEYnaA28ilWxb/Yg2rWLME5bQLXLJdsIgcR9odDrMaq1hkIgoV4AGy7dUzIF5HbiXnMGjsHDlytMdfTE2Vbk5cUtkAAAAASUVORK5CYII=" />
                                            </a>
                                            <a target="_blank" href={item.url} className="text-gray-300 hover:text-gray-400">
                                                <img src="data:image/png;base64,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" />
                                            </a>
                                        </div>
                                    </div>
                                </div>


                            )
                        })}
                      

                  </div>
              </div>
          </section>
 
      </>

  )
}

export default RelatedWorks