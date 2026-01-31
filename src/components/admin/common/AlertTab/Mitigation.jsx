import React from 'react'
import { SquareCheckBig } from 'lucide-react';


const Mitigation = () => {
  return (
    <div className="w-full bg-white p-6 rounded-xl shadow mt-10">
      <div className="mb-4 flex items-center gap-2">
        <SquareCheckBig className="text-[#1ABC9C]" />
        <h2 className="text-xl font-medium text-gray-900">Suggested Mitigation Steps</h2>
      </div>

      
    </div>
  )
}

export default Mitigation