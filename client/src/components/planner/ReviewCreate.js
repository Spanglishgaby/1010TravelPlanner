import {useState} from 'react'
import { Form,Button} from 'semantic-ui-react'
const ReviewCreate = ({setReviews, user}) => {
    const [review, setReview] = useState('')
    const [reviewStars, setReviewStars] = useState('')
    // const [user_Id, setUserId] = useState('')
    

 const newReview= {
    review:review,
    review_stars:reviewStars,
    user_id:user.id,
 }
    function handleSubmit (e){
        e.preventDefault()
        fetch("/reviews", {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(newReview)
          })
          .then((r) => r.json())
          .then((data) => {
          setReviews((currentReviews)=>[data, ...currentReviews])
          })
          //alert(`${orders.id}`)
    } 


  return (
    <Form>
        <Form.Group widths='equal'>
          <Form.Input fluid label='Leave a Review here' placeholder='Review' onChange={(e) => setReview(e.target.value)}/>
          <select name="raiting" id="raiting" onChange={(e) => setReviewStars(e.target.value)}>
            <option value="none">⭐</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
          </select>
        </Form.Group>
        <Button onClick={handleSubmit}>Create Review</Button>
        </Form>
  )
}

export default ReviewCreate