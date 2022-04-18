import React from 'react';
import { Header, SerchForm, SerchButton, InputWord } from './Searchbar.styled';
import { AiOutlineSearch } from 'react-icons/ai';
import propTypes from 'prop-types';

export class Searchbar extends React.Component {
  state = { searchWord: '' };

  onInpurWord = e => {
    this.setState({ searchWord: e.currentTarget.value.trim() });
  };

  //внутрений метод сабмита обрабатывающий событие
  formSubmit = event => {
    event.preventDefault();
    this.props.setSearchWord(this.state.searchWord);
    // this.reset(); // выяснил что не совсем удобно когда много листал забывал а что собственно ввел
  };

  // очистка формы
  reset = () => {
    this.setState({ searchWord: '' });
  };

  render() {
    return (
      <Header>
        <SerchForm onSubmit={this.formSubmit}>
          <SerchButton type="submit">
            <AiOutlineSearch style={{color: "rgb(250, 250, 250)", width: "100%", height: "100%"}} />
          </SerchButton>
          <InputWord
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onInput={this.onInpurWord}
            value={this.state.searchWord}
          />
        </SerchForm>
      </Header>
    );
  }
}

Searchbar.propTypes = {
  setSearchWord: propTypes.func,
};
