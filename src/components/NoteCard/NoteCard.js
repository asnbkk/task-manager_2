import React from 'react';
import { Text } from '..';
import { Wrapper, Bottom } from './NoteCardStyle';

const NoteCard = ({ note: { title, text, date, id, theme, dueTo } }) => {
  return (
    <Wrapper>
      <Text size='lg' weight='bold'>
        {title}
      </Text>
      <Text>{theme}</Text>
      <Text margin='10px 0'>{text}</Text>
      <Bottom>
        <Text size='sm'>Posted at {date}</Text>
        <Text size='sm'>Due to {dueTo}</Text>
      </Bottom>
    </Wrapper>
  );
};

export default NoteCard;
