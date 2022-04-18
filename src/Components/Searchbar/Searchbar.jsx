import {useState} from 'react';
import { Header, SerchForm, SerchButton, InputWord } from './Searchbar.styled';
import { AiOutlineSearch } from 'react-icons/ai';
import propTypes from 'prop-types';

export const Searchbar = ({setSearchWordProps}) => {
  const [searchWord, SetSearchWord] = useState('')

  const onInpurWord = e => {
    SetSearchWord(e.currentTarget.value.trim());
  };

  //внутрений метод сабмита обрабатывающий событие
  const formSubmit = event => {
    event.preventDefault();
    setSearchWordProps(searchWord);
  };

  return (
    <Header>
      <SerchForm onSubmit={formSubmit}>
        <SerchButton type="submit">
          <AiOutlineSearch style={{color: "rgb(250, 250, 250)", width: "100%", height: "100%"}} />
        </SerchButton>
        <InputWord
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onInput={onInpurWord}
          value={searchWord}
        />
      </SerchForm>
    </Header>
  );
}

Searchbar.propTypes = {
  setSearchWordProps: propTypes.func,
};
