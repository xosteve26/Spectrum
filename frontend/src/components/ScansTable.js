import React from 'react'

const ScansTable = ({data}) => {
    console.log("DATA FOMR TABLE", data)
  return (
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg bg-gradient-to-b from-black to-gray-900">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase  dark:text-gray-400">
                  <tr>
                      <th scope="col" className="py-3 px-6 text-center">
                          ID
                      </th>
                      <th scope="col" className="py-3 px-6 text-center">
                          Track name
                      </th>
                      <th scope="col" className="py-3 px-6 text-center">
                          Artist name
                      </th>
                      <th scope="col" className="py-3 px-6 text-center" >
                          Genre
                      </th>
                      <th scope="col" className="py-3 px-6 text-center">
                          Rating
                      </th>
                      <th scope="col" className="py-3 px-6 text-center">
                          <span className="sr-only text-center ">View</span>
                      </th>
                  </tr>
              </thead>
              <tbody>
                {data.map((item, index) => {
                    return(
                        <tr key={index} className=" border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                            <th
                                scope="row"
                                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
                            >
                                {item.song_id}
                            </th>
                            
                            <th
                                scope="row"
                                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
                            >
                                {item.track_name}
                            </th>
                            <td className="py-4 px-6 text-center"> {item.artist_name} </td>
                            <td className="py-4 px-6 text-center">{item.genre} </td>
                            {item.explicit ? <td className="py-4 px-6 text-red-500 text-center"> E </td> : <td className="py-4 px-6 text-gray-300 text-center"> C </td>}
                            <td className="py-4 px-6 text-right">
                                <a
                                    href={`/song/${item.song_id}`}
                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                >
                                    View
                                </a>
                            </td>
                        </tr>
                    )
                })}
                  
              </tbody>
          </table>
      </div>

  )
}

export default ScansTable