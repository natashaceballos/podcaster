import { FC } from 'react'
import { useSearcher } from './useSearcher'

const Searcher: FC<{}> = ({}) => {
  const {
    state: { filteredSeries, query },
    actions: { handleOnChange },
  } = useSearcher()

  return (
    <div className="w-full h-fit flex justify-end mb-14">
      <div className="mr-3 px-1 rounded-lg text-white bg-cyan-700 font-bold justify-items-center flex">
        {filteredSeries.length}
      </div>
      <input
        type="text"
        className=" pl-2  focus-visible:outline-slate-400"
        value={query}
        placeholder="Filter podcasts.."
        onChange={(e) => handleOnChange(e.target.value)}
      />
    </div>
  )
}

export default Searcher
