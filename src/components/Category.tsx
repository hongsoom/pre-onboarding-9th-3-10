import { Dispatch, SetStateAction } from 'react';
import { CategoryBtn } from '../styles/button';
import { CategoryDiv } from '../styles/layout';

interface CategoryProps {
  setCategory: Dispatch<SetStateAction<string>>;
}

const Category = ({ setCategory }: CategoryProps) => {
  return (
    <>
      <CategoryDiv>
        <CategoryBtn onClick={() => setCategory('TOTAL')}>전체</CategoryBtn>
        <CategoryBtn onClick={() => setCategory('AREA')}>Area</CategoryBtn>
        <CategoryBtn onClick={() => setCategory('BAR')}>Bar</CategoryBtn>
      </CategoryDiv>
    </>
  );
};

export default Category;
