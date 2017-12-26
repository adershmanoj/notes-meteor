import React from 'react';
import moment from 'moment';

const NoteListItem =  (props) => {
  return (
    <div>
      <h5>{props.note.title || 'Unitiled note'}</h5>
      <p>{ moment(props.note.updatedAt).format('DD/M/YY') }</p>
    </div>
  );
};

NoteListItem.prototypes = {
  note: React.PropTypes.object.isRequired
}

export default NoteListItem;