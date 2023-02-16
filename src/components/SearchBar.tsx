import { Button } from './styles/Button.styled';
import { SearchContainer } from './styles/SearchContainer.styled';

import ArrowRightSvg from '../assets/icon-arrow.svg';
import { SearchInput } from './styles/SearchInput.styled';
import { useRef } from 'react';

interface ISearchBarProps {
  handleSearch: (searchPhrase: string) => void;
  handleShowResult: (showResult: boolean) => void;
}

export const SearchBar: React.FC<ISearchBarProps> = ({ handleSearch, handleShowResult }) => {
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    handleShowResult(false);
    const searchPhrase = searchInputRef.current?.value;

    console.log('searchPhrase: ', searchPhrase);

    if (searchPhrase) {
      handleSearch(searchPhrase);
      handleShowResult(true);
    }
  };

  return (
    <SearchContainer>
      <SearchInput ref={searchInputRef} type="text" />
      <Button onClick={handleClick}>
        <img src={ArrowRightSvg} alt="arrow right" />
      </Button>
    </SearchContainer>
  );
};
