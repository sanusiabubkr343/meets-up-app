import NewMeetupForm from '../components/meetups/NewMeetupForm'
import {useNavigate} from 'react-router-dom'
function NewMeetupPage() {
  const navigate = useNavigate();
  function addMeetupHandler(meetupData) {
    fetch(
      'https://meet-up-app-ad51e-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json',
        },
      },
    ).then(
      () => {
        navigate('/ ');
      }
    )
  }
  return (
    <section>
      <h1>Add New meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler}></NewMeetupForm>
    </section>
  )
}
export default NewMeetupPage
