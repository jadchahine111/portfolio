import React from "react"

const CommitBox = ({ count, date }) => {
  const getColor = (count) => {
    if (count === 0) return "bg-gray-800 "
    if (count < 5) return "bg-green-700"
    if (count < 10) return "bg-green-600"
    if (count < 15) return "bg-green-500"
    return "bg-gray-800"
  }

  return (
    <div className="flex flex-col items-center group">
      <div
        className={`w-3 h-3 ${getColor(
          count
        )} rounded-sm cursor-pointer transition-transform duration-200 ease-in-out transform group-hover:scale-150`}
        title={`${count} contributions on ${date.toDateString()}`}
      ></div>
    </div>
  )
}

export default CommitBox
