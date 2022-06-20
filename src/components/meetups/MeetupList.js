import MeetUpItem from './MeetupItem';
import classes from './MeetupList.module.css'
function MeetUpList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map(meetup => <MeetUpItem
        key ={meetup.id}
        items={meetup}
      />)}
  </ul>
)

}
export default MeetUpList;