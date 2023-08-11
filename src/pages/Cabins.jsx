import { useEffect } from "react"
import { getCabins } from "../services/api-cabins"

export default function Cabins() {
  useEffect(function () {
    getCabins().then(data => console.log(data));
  })
  return (
    <div>
      
    </div>
  )
}
