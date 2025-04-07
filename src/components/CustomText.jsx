
const CustomText = (props) => {
  return (
    <div>
        <h1>{props.textVal}</h1>
        <p>
        After spending six hours debugging,
         I finally deleted one line of code and everything started working.
          I have no idea why it worked, I just know that if I touch anything again,
           the entire project might collapse like a Jenga tower in an earthquake. 
           So now I just sit here… afraid, victorious, and slightly traumatized.
        </p>
      </div>
  )
}

export default CustomText