import React from 'react'

const StarRating = ({raiting,handleRaiting}) => {
    // console.log(raiting)
    const stars=(rating)=>{
        var tab=[]
        for (let i=1;i<=5;i++){
            if(i<=rating){
                tab.push(
                    <span onClick={()=>handleRaiting(i)} style={{color:"gold" ,fontSize:"30px" ,cursor:"pointer"}}>★</span>
                )
              }else{
                tab.push(<span onClick={()=>handleRaiting(i)} style={{color:"black" ,fontSize:"30px" ,cursor:"pointer"}}>★</span>)
              }
        }
        return tab
      }
  return (
    <div>
      {
      React.Children.toArray(stars(raiting))     
      }  
    </div>
  )
}
StarRating.defaultProps={
  handleRating:()=>{}
}


export default StarRating